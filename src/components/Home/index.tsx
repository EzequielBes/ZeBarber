import Image from "next/image";
import background from "../../assets/background.jpg";
import * as C from "./styled";
import { Navigation } from "./homeComponents/navigation/outto";

export function Header() {
  return (
    <C.Container>
      <div className="headerContainer">
        <div className="imageContainer">
          <Image
            src={background}
            alt="imagem de fundo"
            quality={100}
            className="image"
          />
        </div>

        <div className="wellcome">
          <div className="boasVindas">
            <h3>Seja bem vindo a ZeBarber!</h3>
          </div>
          <div className="queroMarcar">
            <div>
              <h2>Quero marcar horario!</h2>
            </div>
          </div>
        </div>

      </div>
      
      

    </C.Container>
  );
}
