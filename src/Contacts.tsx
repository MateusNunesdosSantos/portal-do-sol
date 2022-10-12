import { Typography } from "@material-tailwind/react";
import {Map} from './components/Map'

export function Contact() {
    return (
        <section id="pageContact" className="flex justify-center items-center gap-52 md:h-[98vh]">
            <div className="text-center">
                <Typography>Gostaria de reber a tabela de valores?</Typography>
                <div className="bg-gray-600  md:w-[24.125rem]"> adad</div>


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