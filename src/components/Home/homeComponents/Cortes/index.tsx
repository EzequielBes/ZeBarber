import { useEffect, useState } from "react"
import { TiposCorte, propsCortes } from "./cortesBarbas"
import Image from "next/image"
import { Container, Title, Description } from "./styled"

export const Cortes = () => {

const [cortes, setCortes] = useState<propsCortes[]>([])
const setHaircuts = () => {
  setCortes(TiposCorte)
}
useEffect(()=>{
  setHaircuts()
},[])
  return (

    <Container>
      {cortes.map((item,index) => (
        <div key={index} className="bloco">
          <Title>{item.nome}</Title>
          <Description>{item.descricao}</Description>
          <img src={item.imagemUrl} alt={item.descricao} width={120} height={120}/>
        </div>
      ))}
    </Container>
  )
}