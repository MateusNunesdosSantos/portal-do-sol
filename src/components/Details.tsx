import { Typography } from "@material-tailwind/react";
import svg01 from '../../assets/svg1.svg'
import svg02 from '../../assets/svg2.svg'
import svg03 from '../../assets/svg3.svg'
import svg04 from '../../assets/svg04.svg'
import Image10 from '../../assets/img-10.jpeg'

import { ItensDetails } from "./ItensDetails";
import Image from 'next/image'


export function Details() {
    return(
        <section className=" bg-no-repeat   bg-cover bg-center  bg-[url('../assets/bg-site.png')]">
          <div className="flex justify-end items-center bg-gray-900/50 text-white">
            <div className="max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                <h2 className="text-3xl font-bold sm:text-4xl">No Portal do Sol você tem</h2>

                <hr className="mt-4 w-48 h-1 bg-amber-500 rounded border-0"></hr>
                </div>

                <div
                className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2"
                >               
                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg  p-4">
                        <Image src={svg01}/>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                        cumque tempore est ab possimus quisquam reiciendis tempora animi!
                        Quaerat, saepe?
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg p-4">
                     <Image src={svg02}/>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                        cumque tempore est ab possimus quisquam reiciendis tempora animi!
                        Quaerat, saepe?
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg p-4">
                        <Image src={svg03}/>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                        cumque tempore est ab possimus quisquam reiciendis tempora animi!
                        Quaerat, saepe?
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <span className="flex-shrink-0 rounded-lg  p-4">
                        <Image src={svg04}/>
                    </span>

                    <div className="ml-4">
                    <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                    <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                        cumque tempore est ab possimus quisquam reiciendis tempora animi!
                        Quaerat, saepe?
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </section>
    )
}