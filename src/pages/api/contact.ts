// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import * as sendgridTransport from 'nodemailer-sendgrid-transport'
import { NEXT_MAILADRESS, NEXT_SENDGRID_API_KEY } from './utils'

const emailPrincipal = NEXT_MAILADRESS

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: NEXT_SENDGRID_API_KEY,
    },
  }),
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message, phone } = req.body

    if (!name.trim() || !email.trim() || !message.trim() || !phone.trim()) {
      return res.status(403).send('')
    }

    const messagem = {
      from: emailPrincipal,
      to: emailPrincipal,
      subject: `Nova Mensagem de contato - ${name}`,
      html: ` <p>
                <b>Email: </b> 
                ${email}
              </p>
              <br /> 
              <p>
                <b>Telefone: </b>
                ${phone}
                <br /> 
                <b>Mensagem: </b>
                ${message}
              </p>
             `,
      replayTo: email,
    }

    transporter.sendMail(messagem, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Message sent', info)
      }
    })

    res.send('')
  } catch (erro) {
    return res.json({
      error: true,
    })
  }
}
