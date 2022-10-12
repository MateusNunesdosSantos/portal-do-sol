import LogoParcerias01 from '../../assets/logoEspacoSmart.svg'
import LogoParcerias02 from '../../assets/logoComercial.svg'
import LogoParcerias03 from '../../assets/logoLojasMM.svg'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'

const parcerias = {
    title: 'Espaço Smart'
}




export function Partnerships() {
    return(
        <section className='bg-[#F6C90E] h-[30v]'>
            <div className='flex flex-col items-center justify-center p-5 gap-[5rem]  w-[100%] bg-black/10 '>
                <div>
                    <Typography variant="h3" className="text-white/90">PARCERIAS</Typography>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-5 md:gap-[10rem]'>
                    <Image src={LogoParcerias01}/>
                    <Image src={LogoParcerias02}/>
                    <Image src={LogoParcerias03}/>
                </div>
            </div>
        </section>
    )
} 