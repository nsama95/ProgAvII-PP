import './App.css';
import { BrowserRouter , Router, Redirect, Route, Routes, Switch } from 'react-router-dom';
import ListSW from './Components/ListSW';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSW from './Components/HeaderSW';
import {ListadoPerPage} from './Pages/ListadoPerPage';
import {PersonajePage} from './Pages/PersonajePage';

function App() {
  return (
    <div >
      <BrowserRouter>
      <HeaderSW/>
      <Routes>
      <Route exact path="/"element={<ListadoPerPage/>}/> 
      <Route path="/Listado" element={<ListadoPerPage/>}/>
      <Route path="/Personaje" element={<PersonajePage/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;



/*
function App() {
  return (






    <div className="App">
    <HeaderSW/>
    <br/>
     <div className='grid grid--columns grid--gap'>
      <ListSW/>
      </div>
    </div>
  );
}

export default App;*/
