var express = require("express");
var bodyParser = require("body-parser");
const http = require("http");

// consumers
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const MessagingResponse = require("twilio").twiml.MessagingResponse;
// var arrayTodo = [];

var twilio = require("twilio");
const twiml = new MessagingResponse();
app.post("/status", (req, res) => {
  console.log(req.action);

  twiml.message("Good day and hello " + req.body.FromCountry + " !");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+14155551212",
    from: "+15017122661"
  })
  .then(call => process.stdout.write(call.sid));

// app.post("/listBot", (req, res) => {
//   const inboundString = req.body.Body;
//   console.log("New event occurred, here are the details: " + inboundString);
//   if (inboundString.startsWith("add")) {
//     var addItem = inboundString.split(" ");
//     arrayTodo.push(addItem[1]);
//     twiml.message(res.send.arrayTodo);
//     res.writeHead(200, { "Content-Type": "text/xml" });
//     res.end(twiml.toString());
//   }
//   if (inboundString.startsWith("list")) {
//     twiml.message(res.send.arrayTodo);
//     res.writeHead(200, { "Content-Type": "text/xml" });
//     res.end(twiml.toString());
//     console.log(arrayTodo);
//   }

//   if (inboundString.startsWith("remove")) {
//     var removeItem = inboundString.split(" ");

//     var removeItem = arrayTodo.remove();
//   }

//else console.log("please use the word add before your list item.");
// });

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});

// var accountSid = "ACffc9090071e4365f235068bb1c060c49"; // Your Account SID from www.twilio.com/console
// var authToken = "da1a55d55067112e975fc45a100e2cc0"; // Your Auth Token from www.twilio.com/console

// var twilio = require("twilio");
// var client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: "Greetings! The current time is: XXXXXX FV29A18N691ZEHR",
//     to: "+12092104311", // Text this number
//     from: "+15129820831" // From a valid Twilio number
//   })
//   .then(message => console.log(message.sid));

// var server = app.listen(8081, function() {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log("Example app listening at http://%s:%s", host, port);
// });
