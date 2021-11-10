function parseXml(xml) {
    var parser = require('fast-xml-parser');
    var he = require('he');
    var jsonObj = parser.parse(xml, options, true);


    var options = {
        attributeNamePrefix: "@_",
        attrNodeName: "attr",
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: false,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: "__cdata",
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: false,
        attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),
        tagValueProcessor: (val, tagName) => he.decode(val),
        stopNodes: ["parse-me-as-string"]
    };
var tObj = parser.getTraversalObj(xml,options);
var jsonObj = parser.convertToJson(tObj,options);
    return jsonObj
}
exports.parseXml = parseXml;
