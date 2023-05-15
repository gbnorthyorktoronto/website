import { gbInfo } from "@/app/constants";
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_TOKEN || '')

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json()
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

  return new Response(JSON.stringify({
    ok: 200,
    text: 'Sent successfully'
  }))
}
