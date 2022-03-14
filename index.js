const express = require('express');
const app = express();
const path = require("path");
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.set("views", path.join(__dirname, "/views"));
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000;
const waMe = require("wa-me-generator");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));


app.get("/", (req, res) => {
    res.render("main");
  });

  app.post("/link" , urlencodedParser , (req , res) => {
    res.redirect(waMe.createFromNumberWithMessage("+91"+req.body.phonenumber, 
    "Greetings! from Leap Scholar support team   \n" + req.body.link + 
    "  \n\nYour session is scheduled for today at " + req.body.time));
  });

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);    
  });

