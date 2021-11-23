import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import SimpleCrypto from "simple-crypto-js";

interface kalenderSelectionParams {
    number: number,
    personer: String[]
}



function urls(names:String[]) {
    return names.map(name => {return "./"+md5(name.toString()).toString()}); //"/"+number.toString()
}

function kalAltern( names:String[]){
    //"./"+simpleCrypto.encrypt(name.toString())
    //const secretKey = "advent";
    //const simpleCrypto = new SimpleCrypto(secretKey);
    return names.map((name,index) => {
        return <Link to={"./"+name.toString()} key={index} className="KalenderOption">
            {names[index]}
        </Link>
    })
}

function KalenderSelection(params: kalenderSelectionParams) {

    const personUrls = urls(params.personer);
    const alternaltiv = kalAltern(params.personer);
    return (
        <div className="KalenderSelection">
            {alternaltiv}
        </div>

    );
}

export default KalenderSelection;