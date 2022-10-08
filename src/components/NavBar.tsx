import Image from "next/image";
import ImgLogo from '../../assets/logo.png'
import Link from "next/link";


export function NavBar() {
    return (
        <div className="flex-row items-center justify-around bg-slate-50 border-b-2 border-yellow-700 flex px-10" >
                <div className="flex ">
                    <Image width={130} height={93.13} src={ImgLogo}/>
                </div>
                <div className="flex items-center gap-8 text-md font-semibold">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>Sobre</Link>
                </div>
        </div>

    )
}