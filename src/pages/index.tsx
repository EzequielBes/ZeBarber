import { Header } from "@/components/Home";
import { Sobre } from "@/components/Home/homeComponents/Sobre/sobre";
import { Navigation } from "@/components/Home/homeComponents/navigation/outto";
import {Container} from '../styles/HomeStyle'
import { GlobalStyle } from "@/styles/global";
import { Local } from "@/components/Home/homeComponents/Local";


export default function Home() {

  return (
    <>
      <Header/>
      <Container>
        <Navigation/>
        <Sobre/>
        <Local/>
      </Container>
      
    </>
  )
}