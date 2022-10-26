import svg01 from '../../assets/svg1.svg'
import svg02 from '../../assets/svg2.svg'
import svg03 from '../../assets/svg3.svg'

import Image from 'next/image'
import { Link } from 'react-scroll/modules'

export function Details() {
  return (
    <section className=" bg-no-repeat   bg-cover bg-center  bg-[url('../assets/bg-site.png')]">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center text-white md:justify-end md:pr-20 bg-gray-900/40"
      >
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-2xl">
              Benefícios de morar em condomínios náuticos
            </h2>

            <hr className="w-48 h-1 mt-4 border-0 rounded bg-amber-500"></hr>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 md:mt-14 md:grid-cols-2 md:gap-12 lg:grid-cols-1">
            <div className="flex items-center">
              <span className="flex-shrink-0 p-2 rounded-lg">
                <Image src={svg01} />
              </span>

              <div className="ml-4">
                <p className="max-w-sm mt-1 text-sm text-gray-300 md:text-lg">
                  Não é de hoje que as pessoas procuram um lugar mais tranquilo
                  para morar como os condomínios náuticos.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="flex-shrink-0 p-2 rounded-lg">
                <Image src={svg02} />
              </span>

              <div className="ml-4">
                <p className="max-w-sm mt-1 text-sm text-gray-300 md:text-lg">
                  Sair da cidade, do barulho e da poluição são os principais
                  motivos da grande procura por condomínios perto do campo.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="flex-shrink-0 p-2 rounded-lg">
                <Image src={svg03} />
              </span>

              <div className="ml-4">
                <p className="max-w-sm mt-1 text-sm text-gray-300 md:text-lg">
                  Contudo, as atenções se voltam para condomínios perto da água
                  que se destacam por apresentar mais opções de entretenimento.
                </p>
              </div>
            </div>
          </div>
          <h2 className="max-w-xl mt-10 text-3xl font-bold sm:text-2xl">
            Hoje, trazemos a oportunidade de você tornar o seu sonho em uma
            realidade,
            <b className="text-4xl text-amber-500 ">confira!</b>
          </h2>
          <Link
            data-aos="zoom-in-up"
            to="pageHome"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            id="pLinkgeHome"
            className="inline-block px-12 py-3 mt-5 text-sm font-medium text-white transition rounded cursor-pointer bg-amber-600 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Faca seu agendamento
          </Link>
        </div>
      </div>
    </section>
  )
}
