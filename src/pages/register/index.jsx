import {
    Container,
    Colum,
    CriarText,
    SubLogin,
    Title,
    TitleLogin,
    Wrapper
} from '../login/styles';

import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MdEmail, MdLock, MdLogin, MdPeople, MdPerson } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { PrivacyText, IsRegiteredText, Row } from "./styles"

const schema = yup.object({
    email: yup.string().email('Email não é válido!').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
    user: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Register = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('usuário ou senha inválido!')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    console.log(errors);



    const handleClickLogin = () => {
        navigate('/login');
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubLogin>Faça seu cadastro e make the change._</SubLogin>
                        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                           
                            <Input name='user' errorMessage={errors.user?.message} control={control} placeholder='Usuário' type='text' leftIcon={<MdPerson />} />

                            <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />} />

                            <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />} />
                            
                            <Button title='ENTRAR' variant='secondary' type='submit' />

                            <PrivacyText> Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PrivacyText>
                        </form>
                        <Row>
                            <IsRegiteredText>Já sou cadastrado.</IsRegiteredText>
                            <CriarText onClick={handleClickLogin}>Fazer Login</CriarText>
                        </Row>
                    </Wrapper>
                </Colum>

                <Row>

                </Row>
            </Container>
        </>
    )
}

export { Register }
