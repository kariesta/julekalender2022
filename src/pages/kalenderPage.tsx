import React from 'react';
import Luke from '../components/Luke';

interface kalenderParams {
    number: number,
    lukeDates: Date[],
    person: String
}

function genererLuker(dates:Date[], person: String){
    return shuffle(dates.map((date ,index) => {return <Luke number={index+1} date={date} person={person}/>}));
}

//borrowed from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array:JSX.Element[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function Kalender(params: kalenderParams) {
    const luker = genererLuker(params.lukeDates,params.person);//(5,[new Date(2021,11,21),new Date(2021,11,22),new Date(2021,11,23),new Date(2021,11,24),new Date(2021,11,25)])

    return (
        <div className="KalenderPage">
            <h1 >JULEKALENDER 2021</h1>
            <div className="Kalender">
                {luker}
            </div>
        </div>
    );
}

export default Kalender;