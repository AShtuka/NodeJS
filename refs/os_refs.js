const os = require('os');

// os - operation system

console.log(os.platform()) // output current operation system
console.log(os.arch()) // output current system archeteckture 32 or 64 bit
console.log(os.cpus()) // output current system info
console.log(os.freemem()) // output count of free memory
console.log(os.totalmem()) // output count of total memory
console.log(os.homedir()) // output root dir
console.log(os.uptime()) // output how many time our system work in ms