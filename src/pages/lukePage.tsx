import React from 'react';
import { 
    useParams
} from "react-router-dom";
import lukeinnhold from "../data/lukeinnhold";
//import SimpleCrypto from "simple-crypto-js";
import ReactPlayer from 'react-player/youtube';



interface lukePageParams {
    lukeDates: Date[]
}

function lukeInnhold(lukeNumber: String, person: String){
    const kalendermatch = lukeinnhold.filter(element => element.person === person)[0].kalender;
    const lukematch = kalendermatch.filter(element => element.luke === lukeNumber)[0];
    return <div className="lukeInnhold"> 
        <p className="Starttekst">{lukematch.innhold.starttekst}</p>
        {lukematch.innhold.video && <div className="player-wrapper">
        <ReactPlayer 
            className='react-player'
            url={lukematch.innhold.video}
            playing={false}
            loop={true}
            light={true}
            width='100%'
            height='100%'
          />
        </div>}
        {lukematch.innhold.bilde && <img src={lukematch.innhold.bilde} alt="et bilde eller gif som passer til teksten."/>}
        <p  className="Slutttekst">{lukematch.innhold.slutttekst}</p>
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
    if  (params.lukeDates[parseInt(lukeID)-1].getTime() > Date.now()){
        return (<div className="LukePage">
            app, app, app, nå er du litt tidlig ute 👀
        </div> )
    }
    const innhold = lukeInnhold(lukeID, person);

    return (
        <div className="LukePage">
            <h1 className="tittel">luke nr {lukeID}</h1>
            {innhold}
        </div>
    );
}

export default LukePage;