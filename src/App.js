import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useState} from 'react';
function App() {
  const [companies, setCompanies] = useState([
    {
      name:"facebook",
      cnpj:"9999999-99",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      date_open:'18/04/2004',
      cep:'59300-000',
      street:'severino costa',
      number:'89',
      district:'Barra nova',
      federated_unit:'RN',
      city:'Caicó'
    },
    {
      name:"facebook",
      cnpj:"9999999-99",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      date_open:'18/04/2004',
      cep:'59300-000',
      street:'severino costa',
      number:'89',
      district:'Barra nova',
      federated_unit:'RN',
      city:'Caicó'
    }
  ])
  
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
