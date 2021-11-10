/**
In: "aaaa-mm-dd hh:mm:ss"
Out: aaaa-mm-ddThh:mm:ss GMT+01:00|GMT+02:00
*/
function getIso_Offset() {
    var isoDateString = new Date(horario).toISOString();
    isoSliced = isoDateString.slice(0, -5);
  
    offSet = new Date(horario).toString();
    var offSetSliced;
  
    if (offSet[30] === "1") {
      offSetSliced = offSet.slice(25, -35);
      offSetSliced += ":00";
    } else if (offSet[30] === "2") {
      offSetSliced = offSet.slice(25, -33);
      offSetSliced += ":00";
    }
  
    dhlTime = isoSliced + " " + offSetSliced;
    return dhlTime;
  };

  module.exports = { getIso_Offset }