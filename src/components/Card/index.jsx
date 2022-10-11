import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://www.alura.com.br/artigos/assets/react-conheca-novidades-versao-18-react/react-conheca-novidades-versao-18-react.png' />
      <Content>
        <UserInfo>
            <UserPicture src='https://avatars.githubusercontent.com/u/108998605?v=4'/>
            <div>
                <h4>Raphael Alves</h4>
                <p>Há 20 minutos</p>
            </div>
        </UserInfo>

        <PostInfo>
            <h4>Projeto de Estudo sobre React</h4>
            <p>Projeto feito para o curso de react Developer... <strong>Saiba mais</strong></p>
        </PostInfo>

        <HasInfo>
            <h4>
                #React #JS #CSS #JavaScript
            </h4>

            <p>
                <FiThumbsUp /> 20
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
