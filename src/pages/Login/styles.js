import styled from "styled-components";

export const Container = styled.div`
    max-width: 960px;
   
    margin: 0 auto;
    margin-top 120px;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 368px;
    display:flex;
    flex-direction: column;
`

export const Colum = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;
    margin-right: 25px;
`

export const Colum2 = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    margin-left: 25px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    max-width: 268px;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`
export const TitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    width: 100%
`

export const SubLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;

    color: #E5E044;
`

export const CriarText = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;
    cursor: pointer;
    
    color: #23dd7a;
`