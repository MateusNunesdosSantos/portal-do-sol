import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { LineBase } from "./Line";
import Image01 from '../../assets/img-01.png'
import Image02 from '../../assets/img-02.png'



export function GalerySection() {
    return(
        <section className="flex justify-center items-center flex-col mt-[5rem] drop-shadow-md border-2 px-5 pb-[5rem] bg-yellow-50">
           <div className="space-y-3 mt-8">
            <Typography  variant="h5">Desbrave a natureza e cultive momentos de tranquilidade</Typography>
                <LineBase/>
           </div>
           <div className="flex mt-[5rem] gap-[5rem] flex-col md:flex-row px-5">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image src={Image01}/>
                    <Image src={Image02}/>
                </div>
               </div>

        </section>

    )
}