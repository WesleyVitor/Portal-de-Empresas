import React from 'react';
import Header from '../../Components/Header';
import Main from '../../Components/Main';
import { Container } from '../../styles/global';
const Home = ()=>{
    return(
        <Container>
            <Header/>
            <Main/>
        </Container>
    );
}

export default Home;