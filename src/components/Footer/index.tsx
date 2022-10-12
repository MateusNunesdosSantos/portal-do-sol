import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import logoPortaldoSol from '../../../assets/logoPortaldoSol.svg'
import {BsInstagram, BsLinkedin, BsFacebook} from 'react-icons/bs'


export function Footer() {
    return (
        <section className="bg-no-repeat bg-cover bg-center bg-[url('../assets/About.png')]">
            <div className="flex items-center justify-around flex-col md:flex-row gap-10 text-center text-white p-5  md:h-[30vh] bg-black/30">
                <div className="flex gap-5 flex-col md:items-start">
                    <div>
                    <Image src={logoPortaldoSol}/>
                    </div>
                    <div className="flex gap-5">
                        <div className="bg-yellow-700 w-10 h-10 rounded-full flex justify-center items-center">
                            <BsInstagram fill="white"/>
                        </div>
                        <div className="bg-yellow-700 w-10 h-10 rounded-full flex justify-center items-center">
                            <BsLinkedin fill="white"/>
                        </div>
                        <div className="bg-yellow-700 w-10 h-10 rounded-full flex justify-center items-center">
                            <BsFacebook fill="white"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start ">
                    <Typography variant="h3">Contato</Typography>
                    <hr className="w-40 h-1  bg-amber-500 rounded border-0"></hr>

                    <Typography>
                    Estrada do Mar, Km 37 – Capão da Canoa (acesso pela Av. Central, ao lado do Condado).
                    </Typography>
                    <Typography>
                        (042)99886-79697
                    </Typography>
                    <Typography>
                        contato@gmail.com
                    </Typography>
                </div>
            </div>
            <div className="flex items-center justify-center text-center p-14 bg-black text-white h-[5rem]">
                <Typography className="text-sm md:text-md">
                    COPYRIGHT© CONDOMÍNIO NAUTICO PORTAL DO SOL. 2022. TODOS DIREITOS RESERVADOS
                </Typography>
            </div>
        </section>
    )
}