<?php
// Security headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // In production, replace * with specific domain
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Rate limiting using session
session_start();

// Initialize rate limiting
if (!isset($_SESSION['rate_limit'])) {
    $_SESSION['rate_limit'] = [
        'count' => 0,
        'first_attempt' => time(),
        'blocked_until' => 0
    ];
}

// Check if blocked
if ($_SESSION['rate_limit']['blocked_until'] > time()) {
    http_response_code(429);
    echo json_encode([
        'error' => 'Too many requests',
        'retry_after' => $_SESSION['rate_limit']['blocked_until'] - time()
    ]);
    exit();
}

// Reset if window expired (15 minutes)
if (time() - $_SESSION['rate_limit']['first_attempt'] > 900) {
    $_SESSION['rate_limit'] = [
        'count' => 0,
        'first_attempt' => time(),
        'blocked_until' => 0
    ];
}

// Increment request count
$_SESSION['rate_limit']['count']++;

// Block if too many attempts (5 per 15 minutes)
if ($_SESSION['rate_limit']['count'] > 5) {
    $_SESSION['rate_limit']['blocked_until'] = time() + 3600; // Block for 1 hour
    http_response_code(429);
    echo json_encode([
        'error' => 'Too many requests. Please try again later.',
        'retry_after' => 3600
    ]);
    exit();
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get input - handle both JSON and multipart/form-data
if (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') !== false) {
    // Handle file upload (multipart/form-data)
    $data = $_POST;
} else {
    // Handle JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
}

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit();
}

// Check honeypot field
if (isset($data['website']) && !empty($data['website'])) {
    // Bot detected - silent rejection
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you']);
    exit();
}

// Input validation and sanitization
function validateEmail($email) {
    $email = filter_var(trim($email), FILTER_VALIDATE_EMAIL);
    if (!$email || strlen($email) > 255) {
        return false;
    }
    return strtolower($email);
}

function validateName($name) {
    $name = trim($name);
    if (strlen($name) < 1 || strlen($name) > 100) {
        return false;
    }
    // Allow only letters, spaces, hyphens, apostrophes, and accented characters
    if (!preg_match("/^[a-zA-ZÀ-ÿ\\s\\-']+$/u", $name)) {
        return false;
    }
    return htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
}

function validatePhone($phone) {
    $phone = trim($phone);
    if (empty($phone)) return '';
    if (strlen($phone) < 8 || strlen($phone) > 20) {
        return false;
    }
    // Allow only digits, spaces, hyphens, plus, and parentheses
    if (!preg_match("/^[\\d\\s\\-\\+\\(\\)]+$/", $phone)) {
        return false;
    }
    return htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
}

function validateText($text, $maxLength = 5000) {
    $text = trim($text);
    if (strlen($text) > $maxLength) {
        return false;
    }
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

// Validate required fields based on type
if (!isset($data['type']) || !in_array($data['type'], ['showroom-contact', 'candidature', 'postuler', 'inscription', 'contact'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid form type']);
    exit();
}

// Validate email
if (!isset($data['email']) || !($validatedEmail = validateEmail($data['email']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}
$data['email'] = $validatedEmail;

// Validate name
if ($data['type'] === 'postuler') {
    if (!isset($data['fullName']) || !($validatedName = validateName($data['fullName']))) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid name']);
        exit();
    }
    $data['fullName'] = $validatedName;
} else {
    if (!isset($data['name']) || !($validatedName = validateName($data['name']))) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid name']);
        exit();
    }
    $data['name'] = $validatedName;
}

// Validate phone if provided
if (isset($data['phone'])) {
    $validatedPhone = validatePhone($data['phone']);
    if ($validatedPhone === false) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid phone number']);
        exit();
    }
    $data['phone'] = $validatedPhone;
}

// Validate message/coverLetter
if (isset($data['message'])) {
    $validatedMessage = validateText($data['message'], 5000);
    if ($validatedMessage === false) {
        http_response_code(400);
        echo json_encode(['error' => 'Message too long']);
        exit();
    }
    $data['message'] = $validatedMessage;
}

if (isset($data['coverLetter'])) {
    $validatedLetter = validateText($data['coverLetter'], 1000);
    if ($validatedLetter === false) {
        http_response_code(400);
        echo json_encode(['error' => 'Cover letter too long']);
        exit();
    }
    $data['coverLetter'] = $validatedLetter;
}

// Email configuration
$to = 'maxwell.o@asking-group.com';
$from = 'noreply@growth-energy.com';

// Build email content based on form type
$subject = '';
$message = '';

switch ($data['type']) {
    case 'showroom-contact':
        $subject = 'Nouvelle demande de visite showroom - Growth Energy';
        $message = "
Nouvelle demande de visite showroom

Informations du contact :
- Nom : " . htmlspecialchars($data['name']) . "
- Email : " . htmlspecialchars($data['email']) . "
- Téléphone : " . htmlspecialchars($data['phone'] ?? 'Non renseigné') . "
- Entreprise : " . htmlspecialchars($data['company'] ?? 'Non renseignée') . "

Détails de la visite :
- Showroom souhaité : " . htmlspecialchars($data['showroom'] ?? 'Non spécifié') . "
- Date souhaitée : " . htmlspecialchars($data['visitDate'] ?? 'Non spécifiée') . "
- Services d'intérêt : " . htmlspecialchars($data['services'] ?? 'Non spécifiés') . "

Message :
" . htmlspecialchars($data['message'] ?? 'Aucun message') . "

---
Email envoyé depuis le site Growth Energy
Date : " . date('Y-m-d H:i:s') . "
        ";
        break;
        
    case 'candidature':
        $subject = 'Nouvelle candidature spontanée - Growth Energy';
        $message = "
Nouvelle candidature spontanée

Informations du candidat :
- Nom : " . htmlspecialchars($data['name']) . "
- Email : " . htmlspecialchars($data['email']) . "
- Téléphone : " . htmlspecialchars($data['phone'] ?? 'Non renseigné') . "

Message :
" . htmlspecialchars($data['message'] ?? 'Aucun message') . "

CV attaché : " . ($data['cv'] ? 'Oui' : 'Non') . "

---
Email envoyé depuis le site Growth Energy
Date : " . date('Y-m-d H:i:s') . "
        ";
        break;
        
    case 'postuler':
        $subject = 'Nouvelle candidature pour le poste : ' . htmlspecialchars($data['jobTitle'] ?? 'Non spécifié');
        
        // For job applications with file attachments, we'll set headers later
        $message = "
Nouvelle candidature pour le poste : " . htmlspecialchars($data['jobTitle'] ?? 'Non spécifié') . "

Informations du candidat :
- Nom complet : " . htmlspecialchars($data['fullName'] ?? 'Non renseigné') . "
- Email : " . htmlspecialchars($data['email']) . "
- Téléphone : " . htmlspecialchars($data['phone'] ?? 'Non renseigné') . "

Lettre de motivation :
" . htmlspecialchars($data['coverLetter'] ?? 'Non fournie') . "

---
Email envoyé depuis le site Solio Group
Date : " . date('Y-m-d H:i:s') . "
        ";
        break;
        
    case 'inscription':
        $subject = 'Nouvelle inscription événement : ' . htmlspecialchars($data['eventTitle']);
        $message = "
Nouvelle inscription pour l'événement : " . htmlspecialchars($data['eventTitle']) . "

Informations du participant :
- Nom : " . htmlspecialchars($data['name']) . "
- Email : " . htmlspecialchars($data['email']) . "
- Téléphone : " . htmlspecialchars($data['phone'] ?? 'Non renseigné') . "
- Mode de participation : " . htmlspecialchars($data['participationMode'] ?? 'Non spécifié') . "

Message :
" . htmlspecialchars($data['message'] ?? 'Aucun message') . "

---
Email envoyé depuis le site Growth Energy
Date : " . date('Y-m-d H:i:s') . "
        ";
        break;
        
    case 'contact':
    default:
        $subject = 'Nouveau message de contact - Growth Energy';
        $message = "
Nouveau message de contact

Informations du contact :
- Nom : " . htmlspecialchars($data['name']) . "
- Email : " . htmlspecialchars($data['email']) . "
- Téléphone : " . htmlspecialchars($data['phone'] ?? 'Non renseigné') . "

Message :
" . htmlspecialchars($data['message'] ?? 'Aucun message') . "

---
Email envoyé depuis le site Growth Energy
Date : " . date('Y-m-d H:i:s') . "
        ";
        break;
}

// Email headers (only set if not already set by case)
if (!isset($headers)) {
    $headers = [
        'From: ' . $from,
        'Reply-To: ' . htmlspecialchars($data['email']),
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8'
    ];
}

// Function to log contact to CSV
function logContactToCSV($data, $type) {
    $csv_file = 'contacts.csv';
    $file_exists = file_exists($csv_file);
    
    // Open file for writing (append mode)
    $handle = fopen($csv_file, 'a');
    
    if ($handle === false) {
        error_log("Failed to open CSV file for writing");
        return false;
    }
    
    // Write header if file is new
    if (!$file_exists) {
        $header = [
            'Date',
            'Type',
            'Name',
            'Email', 
            'Phone',
            'Company',
            'Showroom',
            'Services',
            'Rooms',
            'ACs',
            'Monthly Load (kW)',
            'Monthly Consumption (kWh)',
            'Message'
        ];
        fputcsv($handle, $header);
    }
    
    // Prepare data row
    $row = [
        date('Y-m-d H:i:s'),
        $type,
        $data['name'] ?? '',
        $data['email'] ?? '',
        $data['phone'] ?? '',
        $data['company'] ?? '',
        $data['showroom'] ?? '',
        $data['services'] ?? '',
        $data['rooms'] ?? '',
        $data['acs'] ?? '',
        $data['monthlyLoadKw'] ?? '',
        $data['monthlyConsumptionKwh'] ?? '',
        $data['message'] ?? ''
    ];
    
    // Write data row
    $result = fputcsv($handle, $row);
    fclose($handle);
    
    return $result !== false;
}

// Send email with attachments if applicable
$success = false;

// Check if this is a job application with file attachments
if ($data['type'] === 'postuler' && !empty($_FILES)) {
    // Use multipart MIME for attachments
    $boundary = md5(time());
    
    $headers = [
        'From: ' . $from,
        'Reply-To: ' . htmlspecialchars($data['email']),
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"'
    ];
    
    // Build multipart message
    $email_message = "--" . $boundary . "\r\n";
    $email_message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $email_message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $email_message .= $message . "\r\n\r\n";
    
    // Attach CV if exists
    if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
        $file_content = chunk_split(base64_encode(file_get_contents($_FILES['cv']['tmp_name'])));
        $email_message .= "--" . $boundary . "\r\n";
        $email_message .= "Content-Type: " . $_FILES['cv']['type'] . "; name=\"" . $_FILES['cv']['name'] . "\"\r\n";
        $email_message .= "Content-Transfer-Encoding: base64\r\n";
        $email_message .= "Content-Disposition: attachment; filename=\"" . $_FILES['cv']['name'] . "\"\r\n\r\n";
        $email_message .= $file_content . "\r\n";
    }
    
    // Attach other documents if exists
    if (isset($_FILES['otherDocuments']) && $_FILES['otherDocuments']['error'] === UPLOAD_ERR_OK) {
        $file_content = chunk_split(base64_encode(file_get_contents($_FILES['otherDocuments']['tmp_name'])));
        $email_message .= "--" . $boundary . "\r\n";
        $email_message .= "Content-Type: " . $_FILES['otherDocuments']['type'] . "; name=\"" . $_FILES['otherDocuments']['name'] . "\"\r\n";
        $email_message .= "Content-Transfer-Encoding: base64\r\n";
        $email_message .= "Content-Disposition: attachment; filename=\"" . $_FILES['otherDocuments']['name'] . "\"\r\n\r\n";
        $email_message .= $file_content . "\r\n";
    }
    
    $email_message .= "--" . $boundary . "--";
    
    $success = mail($to, $subject, $email_message, implode("\r\n", $headers));
} else {
    // Regular email without attachments
    $success = mail($to, $subject, $message, implode("\r\n", $headers));
}

// Log ALL contact types to CSV (not just showroom contacts)
if ($success) {
    logContactToCSV($data, $data['type'] ?? 'contact');
}

// Send confirmation email to user for showroom contact
if ($success && $data['type'] === 'showroom-contact') {
    $confirmation_subject = 'Confirmation de votre demande de visite - Growth Energy';
    $confirmation_message = "
Bonjour " . htmlspecialchars($data['name']) . ",

Merci pour votre intérêt pour nos showrooms Growth Energy à Zanzibar !

Nous avons bien reçu votre demande de visite avec les informations suivantes :
- Showroom souhaité : " . htmlspecialchars($data['showroom'] ?? 'Non spécifié') . "
- Services d'intérêt : " . htmlspecialchars($data['services'] ?? 'Non spécifiés') . "

Notre équipe vous contactera sous 24-48h pour organiser votre visite et répondre à toutes vos questions sur nos solutions d'énergie propre.

En attendant, n'hésitez pas à visiter notre site web pour découvrir davantage nos innovations en énergie solaire, stockage d'énergie et mobilité électrique.

Cordialement,
L'équipe Growth Energy

---
Growth Energy - Clean Energy Solutions
Email: contact@growth-energy.fr
    ";
    
    $confirmation_headers = [
        'From: ' . $from,
        'Reply-To: contact@growth-energy.fr',
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    mail(htmlspecialchars($data['email']), $confirmation_subject, $confirmation_message, implode("\r\n", $confirmation_headers));
}

// Send confirmation email to user for job applications
if ($success && $data['type'] === 'postuler') {
    $language = $data['language'] ?? 'fr';
    
    if ($language === 'en') {
        $confirmation_subject = 'Application Confirmation - Solio Group';
        $confirmation_message = "
Dear " . htmlspecialchars($data['fullName']) . ",

Thank you for your interest in joining Solio Group!

We have successfully received your application for the position: " . htmlspecialchars($data['jobTitle']) . "

Our HR team will carefully review your application and contact you within 2-3 weeks if your profile matches our requirements.

In the meantime, feel free to explore more about our mission and values on our website.

Best regards,
The Solio Group HR Team

---
Solio Group
Email: rh@solio-group.com
        ";
    } else {
        $confirmation_subject = 'Confirmation de candidature - Solio Group';
        $confirmation_message = "
Bonjour " . htmlspecialchars($data['fullName']) . ",

Merci pour votre intérêt à rejoindre le Solio Group !

Nous avons bien reçu votre candidature pour le poste : " . htmlspecialchars($data['jobTitle']) . "

Notre équipe RH examinera attentivement votre dossier et vous contactera sous 2-3 semaines si votre profil correspond à nos besoins.

En attendant, n'hésitez pas à découvrir davantage notre mission et nos valeurs sur notre site web.

Cordialement,
L'équipe RH du Solio Group

---
Solio Group
Email: rh@solio-group.com
        ";
    }
    
    $confirmation_headers = [
        'From: ' . $from,
        'Reply-To: rh@solio-group.com',
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    mail(htmlspecialchars($data['email']), $confirmation_subject, $confirmation_message, implode("\r\n", $confirmation_headers));
}

if ($success) {
    // Log successful send (optional)
    error_log("Email sent successfully to: $to");
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    // Log error
    error_log("Failed to send email to: $to");
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email',
        'message' => 'Please try again later'
    ]);
}
?>