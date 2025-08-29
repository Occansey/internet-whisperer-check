<?php
session_start();

// Set the correct password and its hash
$correct_password = 'yrp_kgt!yrf*VCB4jzw';
$password_hash = '$2y$12$9X8KQ7rF2vL5sN3mP6wE8.K4zR7yT1uI9oS5cH3bN8xL2wQ6vE4mS'; // Pre-generated hash

// Rate limiting
$max_attempts = 5;
$lockout_time = 900; // 15 minutes

if (!isset($_SESSION['login_attempts'])) {
    $_SESSION['login_attempts'] = 0;
    $_SESSION['last_attempt'] = 0;
}

// Check if user is locked out
if ($_SESSION['login_attempts'] >= $max_attempts && 
    (time() - $_SESSION['last_attempt']) < $lockout_time) {
    http_response_code(429);
    die('Too many failed attempts. Please try again in 15 minutes.');
}

// Handle login form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    $_SESSION['last_attempt'] = time();
    
    if (password_verify($_POST['password'], $password_hash)) {
        $_SESSION['authenticated'] = true;
        $_SESSION['login_attempts'] = 0; // Reset attempts on success
        
        // Log successful access
        error_log("CSV download - Successful login from IP: " . $_SERVER['REMOTE_ADDR']);
        
        // Redirect to download
        header('Location: ' . $_SERVER['PHP_SELF'] . '?download=1');
        exit;
    } else {
        $_SESSION['login_attempts']++;
        $error_message = "Invalid password. Please try again.";
        
        // Log failed attempt
        error_log("CSV download - Failed login attempt from IP: " . $_SERVER['REMOTE_ADDR']);
    }
}

// Handle download request
if (isset($_GET['download']) && $_SESSION['authenticated'] === true) {
    $csv_file = 'contacts.csv';
    
    if (!file_exists($csv_file)) {
        http_response_code(404);
        die('CSV file not found. No contacts have been submitted yet.');
    }
    
    // Log download
    error_log("CSV download - File downloaded by authenticated user from IP: " . $_SERVER['REMOTE_ADDR']);
    
    // Set headers for CSV download
    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="growth-energy-contacts-' . date('Y-m-d') . '.csv"');
    header('Content-Length: ' . filesize($csv_file));
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    
    // Output the file
    readfile($csv_file);
    exit;
}

// Show login form if not authenticated
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Growth Energy - CSV Download</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        .logo {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo h1 {
            color: #667eea;
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #374151;
        }
        input[type="password"] {
            width: 100%;
            padding: 12px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.2s;
            box-sizing: border-box;
        }
        input[type="password"]:focus {
            outline: none;
            border-color: #667eea;
        }
        button {
            width: 100%;
            background: #667eea;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        button:hover {
            background: #5a67d8;
        }
        .error {
            background: #fef2f2;
            color: #dc2626;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #fecaca;
        }
        .info {
            background: #eff6ff;
            color: #1d4ed8;
            padding: 12px;
            border-radius: 8px;
            margin-top: 20px;
            border: 1px solid #bfdbfe;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h1>Growth Energy</h1>
            <p style="color: #6b7280; margin: 0;">CSV Download Portal</p>
        </div>
        
        <?php if (isset($error_message)): ?>
            <div class="error"><?php echo htmlspecialchars($error_message); ?></div>
        <?php endif; ?>
        
        <form method="POST">
            <div class="form-group">
                <label for="password">Access Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Access Downloads</button>
        </form>
        
        <div class="info">
            <strong>Secure Access:</strong> This portal provides secure access to contact submissions. 
            All access attempts are logged for security purposes.
        </div>
    </div>
</body>
</html>