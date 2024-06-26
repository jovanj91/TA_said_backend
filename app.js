require("dotenv").config()
const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require("path");
const fs = require('fs');
const https = require('https');

var app = express();
const port = 443;
const router = require('./routes')
const corsConfig= {
  credentials:true,
}
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/assets',express.static(path.join(__dirname, "assets")));

app.use(router);

const options = {
  key: fs.readFileSync(path.join('/etc/letsencrypt/live/notolali.xyz/fullchain.pem')),
  cert: fs.readFileSync(path.join('/etc/letsencrypt/live/notolali.xyz/fullchain.pem'))
};


https.createServer(options, app).listen(process.env.PORT || port, () => {
  console.log("Server running on port", process.env.PORT || port);
});