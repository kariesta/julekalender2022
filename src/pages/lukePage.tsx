import React from 'react';
import { 
    useParams
} from "react-router-dom";
import SimpleCrypto from "simple-crypto-js";



interface lukePageParams {
    number: number,
    lukeDates: Date[]
}

function lukeInnhold(lukeNumber: String){
    return "hei";//({"tekst":"heihei","video":"https://www.youtube.com/watch?v=6ta_sftSfIw", "bilde":"../images/testimage.png"});
}

function LukePage(params: lukePageParams) {
    let { lukeID} = useParams();
    const secretKey = "advent";
    const simpleCrypto = new SimpleCrypto(secretKey)
    let lukeNumber = "x";
    if (lukeID){
        lukeNumber = simpleCrypto.decrypt(lukeID.toString()).toString();

    }
    const innhold = lukeInnhold(lukeNumber);
    return (
        <div className="LukePage">
            luke nr {lukeNumber}
            {innhold}
        </div>
    );
}

export default LukePage;