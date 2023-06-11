import express from "express";
const app = express();

const port = process.env.PORT || 5000;
import { connectdb } from "./src/db/conn.js";

import userModel from "./src/models/registers.js";

//serve static files
app.use(express.static("public"));

// json parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", "views");

//index page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.Confirmpassword;

    if (password === cpassword) {
      const studentRegister = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        Confirmpassword: req.body.Confirmpassword,
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        gender: req.body.gender,
        state: req.body.state,
      });

      const saved = await studentRegister.save();

      console.log("Student registered successfully");
      res.status(201).render("index");
    } else {
      res.send("Passwords do not match");
    }
  } catch (error) {
    res.send(error);
  }
});

// start server
const start = () => {
  connectdb();
  console.log("connected to DB");
  app.listen(port, () => {
    console.log(`server running on port: ${port}`);
  });
};
start();
