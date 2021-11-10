var builder = require("xmlbuilder");

exports.myXmlBuilder = (data) => {
    headers = {
      "soap12:Envelope": {
        "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
        "@xmlns:soap12": "http://www.w3.org/2003/05/soap-envelope",
      },
    };
  
    exampleService = {
        myExampleService: {  
        "@xmlns": "http://www.asmred.com/",
      },
    };

    id = {
        Something: {  
        "@oneparameter": "myparameter",
        "@xmlns": "http://www.asmred.com/"
      },
    };
  
    reference = {
      Reference: { '@type': 'C', '#text': data.myReference }
    }
  
  
    var xml = builder.create(headers, {
      version: "1.0",
      encoding: "utf-8",
    });
  
    xml
      .ele("soap12:Body")
      .ele(exampleService)
      .ele("docIn")
  
      .ele(id)
      .ele("Example_1")
  
      .ele("Example_2", data.example_2)
      .up()
      .ele("Example_3", data.Example_3)
      .up()
      .ele("SubService_level_1")
      .ele("Example_4", data.example_4)
      .up()
      .up()
      .ele("SubService_level_2")
      .ele("Example_5", data.example_5)
      .up()
      .ele("Example_6", data.example_6)
      .up()
      .up()
      .ele("SubService_level_2")
      .ele("Example_7", data.example_7)
      .up()
      .ele("Example_8", data.example_8)
      .up()
      .ele("Example_9", data.example_9)
      .up()
      .ele("Example_10", data.example_10)
      .up()
      // .ele("NIF", "11223344F")
      // .up()
      .ele("Other", "")
      .up()
      .up()
      .ele("References")
      .ele(reference)
      .up()
      .up()
    var xmldoc = xml.end({
      pretty: true,
    });

    return xmldoc
  };