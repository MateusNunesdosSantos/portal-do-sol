// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Data } from '@react-google-maps/api'
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import * as sendgridTransport from 'nodemailer-sendgrid-transport' 

const email = process.env.MAILADRESS

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
)

export default async ( req: NextApiRequest,  res: NextApiResponse) => {
  try {
    const { name, day, quantity} = req.body

    if(!name.trim() || !day.trim() || !quantity.trim()) {
      return res.status(403).send('')
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova Mensagem de contato - ${name}`,
      html: ` <p>
                <b>Dia Agendado: </b> 
                ${day}
              </p>
              <br /> 
              <p>
                <b>Quantidade de Pessos: </b>
                ${quantity}
              </p>
             `,
    }

    transporter.sendMail(message, (err, info) => {
      if(err) {
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
