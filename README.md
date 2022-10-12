# Desafio Curso React Developer da DIO

Durante o curso de React Developer da Digital Innovation One Inc., realizei o desafio de criar um Clone do Site da Digital Innovation One Inc. .

Esse clone site foi criado com React, e utilizei algumas features como react-router-dom, styled-components, hooks, e me aprofundei mais no uso de estados, ciclos de vida dos componentes e otimização da arquitetura de toda aplicação.

### Tela Home 
![telahome](https://user-images.githubusercontent.com/108998605/195228364-c4d24489-37d8-4cce-b740-a1cd8772cdc2.png)

##

### Tela Login

![telalogin](https://user-images.githubusercontent.com/108998605/195228450-62641516-dbe3-460e-8202-a16d1e1a5826.png)

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

https://user-images.githubusercontent.com/108998605/195229234-2b4106e4-ab38-486b-a5d1-a5d42ab4575d.mp4

##

###

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
