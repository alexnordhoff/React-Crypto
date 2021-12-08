import NodeRSA from 'node-rsa';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const nodeRSA = require("node-rsa");

export default function RSA() {
    const key = new NodeRSA({b:1024});
    let fileReader;
    var public_key = key.exportKey('public');
    var private_key = key.exportKey('private');

    const [encMessage, setEncMessage] = useState("");
    const [decMessage, setDecMessage] = useState("");
    const [pubKeyHolder, setPubKeyHolder] = useState("");
    const [privKeyHolder, setPrivKeyHolder] = useState("");

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
        
      }

    //read message and store
    const handleFileReadEnc = (e) => {
        const content = fileReader.result;
        setEncMessage(content);
      };
      
      const handleFileChosenEnc = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileReadEnc;
        fileReader.readAsText(file);
      };

      const handleFileReadDec = (e) => {
        const content = fileReader.result;
        setDecMessage(content);
      };
      
      const handleFileChosenDec = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileReadDec;
        fileReader.readAsText(file);
      };

    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <form>
                    <div className="form-group spacing">
                        <label for="Gen keys">Dont Have Public/Private Keys?</label>
                        <br/>
                        <button style={{margin: 10}} type="submit" className="btn btn-primary" onClick={() => {
                            download("keys.txt", public_key + "\n" + private_key);
                        }}> Generate Keys</button>
                    </div>
                </form>
                <hr/>
                    <div className="form-group spacing">
                        <label for="Enter a text you want to encrypt" name="emessage" id="emessage">Message to be Encrypted</label>
                        <textarea className="form-control" placeholder="Enter a Message" onChange={e => setEncMessage(e.target.value)}/> 
                        <label for="file">Please Upload your Public Key</label>
                        <br/>
                        <textarea className="form-control" placeholder="Enter a Message" onChange={e => setPubKeyHolder(e.target.value)}/> 
                        <br/>
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            let key_public = new NodeRSA(pubKeyHolder);
                            var ecrypt = key_public.encrypt(encMessage, "base64");
                            download("encMessage.txt", ecrypt);
                        }}> Encrypt</button>
                    </div>
                <hr/>
                    <div className="form-group spacing">
                        <label for="Enter something to decrypt">Secret to be decrypted</label>
                        <textarea className="form-control" placeholder="Enter a Message" onChange={e => setDecMessage(e.target.value)}/> 
                        <label for="file">Please Upload your Private Key</label>
                        <br/>
                        <textarea className="form-control" placeholder="Enter a Message" onChange={e => setPrivKeyHolder(e.target.value)}/> 
                        <br/>
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            let key_private = new NodeRSA(privKeyHolder);
                            var decrypt = key_private.decrypt(decMessage, "utf-8");
                            download("decMessage.txt", decrypt);
                        }}> Decrypt</button>
                    </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}
