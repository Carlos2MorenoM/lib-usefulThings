async function print() {
    const { exec } = require("child_process");
    exec(
        //See lpr documentation for options (:
        "lpr -P nameOfthePrinter -o raw ZPL",
        (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        }
    );
}
module.exports = {print}