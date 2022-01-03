import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const companies = [
    {
      name:"facebook",
      cnpj:"9999999-99",
      image:"image",
      date_open:'18/04/2004',
      cep:'59300-000',
      street:'severino costa',
      number:'89',
      district:'Barra nova',
      federated_unit:'RN',
      city:'Caicó'
    }
  ]
  
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
