import React from 'react'
import './App.css';
//Ejemplo 1
import A from './paginas/A';
import B from './paginas/B';
import C from './paginas/C';
import D from './paginas/D';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'; 
import Error404 from './paginas/Error404';
import Nav from './Nav';
//Ejemplo 2
import Home from './reyes/Home';
import Atanagildo from './reyes/Atanagildo';
import Ataulfo from './reyes/Ataulfo';
import Ervigio from './reyes/Ervigio';
import Leogivildo from './reyes/Leogivildo';
import Recesvinto from './reyes/Recesvinto';
import Sisebuto from './reyes/Sisebuto';
//Ejemplo 3
import Modelo from './reyes/Modelo';



export default function App() {
  //npm i react-router-dom
  
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/pagina1" element={<A/>}/>
      <Route path="/pagina2" element={<B/>}/>
      <Route path="/pagina3" element={<C/>}/>
      <Route path="/pagina4/:letra" element={<D/>}/>
      <Route path="*" element={<Error404/>}/>



      <Route path="/" element={<Home/>}/>
      <Route path="/atanagildo" element={<Atanagildo/>}/>
      <Route path="/ataulfo" element={<Ataulfo/>}/>
      <Route path="/ervigio" element={<Ervigio/>}/>
      <Route path="/leogivildo" element={<Leogivildo/>}/>
      <Route path="/leovigildo" element={<Navigate to="/leogivildo"/>}/>
      <Route path="/recesvinto" element={<Recesvinto/>}/>
      <Route path="/sisebuto" element={<Sisebuto/>}/>

      <Route path="/reyes/:rey" element={<Modelo/>}/>


    </Routes>      
    </BrowserRouter>
    </>
  )
}
