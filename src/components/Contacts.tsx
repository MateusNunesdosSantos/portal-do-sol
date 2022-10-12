import { Typography } from "@material-tailwind/react";
import { FormContact } from "./FormContact";
import {Map} from './Map'

export function Contact() {
    return (
        <section id="pageContact" className="flex justify-center flex-col-reverse md:flex-row items-center gap-52 md:h-[98vh]">
            <div className="text-center">
                <Typography>Gostaria de reber a tabela de valores?</Typography>
                <div className="bg-gray-600  md:w-[24.125rem]">
                    <FormContact/>
                </div>


            </div>
            <div className="text-center">
                <Typography>Visualizar o trajeto no Google Maps</Typography>
                <div className="bg-gray-600 md:w-[24.125rem]">
                    <Map/>
                </div>
            </div>
        </section>
    )
}