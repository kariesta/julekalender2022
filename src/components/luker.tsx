import React from 'react';
import Luke from './Luke';


function Luker() {
  return (
    <div className="Luker">
      <Luke number={1} date={new Date(2021,11,22)} person={"yo"}></Luke>
      <Luke number={2} date={new Date(2021,11,23)} person={"yo"}></Luke>
      <Luke number={3} date={new Date(2021,11,24)} person={"yo"}></Luke>
    </div>
  );
}

export default Luker;
