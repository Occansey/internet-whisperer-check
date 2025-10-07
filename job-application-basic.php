<?php
// Basic job application email handler with PDF attachments

// Error handling to always return JSON
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Catch any PHP errors and return as JSON
register_shutdown_function(function() {
  $error = error_get_last();
  if ($error !== null && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
    header('Content-Type: application/json; charset=UTF-8');
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server error: ' . $error['message']]);
    exit;
  }
});

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  echo json_encode(['ok' => true]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method not allowed']);
  exit;
}

// Extract form data and files
$prenom = trim($_POST['prenom'] ?? '');
$nom = trim($_POST['nom'] ?? '');
$email = trim($_POST['email'] ?? '');
$telephone = trim($_POST['telephone'] ?? '');
$message = trim($_POST['message'] ?? '');
$jobTitle = trim($_POST['jobTitle'] ?? '');
$language = trim($_POST['language'] ?? 'fr');

// Validation
if (!$prenom || !$nom || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'Invalid email']);
  exit;
}

// Check for CV upload
if (!isset($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'CV is required']);
  exit;
}

$to = 'claudia@solio-group.com';
$from = 'noreply@solio-group.com';
$subject = 'Nouvelle candidature: ' . $jobTitle;

// Email body
$body = "Nouvelle candidature reçue:\n\n" .
        "Poste: " . htmlspecialchars($jobTitle) . "\n" .
        "Prénom: " . htmlspecialchars($prenom) . "\n" .
        "Nom: " . htmlspecialchars($nom) . "\n" .
        "Email: " . htmlspecialchars($email) . "\n" .
        "Téléphone: " . htmlspecialchars($telephone ?: 'Non renseigné') . "\n\n" .
        "Lettre de motivation:\n" . htmlspecialchars($message) . "\n";

// Prepare multipart email with attachments
$boundary = md5(time());

$headers = [
  'From: ' . $from,
  'Reply-To: ' . $email,
  'Bcc: maxwell.o@asking-group.com',
  'MIME-Version: 1.0',
  'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$message_body = "--{$boundary}\r\n";
$message_body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message_body .= $body . "\r\n";

// Attach CV
$cv_content = file_get_contents($_FILES['cv']['tmp_name']);
$cv_encoded = base64_encode($cv_content);
$cv_name = basename($_FILES['cv']['name']);

$message_body .= "--{$boundary}\r\n";
$message_body .= "Content-Type: application/pdf; name=\"{$cv_name}\"\r\n";
$message_body .= "Content-Transfer-Encoding: base64\r\n";
$message_body .= "Content-Disposition: attachment; filename=\"{$cv_name}\"\r\n\r\n";
$message_body .= chunk_split($cv_encoded) . "\r\n";

// Attach other documents if present
if (isset($_FILES['autreDocument']) && $_FILES['autreDocument']['error'] === UPLOAD_ERR_OK) {
  $doc_content = file_get_contents($_FILES['autreDocument']['tmp_name']);
  $doc_encoded = base64_encode($doc_content);
  $doc_name = basename($_FILES['autreDocument']['name']);
  
  $message_body .= "--{$boundary}\r\n";
  $message_body .= "Content-Type: application/octet-stream; name=\"{$doc_name}\"\r\n";
  $message_body .= "Content-Transfer-Encoding: base64\r\n";
  $message_body .= "Content-Disposition: attachment; filename=\"{$doc_name}\"\r\n\r\n";
  $message_body .= chunk_split($doc_encoded) . "\r\n";
}

$message_body .= "--{$boundary}--";

// Send email
$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $message_body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  error_log('Mail function failed for job application: ' . $jobTitle);
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Failed to send email. Please contact support.']);
}
