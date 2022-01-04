import styled from "styled-components";

export const TableCompany = styled.table`
    margin-left:178px;
    margin-right:126px;


    & td{
        height:50px;
        width:24%;
    }


    @media(max-width:800px){
        margin-left:30px;
    }

    & a{
        text-decoration:none;
        color:#000;
    }

    & button{
        
        border:none;
        margin-top:5px;
        font-family:"Roboto", sans-serif;
    }

`
