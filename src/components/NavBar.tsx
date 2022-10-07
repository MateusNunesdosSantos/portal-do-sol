import Image from "next/image";
import ImgLogo from '../../assets/logo.png'
import Link from "next/link";


export function NavBar() {
    return (
        <div className="w-full flex-row bg-slate-400 h-48 container flex" >
                <div className="flex ">
                    <Image src={ImgLogo}/>
                </div>
                <div>
                    <Link href='/'>Home</Link>
                </div>
        </div>

    )
}