import { Typography } from "@material-tailwind/react";
import { FormContact } from "./FormContact";
import {Map} from './Map'

export function Contact() {
    return (
           <>
           <section id="pageContact"></section>
             <section  className="mt-[5rem] mb-[5rem] text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0"  title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.1954239202646!2d-50.777659044398916!3d-24.12950242613813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd1b454a23b84c3!2sCondom%C3%ADnio%20Portal%20do%20Sol!5e1!3m2!1spt-BR!2sbr!4v1665613773887!5m2!1spt-BR!2sbr" ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2  rounded-lg md:p-4 flex flex-col md:ml-auto w-full mt-[35rem] md:mt-0 relative z-10">
                        <FormContact/>
                    </div>
                </div>
            </section>  
           </>
    )
}