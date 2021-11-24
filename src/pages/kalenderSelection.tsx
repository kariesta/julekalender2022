import React from 'react';
import { Link } from 'react-router-dom';

interface kalenderSelectionParams {
    number: number,
    personer: String[]
}




function kalAltern( names:String[]){
    return names.map((name,index) => {
        return <Link to={"./"+name.toString()} key={index} className="KalenderOption">
            {names[index]}
        </Link>
    })
}

function KalenderSelection(params: kalenderSelectionParams) {

    const alternaltiv = kalAltern(params.personer);
    return (
        <div className="KalenderSelection">
            {alternaltiv}
        </div>

    );
}

export default KalenderSelection;