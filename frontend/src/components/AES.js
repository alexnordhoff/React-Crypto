import React from 'react';
import { useState } from 'react';


var CryptoJS = require("crypto-js");


function AES() {
    const [key, setKey] = useState("");
    const [text, setText] = useState("");
    const [cipher, setCipher] = useState("");
    const [byte, setByte] = useState("");
    const [decryptData, setDecryptData] = useState("");
    function encryptAES(string1, string2)
    {
        setCipher(CryptoJS.AES.encrypt(JSON.stringify(string1), string2).toString());
        return
    }
    async function decryptAES(string1, string2)
    {
        setByte(CryptoJS.AES.decrypt(string1, string2).toString(CryptoJS.enc.Utf8));
        await setDecryptData(byte);
        return
    }

    return (
        <div class='container'>
            <div class = "row" style={{alignContent: 'center'}}>
                <h1>AES</h1>
            </div>

            <div class="row" style={{alignContent: 'center'}}>
                <input class="form-control" placeholder="Enter a Key:" type="text" name="input" onChange={(e) => setKey(e.target.value)}/>
                <input class="form-control" placeholder="Enter a PlainText:" type="text" name="input" onChange={(e) => setText(e.target.value)}/>
                <button class="btn btn-primary" style={{alignContent: 'center'}} type="submit" onClick={()=>encryptAES(text, key)}> Submit </button>
                <p>{cipher}</p>
                <button class="btn btn-primary" style={{alignContent: 'center'}} type="submit" onClick={()=>decryptAES(cipher, key)}> Decrypt </button>
                <p>{decryptData}</p>
            </div>
        </div>
    )
}


export default AES;