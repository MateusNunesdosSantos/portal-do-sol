import { Typography } from "@material-tailwind/react";
import svg01 from '../../assets/svg1.svg'
import svg02 from '../../assets/svg2.svg'
import svg03 from '../../assets/svg3.svg'
import svg04 from '../../assets/svg04.svg'
import { ItensDetails } from "./ItensDetails";


export function Details() {
    return(
        <section className="text-[#303841] bg-no-repeat flex justify-center items-center bg-cover bg-center md:h-[51.25rem] bg-[url('../assets/bg-site.png')]">
                <div className="flex md:ml-[40rem] m-5 md:mt-[25rem] flex-col md:mb-[25rem] bg-white/50 p-14 space-y-10 rounded-lg">
                    <div className="flex flex-col items-center md:items-start">
                        <Typography  variant="h5">No Portal do Sol você tem </Typography>
                        <hr className="w-32 h-1 bg-amber-500 rounded border-0"/>
                    </div>
                    <div className="space-y-16">
                         <ItensDetails 
                            image={svg01} 
                            text="Desfrute do privilégio de ter uma praia artificial no jardim de casa. Areia fofinha e água cristalina estão confirmadas em dias irresistíveis de sol."/>
                        <ItensDetails 
                            image={svg02} 
                            text="Desfrute do privilégio de ter uma praia artificial no jardim de casa. Areia fofinha e água cristalina estão confirmadas em dias irresistíveis de sol."/>
                        <ItensDetails 
                            image={svg03} 
                            text="Desfrute do privilégio de ter uma praia artificial no jardim de casa. Areia fofinha e água cristalina estão confirmadas em dias irresistíveis de sol."/>
                        <ItensDetails 
                            image={svg04} 
                            text="Desfrute do privilégio de ter uma praia artificial no jardim de casa. Areia fofinha e água cristalina estão confirmadas em dias irresistíveis de sol."/>         
                    </div>
                </div>
        </section>
    )
}