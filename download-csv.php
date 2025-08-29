<?php
// Simple authentication - change this password
$correct_password = 'growthenergy2024';

// Check if password is provided
if (!isset($_GET['password']) || $_GET['password'] !== $correct_password) {
    http_response_code(401);
    die('Access denied. Please provide the correct password as a URL parameter: ?password=yourpassword');
}

$csv_file = 'contacts.csv';

// Check if file exists
if (!file_exists($csv_file)) {
    http_response_code(404);
    die('CSV file not found. No contacts have been submitted yet.');
}

// Set headers for CSV download
header('Content-Type: text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename="growth-energy-contacts-' . date('Y-m-d') . '.csv"');
header('Content-Length: ' . filesize($csv_file));

// Output the file
readfile($csv_file);
exit();
?>