import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { LineBase } from "./Line";
import ImageAbout from '../../assets/About.png'
import {Link} from 'react-scroll/modules'

export function AboutSection() {
    return(
        <>
        <section id="pageSobre"></section>
        <section  className="mt-56 flex justify-center" >
        <aside className="overflow-hidden rounded-lg bg-yellow-50 p-5 sm:grid sm:grid-cols-2">
            <Image
            alt="Student"
            src={ImageAbout}
            className="h-56  object-contain sm:h-full"
            />
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Viva o inexplicável.
                </h2>
        
                <p className="hidden text-gray-500 md:mt-4 md:block text-justify">
                Imagine viver em um paraíso cercado por natureza, em um refúgio que alia tranquilidade e muito lazer. Esse é o Condomínio Náutico Portal do Sol , um condomínio residencial que oferece lotes a partir de 600 m² com infraestrutura completa, segurança 24 horas e uma vista espetacular para o lago da barragem da represa de Máua onde você pode desfrutar de esportes náuticos, pesca esportiva ou simplesmente contemplar a paisagem. Tudo isto sem perder os benefícios tecnológicos da cidade. Trabalhe em "Home Office" com internet fibra ótica. Aproveite a vida agora!
                </p>
        
                <div className="mt-4 md:mt-8">
                <Link
                to="pageHome"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                id="pLinkgeHome"
                    className="inline-block cursor-pointer rounded bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-amber-500 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                    Faca seu agendamento
                </Link>
                </div>
            </div>
            </div>
        
            
             </aside>
        </section>
      
        </>
    )
}