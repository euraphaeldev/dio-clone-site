import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";

import {
    Container,
    Colum,
    CriarText,
    EsqueciText,
    Row, SubLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles';


const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (
        <>
            <Header />
            <Container>
                <Colum>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Colum>
                <Colum>
                    <Wrapper>
                        <TitleLogin>Já tem cadastro?</TitleLogin>
                        <SubLogin>Faça seu login e make the change._</SubLogin>
                        <form>
                            <Input placeholder='E-mail' leftIcon={<MdEmail />} />
                            <Input placeholder='Senha' type='password' leftIcon={<MdLock />} />
                            <Button title='ENTRAR' variant='secondary' onClick={handleClickSignIn} type='bottom' />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Colum>

                <Row>

                </Row>
            </Container>
        </>
    )
}

export { Login };