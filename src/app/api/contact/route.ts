import { gbInfo } from "@/app/constants";
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_TOKEN || '')

export async function POST(req: Request, res: Response) {
  const data = await req.json()

  try {
    await sendgrid.send({
      to: gbInfo.email || '',
      from: gbInfo.email || '',
      subject: data?.subject,
      html: `
      <body>
        Additional Information:<br />
        ${data?.message}
        <br />
        <br />
        Program: ${data?.program}
        <br />
        Name: ${data?.fullname}
        <br />
        Phone: ${data?.phone}
        <br />
        Email: ${data?.email}
      </body>
      `,
    })
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(JSON.stringify({
        error: 400,
        text: error.message,
      }));
    }

    return new Response(JSON.stringify({
      error: 400,
      text: 'Error'
    }));
  }

  await sendgrid.send({
    to: data?.email || '',
    from: gbInfo.email || '',
    templateId: process.env.NEXT_PUBLIC_SENDGRID_EMAIL_TEMPLATE_ID || '',
  })

  return new Response(JSON.stringify({
    ok: 200,
    text: 'Sent successfully'
  }))
}
