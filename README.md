# Desafio Curso React Developer da DIO

Durante o curso de React Developer da Digital Innovation One Inc., realizei o desafio de criar um Clone do Site da Digital Innovation One Inc. .

Esse clone site foi criado com React, e utilizei algumas features como react-router-dom, styled-components, hooks, useForm, yup, axios, json-server e me aprofundei mais no uso de estados, ciclos de vida dos componentes e otimização da arquitetura de toda aplicação.

### Tela Home 

![telahome](https://user-images.githubusercontent.com/108998605/195228364-c4d24489-37d8-4cce-b740-a1cd8772cdc2.png)

##

### Tela Login - com validação

![telalogin](https://user-images.githubusercontent.com/108998605/198725975-e3d63e0a-84ff-4bea-8ece-2992f82b66cd.png)

## Criei um JSON-Server e uma API para consumir os dados. 

Criei uma API para consumir os dados do JSON-Server e assim simular a comunicação com um servidor externo e poder validar os dados recebidos.

![axiosAPI](https://user-images.githubusercontent.com/108998605/198724336-660fd4a6-8d41-418e-9d81-476ec5a74933.png)

Json-server rodando pelo NodeJs.

![jsonserver](https://user-images.githubusercontent.com/108998605/198725527-d780b7de-d619-4541-92d2-8f2c8785263a.png)

## Validação da Tela de Login com exibição de erro dinâmica.

Nos formulários utilizei o yup, useForm para validar esses formulários e em caso de erro exibir a mensagem dinâmicamente no formulário para o usuário.

![yupuseform](https://user-images.githubusercontent.com/108998605/198726660-d7e90ad2-55bb-4e5a-a424-66beece71599.png)
#
![telaloginvalidando](https://user-images.githubusercontent.com/108998605/198726477-a8722e20-e67a-4175-95a2-63ed335f54c6.png)

##

### Tela de Registro - com validação

![register](https://user-images.githubusercontent.com/108998605/198727644-4941f1f5-1e5c-4033-bb2b-7ff26e47fa32.png)

##

### Tela Feed

Aqui o destaque fica por conta dos percentuais que são dinamicos nas barras de progressão (na lateral direita do site):

* Styled-Component 
~~~
export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 
~~~

* Aplicando na página o componente dinâmico
~~~
<UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={65} />
<UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={10} />
<UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={23} />
<UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={46} />
<UserInfo nome="Raphael Alves" image="https://avatars.githubusercontent.com/u/108998605?v=4" percentual={95} />
~~~

![telafeed](https://user-images.githubusercontent.com/108998605/195228654-1f8a7f1c-0025-4225-a039-c15c4b8ac40a.png)

##

## Projeto Finalizado

https://user-images.githubusercontent.com/108998605/198733458-b27ff6df-5238-4d2e-be02-2db2138e1bfc.mp4

##

###

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
