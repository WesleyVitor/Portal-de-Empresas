import styled from "styled-components";

export const CommonLink = styled.a`
text-decoration:none;
`

export const Icon = styled.img`
width:${props => props.width};
height:${props => props.height};
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