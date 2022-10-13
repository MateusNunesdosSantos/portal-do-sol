import { Typography } from "@material-tailwind/react";
import { FormContact } from "./FormContact";
import {Map} from './Map'

export function Contact() {
    return (
        <section id="pageContact" className="flex justify-center mt-20 p-10 flex-col-reverse md:flex-row items-center gap-16 md:gap-[15rem] md:h-full">
            <div className="text-center flex flex-col justify-center items-center gap-5">
                <Typography variant="h5" className="w-[20rem]">Gostaria de reber a tabela de valores?</Typography>
                <div className="md:w-[24.125rem]">
                    <FormContact/>
                </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center  gap-5">
                <Typography variant="h5" className="w-[20rem]" >Visualizar o trajeto no Google Maps</Typography>
                <div className="md:w-[24.125rem]">
                <iframe className="w-[25rem] h-[25rem] md:h-[35rem] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.1954239202646!2d-50.777659044398916!3d-24.12950242613813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd1b454a23b84c3!2sCondom%C3%ADnio%20Portal%20do%20Sol!5e1!3m2!1spt-BR!2sbr!4v1665613773887!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}