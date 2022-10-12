import Image from "next/image"
import ImgWhatsapp from '../../../assets/whatsapp.png'
import ImgWhatsappSvg from '../../../assets/whatsapp.svg'


export function ButtonWhatsapp() {
    return (
        <a  href='https://wa.me/5542988679697?text=Olá, tudo bem?' target="_blank"
            className='fixed bottom-10  flex items-center justify-center right-10 md:right-24 z-10 rounded-full bg-[#229B4B] hover:bg-green-500 outline-none drop-shadow-none w-[80px] h-[80px]'>
            <div className="w-10 h-10">
                <Image src={ImgWhatsappSvg}/>
            </div>
        </a>
    )
}