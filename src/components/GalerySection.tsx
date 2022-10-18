import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { LineBase } from "./Line";
import Image01 from '../../assets/img-01.png'
import Image02 from '../../assets/img-02.png'
import Image03 from '../../assets/img-03.jpeg'
import Image04 from '../../assets/img-04.jpeg'
import Image05 from '../../assets/img-05.jpeg'
import Image06 from '../../assets/img-06.jpeg'
import Image07 from '../../assets/img-07.jpeg'
import Image08 from '../../assets/img-08.jpeg'
import Image09 from '../../assets/img-09.jpeg'
import Image10 from '../../assets/img-10.jpeg'
import Image11 from '../../assets/img-11.jpeg'
import Image12 from '../../assets/img-12.jpeg'
import { Link } from "react-scroll/modules";






export function GalerySection() {
    return(
        <section className="flex justify-center items-center flex-col mt-[5rem] drop-shadow-md border-2 px-5 pb-[5rem] bg-yellow-50">
           <div className="space-y-3 mt-8">
            <Typography  variant="h5">Momentos únicos esperam você aqui.</Typography>
                <LineBase/>
           </div>
           <div className="py-6 w-full flex flex-col justify-center items-center">
                <div className="container grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-3 sm:grid-cols-2">
                    <Image 
                        src={Image01} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" 
                        />
                    
                    <Image  
                        src={Image03} 
                            alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" 
                            />        
                    <Image  
                        src={Image04}  
                            alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" 
                            />
                    
                    
                    <Image  
                        src={Image06} 
                            alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" 
                            />
                    <Image  
                        src={Image07} 
                            alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" 
                            />
                     <Image 
                        src={Image12} 
                        alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                         /> 
                </div>
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
        </section>

    )
}