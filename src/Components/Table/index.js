import React,{useState} from 'react';
import { TableCompany } from './styles';
import { CommonLink } from '../../styles/global';
import axios from 'axios';
const Table = ({companies, handleDeleteButton})=>{
    

    
    return(
        <TableCompany>
            <thead>
                <tr>
                    <th rowSpan={2}>Identificação</th>
                    <th>Cidade</th>
                    <th>CEP</th>
                    <th>Data de Abertura</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    companies.map((company,index)=> {
                        return(
                            <tr key={index}>
                                <td>
                                    {company.name}<br/>
                                    {company.cnpj}
                                </td>
                                <td>
                                    {company.city}
                                </td>
                                <td>
                                    {company.cep}
                                </td>
                                <td>{company.date_open}</td>
                                <td>
                                    <button >Editar</button>
                                    <button onClick={()=>handleDeleteButton(index)}>Deletar</button>
                                </td>
                                
                               
                            </tr>
                        )
                    })
                }
            </tbody>     
        </TableCompany>
    )
}

export default Table;