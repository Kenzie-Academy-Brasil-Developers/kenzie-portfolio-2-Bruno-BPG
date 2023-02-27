import styled from "styled-components";

export const StyleHome = styled.div`

.conteinerHome{
    font-size: 19px;
    color: aliceblue;
}

.ajustar1{
    display: flex;
    justify-content: center;
}

.imgUser{
    width: 150px;
    border-radius: 100px;
    margin-bottom: 10px;
}
  
`

export const StyleCard = styled.div`

color: aliceblue;

.conteinerCards{
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    background-color: rgb(27, 26, 26);
    overflow-x: scroll;
}

.ajustingTextCenter{
    display: flex;
    justify-content: center;
}

.conteiner2{
    display: flex;
    justify-content: space-around;
    font-size: 12.5px;
    margin-top: -5px;
    cursor: pointer;
}

.card{
    height: 225px;
    width: 202px;
    /* background-color: blue; */
    /* border: solid white 1px; */
    margin: 7px;
}

.imgDeProjeto{
    width: 200px;
    height: 100px;
    cursor: pointer;
}


`