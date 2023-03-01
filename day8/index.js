// Importing OS module.
const os = require("os");

// System Informations.
console.log(`No of Bit System : ${os.arch()}`);
console.log(` Name of the Host is : ${os.hostname()}`)
console.log(`Operating System Rlease date : ${os.release()}`)
console.log(`Free Memory : ${os.freemem()/1024/1024/1024}`);
console.log(`Total Memory : ${os.totalmem()/1024/1024/1024}`);
console.log(`${os.tmpdir()}`);
console.log(`Type of OS system is having : ${os.type()}`);
console.log(`System uptime in numbers : ${os.uptime()}`);
console.log(`Operating system platform for which the Node.js binary was compiled : ${os.platform()}`)
console.log(`System Activity calculated by the operating system :  ${os.loadavg()}`)