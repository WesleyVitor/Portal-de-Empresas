import styled from "styled-components";

export const CommonLink = styled.a`
text-decoration:none;
`

export const Icon = styled.img`
width:${props => props.width};
height:${props => props.height};
border-radius: ${props=>props.radius || "0"} ;
`

export const Container = styled.div`
    display:flex;
`
export const StripeHeader = styled.div`
    background:#FFF;
    width:100%;
    height:56px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const MainSection = styled.main`
    width:100%;
    right:0;
    background:#F3F2F1;
    
`

export const Text = styled.p`
    color: ${props=>props.color};
    font-family:"Roboto", sans-serif;
    font-size:${props=>props.size};
`

export const Stripe = styled.div`
display:flex;
justify-content: space-between;
background:#2E2E3A;
height:34px;
padding-top:20px;
padding-left:10px;
color:#FFF;
font-size:20px;
font-family:"Roboto", sans-serif;


`