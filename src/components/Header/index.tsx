import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onNewTransactionModalOpen: () => void;
}

function Header({ onNewTransactionModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={onNewTransactionModalOpen}>Nova transação</button>
      </Content>
    </Container>
  )
}

export { Header };