import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const { name, company, email, message } = req.body;

    const data = await resend.emails.send({
      from: "Demo Request <onboarding@resend.dev>",
      to: ["your@email.com"],
      subject: "New Demo Request",
      html: `
        <h2>New Demo Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error });
  }
}