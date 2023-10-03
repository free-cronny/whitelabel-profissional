import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${props => props.color || '#000'};
    width: 100%;
    min-height: 100vh;
`

export const InfosProfissional = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

export const HeaderNameProfissional = styled.div`
    width: 100%;
    text-align: center;
    h1{
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
        font-family: Titillium Web;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h3 {
        color: #fff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
        font-family: Titillium Web;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
    
`

export const NameProfissional = styled.div`
    width: 100%;
    img {
        width: 10%;
        border-radius: 15px;
        margin-top: 5px;
    }
    
`

export const MiddleContent = styled.div`
    margin-top: 20px;
    flex-wrap: wrap;
`

export const ProfissionalPhoto = styled.div`
    img {
        width: 100%;
        height: 100%;
        border-radius: 0.8125rem;
        // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        box-shadow: rgba(255, 255, 255, 1) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

        ${props =>
            props.isMobile &&
            css`
              /* Estilos específicos para telas menores (por exemplo, largura máxima de 768 pixels) */
              @media (max-width: 768px) {
                width: 100%; /* Largura total na tela menor */
                height: auto; /* Para manter a proporção da imagem */
              }
            `}
    }
`;

export const AboutProfissional = styled.div`
        background-size: cover;
        background-repeat:no-repeat;
        width: 100%;
        color: #fff;
        padding: 30px;
        p {
            color: #fff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
            font-family: Titillium Web;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin: 5px 0;
        }
        span {
            font-size: 24px;
            font-weight: 700;
        }

        
`

export const PhotoAndPlace = styled.div`

    display: flex;
    justify-content: space-around;
    //   background: url(https://i.pinimg.com/564x/e0/fa/f0/e0faf0d8467bf5a8ee312770f9f059c7.jpg);
    flex-wrap: wrap;
    padding: 20px; /* Adicione algum espaçamento interno para melhor aparência */
`;

export const PhotoPlace = styled.div`
  border-radius: 10px;
  margin: 10px; /* Adicione um pouco de margem para separar os itens */

  img {
    box-shadow: rgb(255, 255, 255) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    width: 36vw;
    height: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%; /* Em telas menores, a imagem ocupará toda a largura disponível */
    }
  }
`;


export const FooterProfissional = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 2px;
        color: #FFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: Titillium Web;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 5px;
        width: 100%;
        flex-wrap: wrap;
        background: #fff;
        color: #000;

        div {
            margin-top: 5px;
            
            padding: 0 10px;
            border-radius: 15px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }

        @media (max-width: 768px) {
            div {
              width: 100%; /* Em telas menores, a imagem ocupará toda a largura disponível */
            }
          }
`



