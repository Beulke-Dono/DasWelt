import { Carrossel } from "../components/carrosel"
import { Badges } from "../components/asidebadges"
import { Hero } from "../components/herosection"

export default function Home() {
  return(
    <div>
        <Carrossel/>
      <div className="flex">
        <Hero/>
        <Badges/>
      </div>
    </div>
  )
}