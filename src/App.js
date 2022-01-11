import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import EditForm from './pages/EditForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  
  useEffect(async ()=>{
    axios.get("http://localhost:5000/getCompanies").then((res)=> setCompanies(res.data.dados))
  })
  const [companies, setCompanies] = useState([])
  

  const handleDeleteButton = (company)=>{
    axios.delete(`http://localhost:5000/delete/${company}`).then(()=>alert("Empresa deletada!"))
  }

  const addCompany = async(company)=>{

    company.id = companies.length + 1;
    axios.post("http://localhost:5000/companies",company).then(()=>alert("Dados cadastrado com sucesso"))

}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/form"  element={<Form addCompany={addCompany}/>}/>
        <Route path="/editForm/:id"  element={<EditForm/>}/>
        <Route path="/list"  element={<List companies={companies} handleDeleteButton={handleDeleteButton}/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
