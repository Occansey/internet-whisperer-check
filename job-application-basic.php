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

// File validation and limits
$MAX_FILE_SIZE = 7 * 1024 * 1024; // 7MB per file
$MAX_TOTAL_SIZE = 18 * 1024 * 1024; // 18MB combined raw size (base64 adds ~33%)
$ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

function upload_error_message($code) {
  switch ($code) {
    case UPLOAD_ERR_INI_SIZE: return 'File exceeds server limit (upload_max_filesize)';
    case UPLOAD_ERR_FORM_SIZE: return 'File exceeds form limit (MAX_FILE_SIZE)';
    case UPLOAD_ERR_PARTIAL: return 'File was only partially uploaded';
    case UPLOAD_ERR_NO_FILE: return 'No file was uploaded';
    case UPLOAD_ERR_NO_TMP_DIR: return 'Missing a temporary folder on server';
    case UPLOAD_ERR_CANT_WRITE: return 'Failed to write file to disk';
    case UPLOAD_ERR_EXTENSION: return 'A PHP extension stopped the file upload';
    default: return 'Unknown upload error';
  }
}

// Check for CV upload and validate
if (!isset($_FILES['cv'])) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Le CV est requis' : 'CV is required')]);
  exit;
}

if ($_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => 'CV upload error: ' . upload_error_message($_FILES['cv']['error'])]);
  exit;
}

if ($_FILES['cv']['size'] > $MAX_FILE_SIZE) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Le CV dépasse 7MB' : 'CV exceeds 7MB')]);
  exit;
}

// Detect MIME type server-side
$finfo = function_exists('finfo_open') ? finfo_open(FILEINFO_MIME_TYPE) : null;
$cv_mime = $finfo ? finfo_file($finfo, $_FILES['cv']['tmp_name']) : ($_FILES['cv']['type'] ?? 'application/octet-stream');
if ($finfo) { finfo_close($finfo); }

if (!in_array($cv_mime, $ALLOWED_MIME_TYPES, true)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Type de fichier CV invalide. Utilisez PDF, DOC ou DOCX.' : 'Invalid CV file type. Use PDF, DOC, or DOCX.')]);
  exit;
}

// Optional other document validation
$other_ok = false;
$other_size = 0;
$other_mime = '';
if (isset($_FILES['autreDocument']) && $_FILES['autreDocument']['error'] !== UPLOAD_ERR_NO_FILE) {
  if ($_FILES['autreDocument']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Other document upload error: ' . upload_error_message($_FILES['autreDocument']['error'])]);
    exit;
  }
  if ($_FILES['autreDocument']['size'] > $MAX_FILE_SIZE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Le document supplémentaire dépasse 7MB' : 'Additional document exceeds 7MB')]);
    exit;
  }
  $finfo2 = function_exists('finfo_open') ? finfo_open(FILEINFO_MIME_TYPE) : null;
  $other_mime = $finfo2 ? finfo_file($finfo2, $_FILES['autreDocument']['tmp_name']) : ($_FILES['autreDocument']['type'] ?? 'application/octet-stream');
  if ($finfo2) { finfo_close($finfo2); }
  if (!in_array($other_mime, $ALLOWED_MIME_TYPES, true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Type de fichier invalide pour le document supplémentaire.' : 'Invalid file type for additional document.')]);
    exit;
  }
  $other_ok = true;
  $other_size = $_FILES['autreDocument']['size'];
}

// Total size check (raw sizes)
$total_size = ($_FILES['cv']['size'] ?? 0) + $other_size;
if ($total_size > $MAX_TOTAL_SIZE) {
  http_response_code(400);
  echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'La taille totale des pièces jointes est trop grande (maximum ~18MB brut).' : 'Total attachments size too large (max ~18MB raw).')]);
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
// Detect MIME again for attachment header (fallback safe)
$finfoA = function_exists('finfo_open') ? finfo_open(FILEINFO_MIME_TYPE) : null;
$cv_mime_header = $finfoA ? finfo_file($finfoA, $_FILES['cv']['tmp_name']) : ($cv_mime ?? 'application/octet-stream');
if ($finfoA) { finfo_close($finfoA); }

$message_body .= "--{$boundary}\r\n";
$message_body .= "Content-Type: {$cv_mime_header}; name=\"{$cv_name}\"\r\n";
$message_body .= "Content-Transfer-Encoding: base64\r\n";
$message_body .= "Content-Disposition: attachment; filename=\"{$cv_name}\"\r\n\r\n";
$message_body .= chunk_split($cv_encoded) . "\r\n";

// Attach other documents if present
if (isset($_FILES['autreDocument']) && $_FILES['autreDocument']['error'] === UPLOAD_ERR_OK) {
  $doc_content = file_get_contents($_FILES['autreDocument']['tmp_name']);
  $doc_encoded = base64_encode($doc_content);
  $doc_name = basename($_FILES['autreDocument']['name']);
  $finfoB = function_exists('finfo_open') ? finfo_open(FILEINFO_MIME_TYPE) : null;
  $doc_mime_header = $finfoB ? finfo_file($finfoB, $_FILES['autreDocument']['tmp_name']) : ($other_mime ?: 'application/octet-stream');
  if ($finfoB) { finfo_close($finfoB); }
  
  $message_body .= "--{$boundary}\r\n";
  $message_body .= "Content-Type: {$doc_mime_header}; name=\"{$doc_name}\"\r\n";
  $message_body .= "Content-Transfer-Encoding: base64\r\n";
  $message_body .= "Content-Disposition: attachment; filename=\"{$doc_name}\"\r\n\r\n";
  $message_body .= chunk_split($doc_encoded) . "\r\n";
}

$message_body .= "--{$boundary}--";

// Send email
$additional_params = '-f' . $from;
$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $message_body, implode("\r\n", $headers), $additional_params);

if ($sent) {
  echo json_encode(['success' => true]);
} else {
  error_log('Mail function failed for job application: ' . $jobTitle . ' | sizes(bytes): CV=' . ($_FILES['cv']['size'] ?? 0) . ', Other=' . ($other_size ?? 0));
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => ($language === 'fr' ? 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.' : 'Failed to send email. Please try again later.')]);
}
