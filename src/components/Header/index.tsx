import logo from '../../assets/logo.svg';
import {Container, Content} from '../Header/styles';

export function Header () {
    return (
    <Container>
        <Content>
            <img src={logo} alt="icone verde com um sifrão" />
            <button type="button">
                Nova Transação
            </button>    
        </Content>
    </Container>
    )
}