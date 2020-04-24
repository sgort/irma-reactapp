import React from 'react';
const irma = require('@privacybydesign/irmajs');

const server = 'http://localhost:8088';
const attrs = ["Yes", "Yes", "Yes", "No"];
const request = {
    '@context': 'https://irma.app/ld/request/issuance/v2',
    'credentials': [{
      'credential': 'irma-demo.MijnOverheid.ageLower',
      'attributes': { 'over12': attrs[0], 'over16': attrs[1], 'over18': attrs[2], 'over21': attrs[3] }
    }]};

const HelloIrma = () => {

    function sayHello() {
        irma.startSession(server, request)
            .then(({ sessionPtr, token }) => irma.handleSession(sessionPtr, { server, token }))
            .then(result => console.log('Done', result));;
    }

    return (
        <div>
            <h2>IRMA</h2>
            <p>Illustrates attibute issuance:</p>
            <div className="App">
                <p className="App-intro"><button onClick={sayHello}>Click me!</button>
                </p>
            </div>
        </div>
    );
};

export default HelloIrma;