
/** out: dd-mm-yyyy. */
function getDate(addition = 1) {

  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + addition;
  let year = date.getFullYear();

  if (month < 10) {
    return `${day}-0${month}-${year}`;
  } else {
    return `${day}-${month}-${year}`;
  }
}
/** out: yyyy-mm-dd. */
function getDateYMD(addition = 1){

  let date = new Date()

let day = date.getDate()
let month = date.getMonth() + addition
let year = date.getFullYear()

if(month < 10){
return(`${year}-0${month}-${day}`)
}else{
return(`${year}-${month}-${day}`)
}
}

module.exports = { getDate, getDateYMD }