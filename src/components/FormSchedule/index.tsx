import { Button } from "@material-tailwind/react";
import Typography from "@material-tailwind/react/components/Typography";
import { FormEvent, useState } from "react";
import { sendScheduleMail } from "../../services/sendMail";
import { InputBase } from "../Input";
import toast from 'react-hot-toast'

export function FormSchedule() {
    const [name, setName] =  useState('');
    const [day, setDay] =  useState('');
    const [quantity, setQuantity] =  useState('');

    const [loading, setLoading] = useState(false)

   async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(loading) return

        if(!name.trim() || !day.trim() || !quantity.trim()) {
            toast('Preencha todos os campos para enviar seu agendamento!', {
                style: {
                    background: '#990000',
                    color: '#FFF'
                }
            })
            return
        }
        try {
            setLoading(true)
            await sendScheduleMail(name, day, quantity)
            
            setName('')
            setDay('')
            setQuantity('')

            toast('Mensagem envada com sucesso!!', {
                style: {
                    background: '#00802B',
                    color: '#FFF'
                }
            })
            
        } catch (error) {
            toast('Ocorreu um erro ao enviar seu agendamento, Tente Novamente!', {
                style: {
                    background: '#990000',
                    color: '#FFF'
                }
            })
        } finally{
         setLoading(false)

        }
    }
    return (
        <form 
            onSubmit={handleSubmit}
            className='bg-white/40 rounded-lg flex items-center flex-col gap-8 p-10 mb-[10rem] md:mb-[0rem] justify-center '>
                <Typography variant="h3" className="text-[#303841] font-semibold">AGENDE SUA VISITA</Typography>
                <hr className="mx-auto mt-[-2rem] w-48 h-1 bg-amber-500 rounded border-0"></hr>
                <InputBase 
                    placeholder='Nome' 
                    type='text'
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />
                <InputBase 
                    placeholder='Dia da Visita' 
                    type='date'
                    value={day}
                    onChange={({target}) => setDay(target.value)}
                />
                <InputBase 
                    placeholder='Quantidade de Pessoas' 
                    type='text'
                    value={quantity}
                    onChange={({target}) => setQuantity(target.value)}
                />
                <button 
                    disabled={loading}
                    type="submit"
                    className='bg-amber-500 w-full rounded-md text-lg text-gray-900 hover:bg-amber-600 drop-shadow-none font-semibold h-[3.563rem]'>
                    ENVIAR
                </button>     
            </form>
    )
}