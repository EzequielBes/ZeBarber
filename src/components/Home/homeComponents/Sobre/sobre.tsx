import { Container } from "./style";

export const Sobre = () => {
  return (
    <Container>
      <h1>Sobre a ZeBarber</h1>
      <div className="sobreContainer">
        <div className="description">
          <p>
            <span>Zebarber</span> é uma barbearia localizada em um bairro
            movimentado de uma cidade grande. O estabelecimento é conhecido por
            seus serviços de qualidade e atendimento personalizado. O
            proprietário, Ze, é um barbeiro experiente e apaixonado pelo que
            faz. Ele se orgulha de ter criado um ambiente acolhedor e
            descontraído, onde os clientes podem relaxar e desfrutar de um corte
            de cabelo ou barba impecável.
          </p>
        </div>
        <div className="Oque encontrara aqui">
          <p>
            Ao entrar na barbearia, os clientes são recebidos por uma decoração
            vintage e moderna, com cadeiras de barbeiro clássicas e equipamentos
            de última geração. O espaço é aconchegante e iluminado, com música
            ambiente que ajuda a criar um clima de descontração.
          </p>
        </div>
      </div>
    </Container>
  );
};
