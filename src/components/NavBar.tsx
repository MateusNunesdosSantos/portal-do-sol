import Image from "next/image";
import ImgLogo from '../../assets/logoPortaldoSol.svg'
import {Link} from 'react-scroll/modules'

import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";


export function NavBar() {

    const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link 
          to="pageHome"  
          className="flex items-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link 
          to="pageSobre" 
          className="flex items-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Sobre
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link 
          to="pageContact" 
          className="flex items-center cursor-pointer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contato
        </Link>
      </Typography>
    </ul>
  );

    return (
        <nav className="mx-auto fixed z-30 w-screen py-1 px-4 border-b-2 border-yellow-700 bg-white">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Image  src={ImgLogo}/>
            <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </nav>
        // <div className="flex-row items-center justify-around bg-slate-50 border-b-2 border-yellow-700 flex px-10" >
        //         <div className="flex ">
        //             <Image width={130} height={93.13} src={ImgLogo}/>
        //         </div>
        //         <div className="flex items-center gap-8 text-md font-semibold">
        //             <Link href='/'>Home</Link>
        //             <Link href='/about'>Sobre</Link>
        //         </div>
        // </div>

    )
}