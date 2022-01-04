import React,{useState} from 'react';
import { TableCompany } from './styles';
import { Icon } from '../../styles/global';
import { Link } from 'react-router-dom';
const Table = ({companies})=>{
    const [clicked, setClicked] = useState(false);
    const handleAction = ()=>{
        setClicked(true);
    }
    return(
        <TableCompany>
            <thead>
                <tr>
                    <th rowSpan={2}>Identificação</th>
                    <th>Cidade/UF</th>
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
                                    <Icon radius="50%" src={company.image} width="35px" height="35px" />
                                    {company.name}<br/>
                                    {company.cnpj}
                                </td>
                                <td>
                                    {`${company.city}/${company.federated_unit}`}
                                </td>
                                <td>
                                    {company.cep}
                                </td>
                                <td>{company.date_open}</td>
                                <td>
                                    <button><Link to="/">Editar</Link></button>
                                    <button><Link to="/">Deletar</Link></button>
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