/** Out: "aaaa-mm-ddThh:mm:ss" */
function getDateTime() {

    var today = new Date();
    var date = today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    var time = today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
    var dateTime = date + 'T' + time;
    return dateTime;
  }

  module.exports = { getDateTime }