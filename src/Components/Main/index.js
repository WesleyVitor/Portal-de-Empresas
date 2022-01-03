import React from 'react';
import { CommonLink,Icon } from '../../styles/global';
import {MainSection, Wrapper, Section,Text, ShelfItem, Shelf} from './styles'
import { Link } from 'react-router-dom';
const Main = ()=>{
    return(
        <MainSection>
            <Wrapper>
                <Icon width="26px" height="17px" src='/assets/Shape.png'/>
            </Wrapper>
            <Section>
                <Text size="20px">Inicio</Text>
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