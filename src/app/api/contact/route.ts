import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_dPuWpjc2_5J1aBvfz2r9juw44j735UFm3');

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['ankurdas1986@gmail.com'],
            subject: `Portfolio Inquiry: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <style>
            body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f3f4f6; -webkit-font-smoothing: antialiased; }
            .wrapper { width: 100%; background-color: #f3f4f6; padding: 40px 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 40px 30px; text-align: center; }
            .header-title { color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: 0.5px; }
            .header-subtitle { color: rgba(255,255,255,0.9); font-size: 14px; margin-top: 8px; }
            .content { padding: 40px 30px; }
            .field-group { margin-bottom: 24px; border-bottom: 1px solid #f0f0f0; padding-bottom: 16px; }
            .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { color: #8b5cf6; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: block; }
            .value { color: #1f2937; font-size: 16px; line-height: 1.6; font-weight: 500; }
            .message-box { background-color: #f9fafb; border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 4px; color: #374151; font-style: italic; }
            .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer-text { color: #9ca3af; font-size: 12px; }
            .button { display: inline-block; padding: 12px 24px; background-color: #8b5cf6; color: white !important; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h1 class="header-title">New Project Inquiry</h1>
                <div class="header-subtitle">Sent from your portfolio website</div>
              </div>
              <div class="content">
                <div class="field-group">
                  <span class="label">Sender Name</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field-group">
                  <span class="label">Email Address</span>
                  <div class="value"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field-group">
                  <span class="label">Subject</span>
                  <div class="value">${subject}</div>
                </div>
                <div class="field-group">
                  <span class="label">Message</span>
                  <div class="value message-box">
                    ${message ? message.replace(/\n/g, '<br>') : 'No message provided.'}
                  </div>
                </div>
                <div style="text-align: center;">
                  <a href="mailto:${email}" class="button">Reply via Email</a>
                </div>
              </div>
              <div class="footer">
                <div class="footer-text">© ${new Date().getFullYear()} My Portfolio. All rights reserved.</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
