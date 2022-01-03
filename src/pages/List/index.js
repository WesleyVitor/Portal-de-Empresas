import React from 'react';
import { Container, StripeHeader,Icon,MainSection,Text } from '../../styles/global';
import Header from '../../Components/Header';
import Table from '../../Components/Table';
import { StripeTable } from './styles';
const List = ({companies})=>{
    return(
        <Container>
            <Header/>
            <MainSection>
                <StripeHeader>
                    <Icon width="26px" height="17px" src='/assets/Shape.png'/>
                </StripeHeader>
                <StripeTable>
                    <Text size="20px" color="#FFF">Empresas</Text>
                </StripeTable>
                <Table companies={companies}/>
            </MainSection>
            
        </Container>
        
    );
}
export default List;