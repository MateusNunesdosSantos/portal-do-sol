import Typography from '@material-tailwind/react/components/Typography'
import { FormEvent, useState } from 'react'
import { sendScheduleMail } from '../../services/sendMail'
import { InputBase } from '../Input'
import toast from 'react-hot-toast'
import InputMask from 'react-input-mask'

export function FormSchedule() {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [quantity, setQuantity] = useState('')
  const [phone, setPhone] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (loading) return

    if (!name.trim() || !day.trim() || !quantity.trim() || !phone.trim()) {
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
      await sendScheduleMail(name, day, quantity, phone)

      setName('')
      setDay('')
      setQuantity('')
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
      data-aos="fade-up"
      onSubmit={handleSubmit}
      className="bg-white/60 rounded-lg flex items-center flex-col gap-4 p-5 md:p10 mb-[10rem] md:mb-[2rem] justify-center "
    >
      <Typography variant="h3" className="text-[#303841] font-semibold">
        AGENDE SUA VISITA
      </Typography>
      <hr className="w-48 h-1 mx-auto border-0 rounded bg-amber-500"></hr>
      <InputBase
        placeholder="Nome"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <InputBase
        placeholder="Dia da Visita"
        type="date"
        value={day}
        onChange={({ target }) => setDay(target.value)}
      />
      <InputBase
        placeholder="Quantidade de Pessoas"
        type="text"
        value={quantity}
        onChange={({ target }) => setQuantity(target.value)}
      />
      <InputMask
        className="px-3 w-[19.163rem] h-[3.563rem] border-solid border-1 placeholder:text-gray-600 outline-amber-600 rounded-md 
                   text-gray-900  border-gray-100 bg-gray-100/50"
        mask="(99) 99999-9999"
        placeholder="(42)99999-9999"
        type="tel"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
      />

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
