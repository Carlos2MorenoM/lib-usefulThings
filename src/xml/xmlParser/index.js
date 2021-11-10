const { parseXml } = require('./xmlConfig');

parseXml(body)["soap:Envelope"]["soap:Body"]["Example"]["attr"]["@_return"];

parseXml(body)["soap:Envelope"]["soap:Body"]["Example"]["AnotherExample"][0]["#text"];