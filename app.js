const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require("path");

// app.use(passport.initialize());
// require('./config/passport')(passport);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

    app.use(passport.initialize());
    require('./config/passport')(passport);

// users.js
// You may want to start commenting in information about your routes so that you can find the appropriate ones quickly.

// app.get("/", (req, res) => {
//     const user = new User({
//         handle: "jim",
//         email: "jim@jim.jim",
//         password: "jim123123"
//     })
//     user.save()
//     res.send("Hello World its me");

  

// });
app.get("/", (req, res) => res.send("Hello World!!"));


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
debugger;
app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)});
