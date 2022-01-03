import styled from "styled-components";




export const Section = styled.section`
    width:570px;
    margin-left:108px;
    margin-top:41px;

    @media(max-width:800px){
        margin-left:10px;
    }
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
    border-radius:4px;
    box-shadow:0px 1px 3px rgba(0,0,0,.26);
    @media(max-width:800px){
        margin-top:26px;
        margin-right:0;
        padding:20px 0;
    }

`
