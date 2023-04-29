import { Header } from "@/components/Home";
import { Sobre } from "@/components/Home/homeComponents/Sobre/sobre";
import { Navigation } from "@/components/Home/homeComponents/navigation/outto";
import {Container,ContainerCortes} from '../styles/HomeStyle'
import { GlobalStyle } from "@/styles/global";
import { Local } from "@/components/Home/homeComponents/Local";
import { Cortes } from "@/components/Home/homeComponents/Cortes";


export default function Home() {

  return (
    <>
      <Header/>
      <Container>
        <Navigation/>
        <Sobre/>
        <Local/>
        
        
      </Container>
      <ContainerCortes> 
        <div className="cortes">
          <Cortes/>
        </div>
      </ContainerCortes>
    </>
  )
}