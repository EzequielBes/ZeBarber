import dynamic from 'next/dynamic'

import {Container, ContainerMap} from './styled'

const  Map = dynamic(() => import('../map/map'), {ssr: false})
export const Local = () => {



  return (
    <Container>
      <div className='guardatudo'>
        <div><h1>Onde fica localizado a Zebarber ?</h1></div>
        <ContainerMap>
          <Map/>
        </ContainerMap>
      </div>
    </Container>
  )
}