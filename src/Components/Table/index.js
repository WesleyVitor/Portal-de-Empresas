import React from 'react';
import { TableCompany } from './styles';
const Table = ({companies})=>{
    return(
        <TableCompany>
            <thead>
                <tr>
                    <th rowSpan={2}>Identificação</th>
                    <th>Cidade/UF</th>
                    <th>CEP</th>
                    <th>Data de Abertura</th>
                </tr>
            </thead>
            <tbody>
                {
                    companies.map((company,index)=> {
                        return(
                            <tr key={index}>
                                <td>
                                    {company.name}
                                    {company.cnpj}
                                </td>
                                <td>
                                    {`${company.city}/${company.federated_unit}`}
                                </td>
                                <td>
                                    {company.cep}
                                </td>
                                <td>{company.date_open}</td>
                            </tr>
                        )
                    })
                }
            </tbody>     
        </TableCompany>
    )
}

export default Table;