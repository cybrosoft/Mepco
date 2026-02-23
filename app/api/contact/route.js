import nodemailer from "nodemailer";

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(String(email || "").trim());
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();

    // Basic validation (server-side)
    if (!name) {
      return Response.json({ message: "Name is required." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return Response.json({ message: "Valid email is required." }, { status: 400 });
    }
    if (!subject) {
      return Response.json({ message: "Subject is required." }, { status: 400 });
    }
    if (!message) {
      return Response.json({ message: "Message is required." }, { status: 400 });
    }

    // Gmail SMTP transporter
    // IMPORTANT: Use an App Password (recommended) instead of your normal Gmail password.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // e.g. "youraccount@gmail.com"
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char app password
      },
    });

    const toAddress = process.env.CONTACT_TO || "info@mep.co";

    // Email content
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone || "-")}</p>
        <p><b>Subject:</b> ${escapeHtml(subject)}</p>
        <p><b>Message:</b></p>
        <div style="white-space: pre-wrap; border: 1px solid #eee; padding: 12px; border-radius: 8px;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    // Send mail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toAddress,
      replyTo: email, // so you can reply directly to the user
      subject: `[MEPCO Contact] ${subject}`,
      html,
      text: `New Contact Form Submission\n
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Subject: ${subject}

Message:
${message}
`,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { message: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}

// Minimal HTML escaping to prevent injection in email template
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
