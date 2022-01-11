import styled from "styled-components";
import { Link } from 'react-router-dom';
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
        
        
    }
`

export const Button = styled(Link)`
display:block;
border: 1px groove #000;
margin-top:5px;
font-family:"Roboto", sans-serif;
text-align:center;
border-radius:10px;
padding:1px;
`

