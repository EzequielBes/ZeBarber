
import { MapContainer, TileLayer, useMap,Marker, Popup } from 'react-leaflet'
import {MapDiv} from './styled'

export default function Map() {

  return (
    <MapDiv>
      <MapContainer center={[-23.5346, -46.5592]} zoom={13} scrollWheelZoom={false} style={{height: '70%', width: '100%'}} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-23.5346, -46.5592]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
</MapContainer>
    </MapDiv>
    

  )
}