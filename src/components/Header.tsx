import imgBgHome from '../../assets/bg-home.png'
import Image from 'next/image'
import { Button, Typography } from '@material-tailwind/react'
import { InputBase } from './Input'

export function Header() {
    return (
          <div className=" bg-no-repeat bg-cover bg-center md:h-[51.25rem] bg-[url('../assets/bg-home.png')]" >
          <div className='flex items-center pt-[10rem] gap-[5rem] md:gap-[10rem] flex-col-reverse md:flex-row justify-center'>
            <div className='bg-white/40 rounded-lg flex items-center flex-col gap-8 p-10 mb-[10rem] md:mb-[0rem] justify-center '>
                <Typography variant="h3" className="text-[#303841]">AGENDE SUA VISITA</Typography>
                <hr className="mx-auto mt-[-2rem] w-48 h-1 bg-amber-500 rounded border-0"></hr>
                <InputBase placeholder='Nome' type='text'/>
                <InputBase placeholder='Dia da Visita' type='date'/>
                <InputBase placeholder='Pessoas Quantidade' type='number'/>
                <Button className='bg-amber-500 w-full rounded-md text-lg text-gray-900 font-semibold h-[3.563rem]'>Enviar</Button>     
            </div>
            <div className='text-white text-center space-y-3' >
                <Typography variant="lead">BEM-VINDO(A) AO  </Typography>
                <Typography variant="h3">Condomínio Protal do Sol</Typography>
                <Typography variant="h3" className="sm:text-2xl md:text-4xl">CONDOMÍNIO PARTICULAR </Typography >
                <hr className="mx-auto w-48 h-1 bg-amber-500 rounded border-0"></hr>
            </div>
          </div>
        </div>
    )
}