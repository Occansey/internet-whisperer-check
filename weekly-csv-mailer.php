<?php
/**
 * Weekly CSV Mailer for Growth Energy Contact Submissions
 * 
 * This script should be run via cron job every Monday at 9:00 AM:
 * 0 9 * * 1 /usr/bin/php /path/to/weekly-csv-mailer.php
 */

// Configuration
$csv_file = 'contacts.csv';
$recipients = [
    'contact@growth-energy.fr',
    // Add additional recipients as needed
];
$from_email = 'noreply@growth-energy.com';
$download_url = 'https://yourdomain.com/download-csv.php'; // Update with actual URL

// Check if CSV file exists
if (!file_exists($csv_file)) {
    error_log("Weekly CSV Mailer: CSV file not found");
    exit("CSV file not found\n");
}

// Get file stats
$file_size = filesize($csv_file);
$last_modified = filemtime($csv_file);

// Read CSV and analyze data
$contacts = [];
$handle = fopen($csv_file, 'r');
if ($handle) {
    $header = fgetcsv($handle); // Skip header
    $week_ago = strtotime('-7 days');
    $new_contacts_this_week = 0;
    
    while (($row = fgetcsv($handle)) !== false) {
        $contact_date = strtotime($row[0]); // Date is first column
        $contacts[] = array_combine($header, $row);
        
        if ($contact_date >= $week_ago) {
            $new_contacts_this_week++;
        }
    }
    fclose($handle);
}

$total_contacts = count($contacts);

// Generate statistics
$contact_types = [];
foreach ($contacts as $contact) {
    $type = $contact['Type'] ?? 'Unknown';
    $contact_types[$type] = ($contact_types[$type] ?? 0) + 1;
}

// Create email content
$subject = 'Weekly Contact Report - Growth Energy (' . date('Y-m-d') . ')';

$message = "
Bonjour,

Voici votre rapport hebdomadaire des contacts Growth Energy pour la semaine du " . date('d/m/Y', strtotime('-7 days')) . " au " . date('d/m/Y') . ".

📊 STATISTIQUES DE LA SEMAINE :
• Nouveaux contacts cette semaine : {$new_contacts_this_week}
• Total des contacts : {$total_contacts}
• Dernière mise à jour : " . date('d/m/Y H:i', $last_modified) . "

📋 RÉPARTITION PAR TYPE :";

foreach ($contact_types as $type => $count) {
    $message .= "\n• " . ucfirst($type) . " : {$count}";
}

$message .= "

💾 ACCÈS AUX DONNÉES :
Le fichier CSV complet contenant tous les contacts est disponible en téléchargement 
sécurisé à tout moment via notre portail d'accès :

🔗 {$download_url}

Le portail requiert une authentification sécurisée pour protéger les données de nos contacts.
Vous pouvez télécharger le fichier CSV à jour à tout moment depuis cette interface.

📈 CONSEILS :
• Consultez régulièrement les nouveaux contacts pour un suivi optimal
• N'hésitez pas à télécharger le fichier CSV pour vos analyses détaillées
• Contactez notre équipe technique si vous rencontrez des difficultés d'accès

---
Rapport généré automatiquement par le système Growth Energy
" . date('Y-m-d H:i:s') . "

Growth Energy - Clean Energy Solutions
Email: contact@growth-energy.fr
";

// Email headers
$headers = [
    'From: ' . $from_email,
    'Reply-To: contact@growth-energy.fr',
    'X-Mailer: PHP/' . phpversion(),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Priority: 3', // Normal priority
    'X-Auto-Generated: true'
];

// Send email to all recipients
$success_count = 0;
$failed_recipients = [];

foreach ($recipients as $recipient) {
    $success = mail($recipient, $subject, $message, implode("\r\n", $headers));
    
    if ($success) {
        $success_count++;
        error_log("Weekly CSV Mailer: Successfully sent to {$recipient}");
    } else {
        $failed_recipients[] = $recipient;
        error_log("Weekly CSV Mailer: Failed to send to {$recipient}");
    }
}

// Log results
$log_message = "Weekly CSV Mailer executed: {$success_count} successful, " . count($failed_recipients) . " failed";
if (!empty($failed_recipients)) {
    $log_message .= " (Failed: " . implode(', ', $failed_recipients) . ")";
}
error_log($log_message);

// Output results (for cron job logs)
echo $log_message . "\n";
echo "New contacts this week: {$new_contacts_this_week}\n";
echo "Total contacts: {$total_contacts}\n";

exit(0);
?>