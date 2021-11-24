import React from 'react';
import './App.css';
import Luker from './components/luker'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Kalender from './pages/kalenderPage';
import KalenderSelection from './pages/kalenderSelection';
import LukePage from './pages/lukePage';


function genererDatoer(startDato: Date, antall: number):Date[]{
  const datoer:Date[] = [];
  for (var i = 0; i < antall; i++) datoer.push(new Date(startDato.getFullYear(),startDato.getMonth(), startDato.getDate()+1))
  return datoer;
}

function App() {
  const antallLuker = 24;
  const lukeTider = genererDatoer(new Date(2021,11,21),24); //[new Date(2021,11,21),new Date(2021,11,22),new Date(2021,11,23),new Date(2021,11,24),new Date(2021,11,25)];
  const personer = ["Kristina","Ingrid","Sigrunn"];
  return <div className="App">
    <HashRouter>
      <Routes> 
      <Route path='/kristina' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[0]}/>}/>
      <Route path='/kristina/:lukeID' element={<LukePage number={antallLuker} lukeDates={lukeTider} />}/>
      <Route path='/Ingrid' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[1]}/>}/>
      <Route path='/Ingrid/:lukeID' element={<LukePage number={antallLuker} lukeDates={lukeTider} />}/>
      <Route path='/Sigrunn' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[2]}/>}/>
      <Route path='/Sigrunn/:lukeID' element={<LukePage number={antallLuker} lukeDates={lukeTider} />}/>
      <Route path='/select' element={<KalenderSelection number={7} personer={personer}/>}/>
    </Routes>
  </HashRouter>
  </div>
}

export default App;
