var fs = require("fs");
fs.mkdirSync("day_5");
fs.writeFileSync("day_5/hello.txt","Hello! Welcome to Devnest");
fs.appendFileSync("day_5/hello.txt","\n This is a Dev Community");
const data = fs.readFileSync("day_5/hello.txt", "utf-8");
console.log(data);
fs.renameSync("day_5/hello.txt", "day_5/hi.txt");
