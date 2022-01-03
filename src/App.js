import Home from './Components/Home';
import Form from './Components/Form';
import List from './Components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from './styles';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/form"  element={<Form/>}/>
          <Route path="/list"  element={<List/>}/>
        </Routes>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
