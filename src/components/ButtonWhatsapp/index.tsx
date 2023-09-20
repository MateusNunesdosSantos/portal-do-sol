import Image from 'next/image'
import ImgWhatsappSvg from '../../../assets/whatsapp.svg'

export function ButtonWhatsapp() {
  return (
    <a
      href="https://wa.me/5542920017044?text=Olá, Gostaria de saber informações sobre o IATE Clube"
      className="fixed bottom-10  animate-bounce flex items-center justify-center right-10 md:right-24 z-40 rounded-full bg-[#229B4B] hover:bg-green-500 outline-none drop-shadow-none w-[80px] h-[80px]"
    >
      <div className="w-10 h-10">
        <Image src={ImgWhatsappSvg} />
      </div>
    </a>
  )
}
