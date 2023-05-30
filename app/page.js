import Hero from "./components/mainHero"
import Fsection from "./components/firstSection"
import Ssection from "./components/secondSection"
import Tsection from "./components/thirdSection"

export default function Home() {
  return (
    //  bg-[url('/bg.jpg')]
    <div className="">
        <Hero/>
        <Fsection/>
        <Ssection/>
        <Tsection/>

    </div>  
   )
}
