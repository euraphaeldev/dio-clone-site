import React from 'react';
import { Button } from "../Button";
import logo from '../../assets/img/logo-dio.png';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from "./styles";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da dio' />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>

                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title='ENTRAR' />
                    <Button title='CADASTRAR' />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };
