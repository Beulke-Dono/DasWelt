import { Servicos } from "../components/servicos/servicos"
import { Carrossel } from "../components/carrosel"
import { Hero } from "../components/herosection"
import { Processo } from "../components/processo"
import { Formulario } from "../components/formulario"

export default function Home() {
  return(
    <div>
        <Carrossel/>
      <div className="flex flex-col">
        <Hero/>
        <Servicos/>
        <Processo/>
        <Formulario/>
      </div>
    </div>
  )
}