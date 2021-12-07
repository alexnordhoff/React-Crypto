import React from 'react';
import { Card } from 'react-bootstrap';


export default function Home() {
    return (
        <div class="container">
            <div class="row" style={{marginTop: 10, marginBottom: 10, alignContent: "center"}}>
                <Card>
                    <Card.Header as="h5">Cryptography Explained:</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The main use of cryptography in todays society is to encrypt and protect data. Depending on the cryptography system you may be able to decrypt that data as well.
                                Some of the cryptography systems that allow you to decrypt data are AES, RSA, and many more. Most companies that use the SHA cryptography system use it for verification of data 
                                since you are not able to reverse engineer the plaintext from the hash value produced.
                            </Card.Text>
                        </Card.Body>
                </Card>
                
            </div>
            <div class="row" style={{marginTop: 10, marginBottom: 10, alignContent: "center"}}>
                <Card>
                    <Card.Header as="h5">AES Explained:</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The first step in getting the RSA cryptography system to work is by generating a public key for the specific user. Most of the time we will use a random number generator to 
                                generate the public key. Once the user has their public key they can encrypt data using that key. They will also be able to decrypt using the cipher text and public key.
                            </Card.Text>
                        </Card.Body>
                </Card>
                
            </div>
            <div class="row" style={{marginTop: 10, marginBottom: 10, alignContent: "center"}}>
                <Card>
                    <Card.Header as="h5">SHA Explained:</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The first step in using SHA cryptography system is getting the plaintext that the user wants hashed. The second step you use the SHA hashing and compression algorithm
                                to hash the data. Once the data is hashed there is no way to reverse engineer the hash back to the plaintext. That is what makes SHA so secure.
                            </Card.Text>
                        </Card.Body>
                </Card>
                
            </div>
            <div class="row" style={{marginTop: 10, marginBottom: 10, alignContent: "center"}}>
                <Card>
                    <Card.Header as="h5">RSA Explained:</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                The first step to using the RSA cryptography system is by generating a public and private key. We then utilize the public key to encrypt the plaintext which will produce
                                the cipher text. We can utilize the cipher text and the private key of the user to decrypt the cipher text into the original text.
                            </Card.Text>
                        </Card.Body>
                </Card>
                
            </div>
        </div>
    )
}
