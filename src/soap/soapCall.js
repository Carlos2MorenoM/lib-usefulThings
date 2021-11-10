const soapRequest = require('easy-soap-request');

async function soapCall(xml) {
    const url = 'https://wsMyExample.asmred.com/b2b.asmx?op=mySuperExample';
    const sampleHeaders = {
      'Content-Type': 'application/soap+xml; charset=utf-8',
      'soapAction': "http://www.asmred.com/exampleService"
    };
    // usage of module
  
        const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 });
        const { headers, body, statusCode } = response;
         console.log(headers);
         console.log(statusCode);
        return body
   
  }

  module.exports = { soapCall }