var os = require('os');
console.log("Platform: " + os.platform());
console.log("OS: " + os.type());
console.log("OS Ver: " + os.release());
console.log("Architecture: " + os.arch());
console.log("CPU count: " + os.cpus().length);
console.log("Free Memory: " + os.freemem());
console.log("Total Memory: " + os.totalmem());
