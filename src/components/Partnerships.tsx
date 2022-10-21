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
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Parcerias</h2>
        <div className="container grid grid-cols-2 gap-8 p-4 mx-auto md:grid-cols-3 sm:grid-cols-2">
          <Image src={LogoParcerias01} />
          <Image src={LogoParcerias02} />
          <Image src={LogoParcerias03} />
          <Image src={LogoParcerias05} />
          <Image src={LogoParcerias06} />
          <Image src={LogoParcerias07} />
        </div>
      </div>
    </section>
  )
}
