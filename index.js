const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
var port = process.env.PORT || 3000;
const waMe = require("wa-me-generator");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(bodyParser.json());
//session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// app.use(express.json());
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("main", { sendList: req.session.sendlist });
});

app.post("/", urlencodedParser, (req, res) => {
  var time = new Date().getHours() + 5.5;

  var Greeting =
    "Good " + (time < 12 ? "Morning" : time < 16 ? "Afternoon" : "Evening");

  if (req.body.action === "Send Now") {
    res.redirect(
      waMe.createFromNumberWithMessage(
        "+91" + req.body.phonenumber,
        "Hi " +
          req.body.name +
          ", " +
          Greeting +
          ". I'm " +
          req.body.agents +
          " from LeapScholar. \nI hope you are doing well. \n\n" +
          req.body.link +
          "\n\nPlease join the counselling session at " +
          req.body.time +
          " with your registered mail ID or registered phone number. You will receive an OTP with your own registration details. Let me know if you face any difficulties in joining. You can kindly message us and we will help you with it. Thank you."
      )
    );
  }
  // if(req.body.action === "DNP"){
  //   res.redirect(waMe.createFromNumberWithMessage("+91"+ req.body.phonenumber,
  //   "Greetings! from Leap Scholar support team   \n\n" + req.body.link +
  //   " \n\nAbove is the link for your free session with our expert counsellor where you can clarify all your doubts related to studying abroad\n\nYour session is scheduled for today at "
  //   + req.body.time + "\n\n\n*I'm unable to reach you over calls, Your Session will start soon.*\n*Will you be able to join? Please confirm.*"))
  //   }

  // if(req.body.action === "Attending"){
  //   if(req.session.sendlist){
  //     ++req.session.index;
  //   }
  //   else {
  //     req.session.index = 0;
  //     req.session.sendlist = [];
  //   }
  //   req.session.sendlist[req.session.index] = {time: req.body.time , link: req.body.link , phonenumber: req.body.phonenumber}

  //   res.render("main" , {sendList: req.session.sendlist});
  // }
  // if(req.body.action === "Send"){
  //   req.session.sendList = removeItem(req.body.phonenumber , req.session.sendlist);
  //   req.session.index--;
  //   res.redirect(waMe.createFromNumberWithMessage("+91"+req.body.phonenumber,
  // "Greetings! from Leap Scholar support team   \n\n" + req.body.link +
  // " \n\nAbove is the link for your free session with our expert counsellor where you can clarify all your doubts related to studying abroad\n\nYour session is scheduled for today at " + req.body.time + "\n\n*It is starting soon! Join now.*"));
  // }
  // if(req.body.action === "Delete"){
  //   req.session.sendList =  removeItem(req.body.phonenumber , req.session.sendlist);
  //   req.session.index--;
  //   res.render("main" , {sendList: req.session.sendlist});
  // }
});

// function removeItem(phonenumber , List) {
//     var i = 0;
//     while(i < List.length){
//       if(List[i].phonenumber === phonenumber){
//         List.splice(i , 1);
//         console.log("deleted" + phonenumber);
//       } else {
//         ++i;
//       }
//     }
//     return List;
// }

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
