const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/health",
  method: "GET"
};

const req = http.request(options, (res) => {
  if (res.statusCode !== 200) {
    console.error("Health check failed");
    process.exit(1);
  }

  process.exit(0);
});

req.on("error", () => {
  process.exit(1);
});

req.end();

console.log("App test passed");
process.exit(0);
