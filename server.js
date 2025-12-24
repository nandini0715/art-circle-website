const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // Directly defined

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration (Directly Defined)
const transporter = nodemailer.createTransport({
  service: "gmail", // Change this if using another email provider
  auth: {
    user: "artcirclewebsite@gmail.com", // Replace with your Gmail
    pass: "fhbs lusv fwoh ynph", // Replace with your App Password
  },
});

// API Routes for Different Forms
// Contact Form
app.post("/contact", async (req, res) => {
  const { name, email, phone, query_type, message } = req.body;

  const mailOptions = {
    from: email,
    to: "artcirclewebsite@gmail.com", // Replace with the developer's email
    subject: `New Contact Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery type: ${query_type}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Membership Form
app.post("/membership", async (req, res) => {
  const { name, email, phone, query_type } = req.body;

  const mailOptions = {
    from: email,
    to: "artcirclewebsite@gmail.com", // Developer's email
    subject: `New Membership Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery Type: ${query_type}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Membership email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send membership email." });
  }
});

// Sponsorship Form
app.post("/sponsorship", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "artcirclewebsite@gmail.com", // Developer's email
    subject: `New Sponsorship Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Sponsorship email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send sponsorship email." });
  }
});

// Subscribe Form
app.post("/subscribe", async (req, res) => {
  const { name, email, phone } = req.body;

  const mailOptions = {
    from: email,
    to: "artcirclewebsite@gmail.com", // Developer's email
    subject: `New Subscription Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Subscription email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send subscription email." });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));