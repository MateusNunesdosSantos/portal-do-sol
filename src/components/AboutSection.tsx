import Image from 'next/image'
import ImageAbout from '../../assets/About.png'
import { Link } from 'react-scroll/modules'

export function AboutSection() {
  return (
    <>
      <section id="pageSobre"></section>
      <section data-aos="fade-up" className="flex justify-center mt-56">
        <aside className="p-5 overflow-hidden rounded-lg bg-yellow-50 sm:grid sm:grid-cols-2">
          <Image
            data-aos="fade-up"
            alt="Student"
            src={ImageAbout}
            className="object-contain h-56 sm:h-full"
          />
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Viva o inexplicável.
              </h2>

              <p
                data-aos="fade-up"
                className="pt-5 text-justify text-gray-500 md:mt-4"
              >
                Imagine viver em um paraíso cercado por natureza, em um refúgio
                que alia tranquilidade e muito lazer. Esse é o Condomínio
                IATE Clube Ortigueira , um condomínio residencial que oferece
                lotes a partir de 600 m² com infraestrutura completa, segurança
                24 horas e uma vista espetacular para o lago da barragem da
                represa de Máua onde você pode desfrutar de esportes náuticos,
                pesca esportiva ou simplesmente contemplar a paisagem. Tudo isto
                sem perder os benefícios tecnológicos da cidade. Trabalhe em
                {" '"}Home Office{"' "} com internet fibra ótica. Aproveite a
                vida agora!
              </p>

              <div data-aos="fade-up" className="mt-6 md:mt-8">
                <Link
                  to="pageHome"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  id="pLinkgeHome"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded cursor-pointer bg-amber-600 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Faca seu agendamento
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
