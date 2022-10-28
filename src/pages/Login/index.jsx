import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'
import {
    Container,
    Colum,
    Colum2,
    CriarText,
    EsqueciText,
    Row, 
    SubLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles';

import { useForm } from 'react-hook-form';

const schema = yup.object({
    email: yup.string().email('email não é válido!').required('Campo Obrigatório'),
    password: yup.string().min(3, 'no minimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(errors);

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


    const handleClickSignIn = () => {
        navigate('/register');
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
                        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                            <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail />} />
                            
                            <Input name='password'  errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock />} />

                            <Button title='ENTRAR' variant='secondary' type='submit' />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleClickSignIn}>Criar conta</CriarText>
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