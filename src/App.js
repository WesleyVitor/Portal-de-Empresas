import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  useEffect(async ()=>{
    axios.get("http://localhost:5000/getCompanies").then((res)=> setCompanies(res.data.dados))
  },[])
  const [companies, setCompanies] = useState([])

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/form"  element={<Form/>}/>
        <Route path="/list"  element={<List companies={companies}/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
