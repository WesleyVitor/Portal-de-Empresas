import React from 'react';
import { TableCompany, Button } from './styles';

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
                                    <Button to={`/editForm/${company.id}`}>Editar</Button>
                                    <Button to="/" onClickCapture={()=>handleDeleteButton(index)}>Deletar</Button>
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