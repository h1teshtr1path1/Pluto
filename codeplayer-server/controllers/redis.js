const RedisSMQ = require("rsmq");

exports.push = (queueName, message) => {
    const rsmq = new RedisSMQ( {host: "http://127.0.0.1", port: "6379", ns: "rsmq"} );
    rsmq.sendMessage({ qname: queueName, message: message}, function (err, resp) {
        rsmq.quit();
    });
}