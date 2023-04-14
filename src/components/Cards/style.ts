import styled from "styled-components";

export const StyleCard = styled.div`

border-top: solid #623CEA 2px;
padding-top: 30px;
padding-bottom: 50px;
color: aliceblue;
background-color: #121214;

.ajustingTextCenter{
    display: flex;
    justify-content: center;
}

.conteiner2{
    display: flex;
    justify-content: space-between;
    font-size: 12.5px;
    margin-top: -10px;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: aliceblue;
}

.card{
    height: 230px;
    width: 202px;
    margin: 20px;
}

.imgDeProjeto{
    width: 200px;
    height: 100px;
    cursor: pointer;
    border: 0.1px solid white;
}

.conteiner3{
    display: flex;
    justify-content: center;
}


.conteinerCards{
    display: flex;
    width: 1300px;
    flex-wrap: wrap;
    /* background-color: rgb(27, 26, 26); */
    /* overflow-x: scroll; */
}
/* 
.conteinerCards::-webkit-scrollbar-track{
	background-color: #D0D4CE;
}

.conteinerCards::-webkit-scrollbar{
	width: 6px;
    height:10px ;
}

.conteinerCards::-webkit-scrollbar-thumb{
	background-color: #71806B;
} */











.CardDescrisao{
    /* background-color:red ; */
    width:100% ;
    height: 80px;
    overflow-y:scroll ;
}

.CardDescrisao::-webkit-scrollbar-track{
	background-color: #D0D4CE;
}

.CardDescrisao::-webkit-scrollbar{
	width: 6px;
}

.CardDescrisao::-webkit-scrollbar-thumb{
	background-color: #71806B;
}

`