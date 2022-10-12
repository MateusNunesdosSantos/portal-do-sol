import imgBgHome from '../../assets/bg-home.png'
import Image from 'next/image'
import { Button, Typography } from '@material-tailwind/react'
import { InputBase } from './Input'
import { FormSchedule } from './FormSchedule'

export function Header() {
    return (
          <div id='pageHome' className="bg-no-repeat bg-cover bg-center md:h-[98vh] bg-[url('../assets/bg-home.png')]" >
          <div className='flex items-center pt-[10rem] gap-[5rem] md:gap-[10rem] flex-col-reverse md:flex-row justify-center'>
            <FormSchedule/>
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