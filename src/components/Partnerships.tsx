import LogoParcerias01 from '../../assets/logoEspacoSmart.svg'
import LogoParcerias02 from '../../assets/logoComercial.svg'
import LogoParcerias03 from '../../assets/logoLojasMM.svg'
// import LogoParcerias04 from '../../assets/logo-abc.svg'
import LogoParcerias05 from '../../assets/logo-deltacel.png'
import LogoParcerias06 from '../../assets/logo-locatelli.png'
import LogoParcerias07 from '../../assets/logo-Monatelli.png'

import Image from 'next/image'

export function Partnerships() {
  return (
    <section className="bg-amber-700">
      <div className="p-8 rounded-lg shadow">
        <p className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Parcerias
        </p>

        <div className="grid grid-cols-1 items-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias01} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Ponta Grossa
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias02} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Telêmaco Borba
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias03} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Telêmaco Borba
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias05} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Ponta Grossa
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias06} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Ortigueira
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
              <div className="flex-shrink-0">
                <a href="#" className="block relative">
                  <Image src={LogoParcerias07} />
                </a>
              </div>
              <div className="mt-2 text-center flex flex-col">
                <span className="text-gray-900 dark:text-white text-md font-medium">
                  Ortigueira
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
