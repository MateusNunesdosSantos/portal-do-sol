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
        <section className="bg-amber-700">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Parcerias</h2>
            <div className="flex gap-24 lg:gap-0 flex-wrap justify-center lg:justify-between">
               <Image
                src={LogoParcerias01}
               />
               <Image
                src={LogoParcerias02}
               /><Image
               src={LogoParcerias03}
              />
            </div>
        </div>
</section>
    )
} 