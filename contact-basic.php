<?php
// Basic contact email handler (no attachments)
// CORS and JSON response headers
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

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  // Fallback to form-encoded
  $data = $_POST;
}

// Extract and sanitize
$prenom = trim($data['prenom'] ?? '');
$nom = trim($data['nom'] ?? '');
$email = trim($data['email'] ?? '');
$telephone = trim($data['telephone'] ?? '');
$sujet = trim($data['sujet'] ?? '');
$message = trim($data['message'] ?? '');

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

$to = 'claudia@solio-group.com';
$from = 'noreply@solio-group.com';
$subject = 'Nouveau message du formulaire de contact';

$body = "Vous avez reçu un nouveau message de contact:\n\n" .
        "Prénom: " . htmlspecialchars($prenom) . "\n" .
        "Nom: " . htmlspecialchars($nom) . "\n" .
        "Email: " . htmlspecialchars($email) . "\n" .
        "Téléphone: " . htmlspecialchars($telephone ?: 'Non renseigné') . "\n" .
        "Sujet: " . htmlspecialchars($sujet ?: 'Non renseigné') . "\n\n" .
        "Message:\n" . htmlspecialchars($message) . "\n";

$headers = [
  'From: ' . $from,
  'Reply-To: ' . $email,
  'Bcc: maxwell.o@asking-group.com',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Failed to send email']);
}
