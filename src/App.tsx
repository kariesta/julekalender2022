import React from 'react';
import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Kalender from './pages/kalenderPage';
import Kalenderprint from './pages/kalenderprint';
import KalenderSelection from './pages/kalenderSelection';
import LukePage from './pages/lukePage';
import KalenderLandingPage from './pages/KalenderLandingPage';


function genererDatoer(startDato: Date, antall: number):Date[]{
  const datoer:Date[] = [];
  const enDagIMs = 86400000;
  for (var i = 0; i < antall; i++) {
    const newOne: Date = new Date(startDato.getTime()+(enDagIMs*i));
    datoer.push(newOne);
  }
  return datoer;
}

function App() {
  const antallLuker = 24;
  const lukeTider = genererDatoer(new Date(2021,11,1),24);//change back before commit!
  console.log(lukeTider)
  const personer = ["Kristina","Ingrid","Sigrunn","ThaoOgTine"];
  return <div className="App">
    <HashRouter>
      <Routes> 
      <Route path='/Kristina' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[0]}/>}/>
      <Route path='/Kristinaprint' element={<Kalenderprint number={antallLuker} lukeDates={lukeTider} person={personer[0]}/>}/>
      <Route path='/Ingrid' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[1]}/>}/>
      <Route path='/Ingridprint' element={<Kalenderprint number={antallLuker} lukeDates={lukeTider} person={personer[1]}/>}/>
      <Route path='/Sigrunn' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[2]}/>}/>
      <Route path='/Sigrunnprint' element={<Kalenderprint number={antallLuker} lukeDates={lukeTider} person={personer[2]}/>}/>
      <Route path='/ThaoOgTine' element={<Kalender number={antallLuker} lukeDates={lukeTider} person={personer[3]}/>}/>
      <Route path='/ThaoOgTineprint' element={<Kalenderprint number={antallLuker} lukeDates={lukeTider} person={personer[3]}/>}/>
      <Route path='/:person/:lukeID' element={<LukePage lukeDates={lukeTider} />}/>
      <Route path='/select' element={<KalenderSelection number={7} personer={personer}/>}/>
      <Route path='/' element={<KalenderLandingPage/>}/>      
    </Routes>
  </HashRouter>
  </div>
}

export default App;
