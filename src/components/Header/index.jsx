import React from 'react';
import { Button } from "../Button";
import logo from '../../assets/img/logo-dio.png';
import { UserPicture } from './styles';
import { useNavigate } from 'react-router-dom';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from "./styles";

const Header = ({ autenticado }) => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    }

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <a href='/'>
                        <img src={logo} alt='Logo da dio'/>
                    </a>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>

                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/108998605?v=4' />
                    ) : (
                        <>
                            <MenuRight href='/'>Home</MenuRight>
                            <Button title='ENTRAR' onClick={handleClickSignIn} />
                            <Button title='CADASTRAR' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };
