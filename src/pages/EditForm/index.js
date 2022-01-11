import React, { useState,useEffect } from 'react';
import Header from '../../Components/Header';
import { Container,MainSection,StripeHeader,Icon, Stripe } from '../../styles/global';
import {StyleForm} from '../Form/styles';
import axios from 'axios';
import {useParams, useNavigate  } from 'react-router-dom';

const EditForm = ()=>{
    const {id} = useParams();
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5000/show/${id}`).then((res)=>setCompany(res.data))
    },[])

    const [company, setCompany] = useState({});

    const handleChange = (event)=>{
        const {name, value} = event.target;
    
        setCompany({...company, [name]:value})
    }

    const handleSubmit = ()=>{
        axios.post("http://localhost:5000/edit", company).then(()=>alert("Atualizado com sucesso!"))
        navigate("/list")
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
                        Empresas/Editar Empresa
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
export default EditForm;