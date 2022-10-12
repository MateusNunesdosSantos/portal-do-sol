import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { LineBase } from "./Line";
import ImageAbout from '../../assets/About.png'


export function AboutSection() {
    return(
        <section id="pageSobre" className="flex justify-center items-center flex-col mt-[5rem] md:h-[98vh] ">
           <div className="space-y-3">
            <Typography  variant="h5">Um paraíso que vai de encontro ao seu estilo de vida</Typography>
                <LineBase/>
           </div>
           <div className="flex mt-[5rem] gap-[5rem] flex-col md:flex-row px-5">
                <div>
                    <Image src={ImageAbout}/>
                </div>
                <div className=" drop-shadow-md flex flex-wrap md:w-[25rem] gap-5 border-[1px] p-[2rem] rounded-lg border-gray-300 border-solid bg-gray-100">
                        <div className="space-y-2"> 
                            <Typography variant="h5">
                                Para quem é amante da pesca
                            </Typography>
                            <hr className="w-32 h-1 bg-amber-500 rounded border-0"/>
                            <Typography className="mt-[1rem]" variant="text">Para quem deseja aproveitar por completo o que a exuberante represa de Mauá tem para oferecer,
                                                    Para quem deseja aproveitar por completo o que a exuberante represa de Mauá tem para oferecer.
                            </Typography>
                        </div>

                        <div className="space-y-2">
                            <Typography variant="h5">
                                Momentos em família
                            </Typography>
                            <hr className="w-32 h-1 bg-amber-500 rounded border-0"/>
                            <Typography className="mt-[1rem]" variant="text">Para quem deseja ter momentos em família, apreciar a natureza, curtir e registrar momentos inesquecíveis,
                                Para quem deseja ter momentos em família, apreciar a natureza, curtir e registrar momentos inesquecíveis...
                            </Typography>
                        </div>
                   
                </div>
           </div>

        </section>

    )
}