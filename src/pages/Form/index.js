import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Container,MainSection,StripeHeader,Icon } from '../../styles/global';
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
                <StyleForm onSubmit={handleSubmit}  >
                    <div>
                        <label>Nome</label>
                        <input type="text" value={company.name} name='name' onChange={handleChange}/>
                        <label>CNPJ</label>
                        <input type="text" value={company.cnpj} name='cnpj' onChange={handleChange}/>
                    </div>
                    
                    <label>Email</label>
                    <input type="text" value={company.email} name='email' onChange={handleChange}/>
                    <label>Data de abertura</label>
                    <input type="date" value={company.date_open} name='date_open' onChange={handleChange}/>
                    <fieldset>
                        <legend>Endereço</legend>
                        <div>
                            <label>CEP</label>
                            <input type="text" value={company.cep} name='cep' onChange={handleChange}/>
                            <label>Rua</label>
                            <input type="text" value={company.street} name='street' onChange={handleChange}/>
                        </div>
                        
                        <label>Número</label>
                        <input type="text" value={company.number} name='number' onChange={handleChange}/>
                        <label>Bairro</label>
                        <input type="text" value={company.district} name='district' onChange={handleChange}/>
                        <label>Cidade</label>
                        <input type="text" value={company.city} name='city' onChange={handleChange}/>
                    </fieldset>
                    
                    <input type="submit" value="Enviar"/>
                </StyleForm>
            </MainSection>
            
        </Container>
        
    );
}
export default Form;