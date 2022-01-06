import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Container,MainSection,StripeHeader,Icon, Stripe,Text } from '../../styles/global';
import {StyleForm} from './styles';
import axios from 'axios'
const Form = ({addCompany})=>{
    const initialForm = {
        name:"",
        cnpj:"",
        email:"",
        date_open:"",
        cep:"",
        street:"",
        number:"",
        district:"",
        city:""
    }
    const [company, setCompany] = useState(initialForm);

    const handleChange = (event)=>{
        const {name, value} = event.target;
    
        setCompany({...company, [name]:value})
    }

    const handleSubmit = async()=>{
        setCompany(initialForm);
        axios.post("http://localhost:5000/companies",company).then(()=>alert("Dados cadastrado com sucesso"))

    }
    return(
        <Container>
            <Header/>
            <MainSection>
                <StripeHeader>
                    <Icon width="26px" height="17px" src='/assets/Shape.png'/>
                </StripeHeader>
                <StyleForm onSubmit={handleSubmit}>
                    <Stripe>
                        Empresas/Cadastar Empresa
                        <input type="submit" value="Enviar"/>
                    </Stripe>
                    <fieldset className='person-fieldset'>
                        <div>
                            <input required placeholder='Nome' type="text" value={company.name} name='name' onChange={handleChange}/>
                            <input required placeholder='CNPJ' type="text" value={company.cnpj} name='cnpj' onChange={handleChange}/>
                            <input placeholder='Email' type="text" value={company.email} name='email' onChange={handleChange}/>
                        
                        </div>
                        <div id="opening">
                            <label>Data de Abertura</label>
                            <input required placeholder='Data de abertura' type="date" value={company.date_open} name='date_open' onChange={handleChange}/>
                        </div>
                        
                         
                    </fieldset>
                    
                    <fieldset className='andress-fieldset'>
                        <legend>Endereço</legend>
                        <div>
                            <input required placeholder='Cep' type="text" value={company.cep} name='cep' onChange={handleChange}/>
                            
                            <input placeholder='Rua' type="text" value={company.street} name='street' onChange={handleChange}/>
                        </div>
                        
                        
                        <input placeholder='Número' type="text" value={company.number} name='number' onChange={handleChange}/>
                        
                        <input placeholder='Bairro' type="text" value={company.district} name='district' onChange={handleChange}/>
                        
                        <input placeholder='Cidade' type="text" value={company.city} name='city' onChange={handleChange}/>
                    </fieldset>
                    
                    
                </StyleForm>
            </MainSection>
            
        </Container>
        
    );
}
export default Form;