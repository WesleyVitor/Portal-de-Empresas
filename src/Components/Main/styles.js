import styled from "styled-components";

export const MainSection = styled.main`
    width:100%;
    right:0;
    background:#F3F2F1;
    
`

export const Wrapper = styled.div`
    background:#FFF;
    width:100%;
    height:56px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Section = styled.section`
    width:570px;
    margin-left:108px;
    margin-top:41px;

    @media(max-width:800px){
        margin-left:10px;
    }
`


export const Text = styled.p`
    color: #343E47;
    font-family:"Roboto", sans-serif;
    font-size:${props=>props.size};
`

export const Shelf = styled.div`
    display:flex;

    @media(max-width:800px){
        display:block;
    }
`

export const ShelfItem = styled.div`
    background:#FFF;
    padding:40px 100px;
    margin-right:26px;
    text-align:center;

    @media(max-width:800px){
        margin-top:26px;
        margin-right:0;
        padding:20px 0;
    }

`
