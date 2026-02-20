import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { firstName, lastName, email, phone, postcode, service, message, formSource } = body

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // port 465 = SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const subject = `New Enquiry from ${firstName} ${lastName} — ${formSource ?? "Website"}`

        const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f7f7f5; margin: 0; padding: 20px; }
    .card { background: white; border-radius: 16px; padding: 32px; max-width: 560px; margin: 0 auto; border: 1px solid #ede9e3; }
    .badge { display: inline-block; background: #1a1a1a; color: white; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 999px; margin-bottom: 20px; }
    h2 { margin: 0 0 24px; font-size: 22px; color: #1a1a1a; }
    .row { display: flex; gap: 8px; margin-bottom: 12px; }
    .label { font-size: 11px; font-weight: 600; color: #9a9a9a; text-transform: uppercase; letter-spacing: 0.05em; min-width: 90px; padding-top: 2px; }
    .value { font-size: 14px; color: #1a1a1a; }
    .divider { border: none; border-top: 1px solid #ede9e3; margin: 20px 0; }
    .message-box { background: #fafaf8; border-radius: 10px; padding: 16px; font-size: 14px; color: #444; line-height: 1.6; }
    .footer { margin-top: 24px; font-size: 12px; color: #9a9a9a; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">New Enquiry</div>
    <h2>You've received a new enquiry! 🎉</h2>

    <div class="row"><span class="label">Name</span><span class="value">${firstName} ${lastName}</span></div>
    <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${email}" style="color:#1a1a1a;">${email}</a></span></div>
    ${phone ? `<div class="row"><span class="label">Phone</span><span class="value">${phone}</span></div>` : ""}
    ${postcode ? `<div class="row"><span class="label">Postcode</span><span class="value">${postcode}</span></div>` : ""}
    ${service ? `<div class="row"><span class="label">Service</span><span class="value">${service}</span></div>` : ""}

    ${message ? `
    <hr class="divider" />
    <div class="label" style="margin-bottom:8px;">Message</div>
    <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
    ` : ""}

    <div class="footer">Sent from the St Anne's Housekeeping website — ${formSource ?? "Contact Form"}</div>
  </div>
</body>
</html>
`

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.BUSINESS_EMAIL,
            replyTo: email,
            subject,
            html,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error("Email send error:", err)
        return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 })
    }
}
