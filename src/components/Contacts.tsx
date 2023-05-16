import { FormContact } from './FormContact'

export function Contact() {
  return (
    <>
      <section id="pageContact"></section>
      <section className="mt-[5rem] mb-[5rem] text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14564.849333717844!2d-50.7763385!3d-24.1291802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ebd1e4048ba03b%3A0x45c18e8b20f8f650!2sIate%20Clube%20Ortigueira!5e0!3m2!1spt-BR!2sbr!4v1684227856658!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2  rounded-lg md:p-4 flex flex-col md:ml-auto w-full mt-[35rem] md:mt-0 relative z-10">
            <FormContact />
          </div>
        </div>
      </section>
    </>
  )
}

