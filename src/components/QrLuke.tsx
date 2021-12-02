import React from 'react';
import { Link } from 'react-router-dom';
//import luke1kris from '../LUKER/luke1Kris.png';


interface QrLukeParams {
    number: number,
    date: Date,
    person: String
}

function url(number:number) {
    return "./"+number.toString();//+simpleCrypto.encrypt(number.toString());
}

function getImage(num: number, pers: String){
    //combine number and name start to image path.
    //const personCodes:  { [key: string]: string; } = {'Kristina':"kris",'Ingrid':"ing"};
    const personCodes = [{name: "Kristina", sufix: "kris"},{name: "Ingrid", sufix: "ing"},{name: "Sigrunn", sufix: "sig"},{name: "ThaoOgTine", sufix: "tt"}]
    const personCode = personCodes.filter(elem => elem.name == pers)[0].sufix;

    return  "https://kariesta.github.io/Julekalender2021/LUKER/luke"+num.toString()+personCode+".png";
    
}

function QrLuke(params: QrLukeParams) {
    const image = getImage(params.number,params.person)
    return (
        <Link to={url(params.number)} className="QrLuke">
        <img className="QRcode" src={image} alt={"QR kode for luke "+params.number.toString()}/>
        </Link>
    );
}

export default QrLuke;