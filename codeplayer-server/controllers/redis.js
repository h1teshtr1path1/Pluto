var redis  = require("redis"),
    client = redis.createClient(6379, "http:/127.0.0.1");

client.on("error", function (err) {
  console.log("Redis error encountered", err);
});

client.on("end", function() {
  console.log("Redis connection closed");
});