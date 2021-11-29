import React from 'react';
import { 
    useParams
} from "react-router-dom";
import lukeinnhold from "../data/lukeinnhold";
//import SimpleCrypto from "simple-crypto-js";



interface lukePageParams {
    lukeDates: Date[]
}

function lukeInnhold(lukeNumber: String, person: String){
    const kalendermatch = lukeinnhold.filter(element => element.person === person)[0].kalender;
    const lukematch = kalendermatch.filter(element => element.luke === lukeNumber)[0];
    return <div> 
        {lukematch.innhold.starttekst}
        {lukematch.innhold.video}
        {lukematch.innhold.bilde}
        {lukematch.innhold.slutttekst}
    </div>
}

function LukePage(params: lukePageParams) {
    let { person, lukeID} = useParams();
    //const secretKey = "advent";
    //const simpleCrypto = new SimpleCrypto(secretKey)
    if (lukeID === undefined || person === undefined){
        return <div className="LukePage">
        ingen luke her
        </div>
    }
    if  (params.lukeDates[parseInt(lukeID)].getTime() > Date.now()){
        return (<div className="LukePage">
            app, app, app, nå er du litt tidlig ute 👀
        </div> )
    }
    const innhold = lukeInnhold(lukeID, person);

    return (
        <div className="LukePage">
            <h1>luke nr {lukeID}</h1>
            {innhold}
        </div>
    );
}

export default LukePage;