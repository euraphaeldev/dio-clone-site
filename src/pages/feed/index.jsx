import React from "react";

import { Header } from "../../components/Header";


import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={4}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#RANKING TOP DA SEMANA</TitleHighlight>
                    <UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={65} />
                    <UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={10} />
                    <UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={23} />
                    <UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={46} />
                    <UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={95} />
                </Column>
            </Container>
        </>
    )
}

export { Feed };