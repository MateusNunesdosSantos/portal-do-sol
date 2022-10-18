import Typography from '@material-tailwind/react/components/Typography'
import { FormEvent, useState } from 'react'
import { sendContactMail } from '../../services/sendMailContact'
import toast from 'react-hot-toast'
import InputMask from 'react-input-mask'

export function FormContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (loading) return

    if (!name.trim() || !email.trim() || !message.trim() || !phone.trim()) {
      toast('Preencha todos os campos para enviar seu agendamento!', {
        style: {
          background: '#990000',
          color: '#FFF',
        },
      })
      return
    }
    try {
      setLoading(true)
      await sendContactMail(name, email, message, phone)

      setName('')
      setEmail('')
      setMessage('')
      setPhone('')

      toast('Mensagem envada com sucesso!!', {
        style: {
          background: '#00802B',
          color: '#FFF',
        },
      })
    } catch (error) {
      toast('Ocorreu um erro ao enviar seu agendamento, Tente Novamente!', {
        style: {
          background: '#990000',
          color: '#FFF',
        },
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#303841]/60 rounded-lg flex items-center flex-col gap-4 p-10 mb-[10rem] md:mb-[0rem] justify-center md:w-full w-[22rem]"
    >
      <Typography variant="h4" className="text-brown-50  font-semibold">
        AGENDE SUA VISITA
      </Typography>
      <hr className="mx-auto w-48 h-1 bg-amber-500 rounded border-0"></hr>
      <input
        className="px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md "
        placeholder="Nome"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        className="px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md "
        placeholder="Email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <InputMask
        className="px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md 
                   text-gray-900  border-gray-100 bg-white"
        mask="(99) 99999-9999"
        placeholder="(42)99999-9999"
        type="tel"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
      />

      <textarea
        className="p-3 w-[19.163rem] h-[5.563rem] resize-none border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md "
        placeholder="Menssagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      ></textarea>
      <button
        disabled={loading}
        type="submit"
        className="bg-amber-500 w-full rounded-md text-lg text-gray-900 hover:bg-amber-600 drop-shadow-none font-semibold h-[3.563rem]"
      >
        ENVIAR
      </button>
    </form>
  )
}
