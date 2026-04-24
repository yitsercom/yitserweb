import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, service, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Ad ve e-posta zorunludur' }, { status: 400 })
    }

    // Yitser'e gelen bildirim maili
    await resend.emails.send({
      from: 'Yitser Web <noreply@yitser.com>',
      to: 'info@yitser.com',
      subject: `Yeni İletişim Formu — ${name}${company ? ' / ' + company : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px; border-radius: 12px;">
          <div style="background: #080C14; padding: 20px 30px; border-radius: 10px 10px 0 0; margin: -30px -30px 30px;">
            <h1 style="color: #00FF87; margin: 0; font-size: 22px;">Yeni Form Mesajı</h1>
            <p style="color: #A8B4CC; margin: 5px 0 0; font-size: 13px;">yitser.com iletişim formu</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 140px; font-size: 13px;">Ad Soyad</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">E-posta</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #0D72FF;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Telefon</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #0D72FF;">${phone}</a>
              </td>
            </tr>` : ''}
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Şirket</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;">${company}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Hizmet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;">${service}</td>
            </tr>` : ''}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Mesaj</td>
              <td style="padding: 10px 0; color: #222;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #00FF87;">
            <p style="margin: 0; font-size: 13px; color: #2e7d32;">
              Bu mesaj yitser.com iletişim formundan gönderildi.
            </p>
          </div>
        </div>
      `,
    })

    // Kullanıcıya otomatik yanıt maili
    await resend.emails.send({
      from: 'Yitser Teknoloji <noreply@yitser.com>',
      to: email,
      subject: 'Mesajınızı aldık — Yitser Teknoloji',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #080C14; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #00FF87; margin: 0; font-size: 26px;">Yitser Teknoloji</h1>
            <p style="color: #A8B4CC; margin: 8px 0 0; font-size: 14px;">Kurumsal BT Altyapısı ve Danışmanlık</p>
          </div>

          <div style="background: #fff; padding: 35px 30px; border: 1px solid #eee; border-top: none;">
            <h2 style="color: #222; margin: 0 0 15px;">Merhaba ${name},</h2>
            <p style="color: #555; line-height: 1.7; margin: 0 0 15px;">
              Mesajınız bize ulaştı. Teknoloji mimarlarımız en geç <strong>48 saat içinde</strong> sizinle iletişime geçecek.
            </p>
            ${service ? `<p style="color: #555; line-height: 1.7; margin: 0 0 15px;">İlgilendiğiniz hizmet: <strong>${service}</strong></p>` : ''}
            <p style="color: #555; line-height: 1.7; margin: 0 0 25px;">
              Acil konular için bizi arayabilirsiniz:
            </p>

            <div style="text-align: center; margin: 25px 0;">
              <a href="tel:+908503042268"
                style="display: inline-block; background: #00FF87; color: #000; font-weight: bold; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-size: 16px;">
                📞 0850 304 22 68
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0;" />

            <p style="color: #999; font-size: 12px; margin: 0; text-align: center;">
              Yitser Bilgi Teknolojileri ve Danışmanlık — İstanbul, Türkiye<br/>
              <a href="https://yitser.com" style="color: #0D72FF;">yitser.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mail error:', error)
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 })
  }
}
