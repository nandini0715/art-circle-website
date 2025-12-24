require 'vendor/autoload.php';  // Composer's autoloader

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$query_type = $data['query_type'] ?? '';
$message = $data['message'] ?? '';
$route = $_GET['form'] ?? '';

$subject = "New Request from $name";
$body = "Name: $name\nEmail: $email\nPhone: $phone\n";

switch ($route) {
    case 'contact':
        $subject = "New Contact Request from $name";
        $body .= "Query Type: $query_type\nMessage: $message";
        break;
    case 'membership':
        $subject = "New Membership Request from $name";
        $body .= "Membership Type: $query_type";
        break;
    case 'sponsorship':
        $subject = "New Sponsorship Request from $name";
        $body .= "Message: $message";
        break;
    case 'subscribe':
        $subject = "New Subscription Request from $name";
        break;
    default:
        echo json_encode(["success" => false, "message" => "Invalid form type."]);
        exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'artcirclewebsite@gmail.com';
    $mail->Password   = 'fhbs lusv fwoh ynph';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom($email, $name);
    $mail->addAddress('artcirclewebsite@gmail.com');
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
