import {
  Content,
  HeaderContainer,
} from './styles';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logoImg} alt="WAITERAPP" />
      </Content>
    </HeaderContainer>
  );
}
