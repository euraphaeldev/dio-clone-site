import React from 'react';
import { Button } from "../Button";
import logo from '../../assets/img/logo-dio.png';
import { UserPicture } from './styles';

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
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da dio' />
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
                        <UserPicture src='https://avatars.githubusercontent.com/u/108998605?v=4'/>
                    ) : (
                        <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title='ENTRAR' />
                        <Button title='CADASTRAR' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };
