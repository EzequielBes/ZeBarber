import * as C from './drr'
import logobarber from '../../../../assets/logobarber.png'
import Image from "next/image";

export const Navigation = () => {
  return (
    <C.NavigationBar>
      <div className="containerNavigation">
      <div className='nav'>
        <Image src={logobarber} alt='logo' quality={100} className='image'/> 
      
        <ul className="navigation">
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Local</a>
          </li>
          <li>
            <a>Cortes</a>
          </li>
        </ul>
      </div>
      </div>
    </C.NavigationBar>
  );
};
