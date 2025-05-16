import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();
  const { name, email, message } = formData;

  // Example using a generic SMTP server:
  //   const transporter = nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: parseInt(process.env.SMTP_PORT || '587', 10),
  //     secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   });
  // GMAIL service config
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_PASS, // app password (not your Gmail password)
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Can be the user's email or a fixed sender email
    to: 'eturivishnu@gmail.com', // *** IMPORTANT: Replace with your recipient email address ***
    subject: `New message from ${name} via your website`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
