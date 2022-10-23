import { Typography } from '@material-tailwind/react'
import { FormSchedule } from './FormSchedule'

export function Header() {
  return (
    <>
      <section className="mb-10" id="pageHome"></section>
      <section className="bg-no-repeat bg-cover bg-center md:h-full bg-[url('../assets/bg-home.png')]">
        <div className="flex items-center pt-[8rem] gap-[5rem] md:gap-[10rem] flex-col-reverse md:flex-row justify-center">
          <FormSchedule />
          <div data-aos="fade-left" className="text-white text-center space-y-3">
            <Typography variant="lead">BEM-VINDO(A) AO </Typography>
            <Typography variant="h3">
              Condomínio Náutico Protal do Sol
            </Typography>
            <Typography variant="h3" className="sm:text-2xl md:text-4xl">
              VIVA CERCADO POR QUILÔMETROS <br /> DE NATUREZA
            </Typography>
            <hr className="mx-auto w-48 h-1 bg-amber-500 rounded border-0"></hr>
          </div>
        </div>
      </section>
    </>
  )
}
