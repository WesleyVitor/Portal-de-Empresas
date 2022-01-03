import React from 'react';
import { CommonLink,Icon,StripeHeader,MainSection,Text } from '../../styles/global';
import {Section, ShelfItem, Shelf} from './styles'
import { Link } from 'react-router-dom';
const Main = ()=>{
    return(
        <MainSection>
            <StripeHeader>
                <Icon width="26px" height="17px" src='/assets/Shape.png'/>
            </StripeHeader>
            <Section>
                <Text color="#343E47" size="20px">Inicio</Text>
                <Shelf>
                    <ShelfItem>
                        <Link as={CommonLink} to='/list'>
                            <Icon width="71px" height="71px"src='/assets/casa.png'/>
                        </Link>
                        <Text size="16px">Listar Empresas</Text>
                    </ShelfItem>
                    <ShelfItem>
                        <Link as={CommonLink} to="/form">
                            <Icon width="71px" height="71px"src='/assets/Vector.png'/>
                        </Link>
                        <Text size="16px">Cadastrar Empresa</Text>
                    </ShelfItem>
                </Shelf>
                
            </Section>
            
        </MainSection>


    );
}

export default Main