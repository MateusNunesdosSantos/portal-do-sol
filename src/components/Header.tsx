import { Typography } from '@material-tailwind/react'
import { FormSchedule } from './FormSchedule'

export function Header() {
  return (
    <>
      <section className="mb-10" id="pageHome"></section>
      <section className="bg-no-repeat bg-cover bg-center md:h-full bg-[url('../assets/bg-home.png')]">
        <div className="flex items-center pt-[8rem] gap-[5rem] md:gap-[10rem] flex-col-reverse md:flex-row justify-center">
          <FormSchedule />
          <div data-aos="fade-up" className="space-y-5 text-center text-white">
            <Typography variant="lead">BEM-VINDO(A) AO </Typography>
            <Typography className="text-2xl md:text-6xl" variant="h3">
              Condomínio Náutico Protal do Sol
            </Typography>
            <Typography variant="h4" className="text-2xl md:text-4xl">
              VIVA CERCADO POR QUILÔMETROS <br /> DE NATUREZA
            </Typography>
            <hr className="w-48 h-1 mx-auto border-0 rounded bg-amber-500"></hr>
          </div>
        </div>
      </section>
    </>
  )
}
