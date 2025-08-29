<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

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

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

// Email destinations
$primary_email = 'contact@growth-energy.fr';
$secondary_email = 'contact@growth-energy.fr';

// Email configuration
$to = $primary_email . ',' . $secondary_email;
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
        $subject = 'Nouvelle candidature pour poste : ' . htmlspecialchars($data['jobTitle']);
        $message = "
Nouvelle candidature pour le poste : " . htmlspecialchars($data['jobTitle']) . "

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

// Email headers
$headers = [
    'From: ' . $from,
    'Reply-To: ' . htmlspecialchars($data['email']),
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8'
];

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

// Send email
$success = mail($to, $subject, $message, implode("\r\n", $headers));

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