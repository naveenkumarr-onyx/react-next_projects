"strict mode";
const http = require("http");

const args = process.argv; //+
console.log(args);

http
  .createServer((req, res) => {
    res.write("Hello");
    res.end();
    console.log("Server is running on port 3000");
  })
  .listen(5000);
