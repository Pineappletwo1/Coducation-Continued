console.log("Heroku work!");

const express = require("express");
const session = require("express-session");
const filestore = require("session-file-store")(session);
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const emailContent = require("./data/email");
const cors = require("cors");
const lessons = require("./data/lessons");
const User = require("./models/users");
mongoose.set("strictQuery", false);
const app = express();

// Serve static files from the 'public' folder

app.use(cookieParser());
app.use(cors());
dotenv.config();

// Parse JSON data from request body
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Redirect users to 'index.html' when accessing the root URL

app.get("/autoRedirect", async (req, res) => {
  const user = await User.findOne({
    email: req.cookies["Email"],
    sessionId: req.cookies["sessionId"],
    activated: true,
  });
  if (user && Date.now() < user.sessionExpiration) {
    res.send({ message: "/dashboard" });
  }
});

app.get("/users/data", async (req, res) => {
  const user = await User.findOne({
    email: req.cookies["Email"],
    sessionId: req.cookies["sessionId"],
    activated: true,
  });
  if (user) {
    res.send({ message: user });
  }
});

app.put("/users/update", async (req, res) => {
  const user = await User.findOne({
    email: req.cookies["Email"],
    sessionId: req.cookies["sessionId"],
    activated: true,
  });
  const data = req.body;
  user.username = data.username;
  user.password = data.password;
  user.description = data.description;
  user.image = data.image;
  await user.save();
});

// Start the server on port 3000 (or any other desired port)
const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODBKEY);
    app.listen(PORT, () => {
      console.log("Mongoose is running!");
      console.log(`Application is running at localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

const code = () => {
  let password = "";
  for (let i = 0; i < 6; i++) {
    password += Math.floor(Math.random() * 10) + 1;
  }
  return password;
};

// Signup endpoint
app.post("/users/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const { email } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      console.log("Already found");
      res.redirect("/nicetry");
    } else {
      console.log(req.body, "the body");
      user.save();
      user.activated = false;
      user.code = code();
      user.signupDate = Date.now();
      user.image =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      console.log(user.code, "code");
      res.cookie("Email", user.email);
      res.redirect("/confirmation");
      try {
        let emailData = {
          from: process.env.EMAIL,
          to: req.body.email,
          subject: "Coducation Signup",
          html: emailContent.partOne + user.id + emailContent.partTwo,
        };
        sendEmail(emailData);
      } catch (error) {
        console.log(error);
      }
    }
    // Update response to send JSON
  } catch (e) {
    res.status(500).send({ error: "Failed to signup" }); // Update response to send JSON
  }
});

// Login endpoint
app.post("/users/login", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = await User.findOne({ username, password, email });
    if (user && user.activated === true) {
      user.sessionId = code() + code();
      user.sessionExpiration = Date.now() + 60000;
      res.cookie("sessionId", user.sessionId, {
        maxAge: 36000000000,
        httpOnly: true,
      });
      res.cookie("Email", user.email);
      try {
        await user.save();
        console.log(user.sessionId, user.sessionExpiration);
      } catch (e) {
        console.log("Idk at this point, sucks to be you");
      }
      res.send({ message: "Login Successful!" });
      user.lastLogin = Date.now();
      await user.save();
      // Update response to send JSON
    } else if (user.activated === false) {
      res.status(401).send({ error: "Your account is not confirmed." });
    } else {
      res.status(401).send({ error: "Invalid credentials" }); // Update response to send JSON
    }
  } catch (e) {
    res.status(500).send({ error: "Failed to login" }); // Update response to send JSON
  }
});

app.post("/confirmation/users", async (req, res) => {
  const { code } = req.body;
  const email = req.cookies["Email"];
  if (!req.cookies["Email"]) {
    res.send({ message: "Your cookie for the email has expired." });
  }
  const user = await User.findOne({ code, email });
  if (user) {
    res.redirect("/dashboard.html");
    user.activated = true;
    user.save();
  } else {
    res.redirect("/fail");
  }
});

app.get("/users/confirm/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    console.log(user.email);
    if (user.activated == false) {
      user.activated = true;
      user.sessionId = code() + code();
      await user.save();
      await res.cookie("sessionId", user.sessionId, {
        maxAge: 3600000,
        httpOnly: true,
      });
      await res.cookie("Email", user.email);
      res.redirect("/dashboard");
    } else {
      res.redirect("/dashboard");
    }
  } catch (e) {
    res.redirect("/");
  }
});

const test = async () => {
  const result = await User.find();
  result.forEach(async (user) => {
    console.log(user.email, user.activated, user.id);
  });
};

start();
test();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASSWORD,
  },
});

function sendEmail(mailOptions) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

//delete users who have not confirmed in 24 hours
setInterval(async () => {
  const person = await User.findOne({ activated: false });
  if (person) {
    console.log(
      `${
        person.email
      } is not yet activated and it's been like that for over ${Math.floor(
        (Date.now() - person.signupDate) / 3600000
      )} hours`
    );
    if (Date.now() - person.signupDate >= 24 * 60 * 60 * 1000) {
      console.log("You must die!!!");
      await User.deleteOne({ email: person.email });
    }
  }
}, 3600000);

app.get("/kick", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.cookies["Email"],
      activated: true,
    });
    if (!user) {
      res.send({ message: "kick" });
    }
    if (user) {
      if (user.sessionId === req.cookies["sessionId"]) {
        if (user.sessionExpiration < Date.now()) {
          res.send({ message: "expired" });
        } else {
          res.send({ message: "clear" });
          user.sessionExpiration = Date.now() + 300000;
          await user.save();
        }
      } else {
        res.send({ message: "kick" });
      }
    }
  } catch (e) {
    console.log(e);
    res.send({ message: "kick" });
  }
});

app.get("/testing", (req, res) => {
  console.log("called test");
});

app.post("/lessons", (req, res) => {
  switch (req.body.info) {
    case "lessonTitles":
      {
        res.send({
          lessons: Object.keys(lessons).map((key) => ({
            title: lessons[key].title,
            description: lessons[key].shortDescription,
            img: lessons[key].image,
            ref: lessons[key].ref,
          })),
        });
      }
      break; // Don't forget to include a break statement here
    case "courseInfo":
      {
        try {
          res.send({
            description: lessons[req.body.course].intro.description,
            title: lessons[req.body.course].title,
            image: lessons[req.body.course].intro.imageSrc,
            shortDescription: lessons[req.body.course].shortDescription,
            about: lessons[req.body.course].intro.about,
            sections: Object.keys(lessons[req.body.course].intro.sections).map(
              (key) => ({
                title: lessons[req.body.course].intro.sections[key].title,
                description:
                  lessons[req.body.course].intro.sections[key].description,
                ref: lessons[req.body.course].intro.sections[key].ref,
                img: lessons[req.body.course].intro.sections[key].image,
              })
            ),
          });
        } catch (e) {
          res.send({ error: "something went wrong" });
        }
      }
      break;
    case "sectionInfo":
      {
        try {
          const section =
            lessons[req.body.courseName].intro.sections[req.body.section];
          res.send({
            info: {
              ...section,
              units: section.units.map((unit) => ({
                title: unit.title,
                description: unit.description,
                ref: unit.ref,
              })),
            },
          });
        } catch (e) {
          res.send({ error: "something went wrong" });
        }
      }
      break;
    case "unitInfo":
      {
        try {
          const unit = lessons[req.body.courseName].intro.sections[
            req.body.section
          ].units.find((unit) => unit.ref == req.body.unitName);
          res.send({
            info: {
              ...unit,
              lessons: unit.lessons.map((lesson) => ({
                title: lesson.title,
                description: lesson.description,
                ref: lesson.ref,
              })),
            },
          });
        } catch (e) {
          res.send({
            error: "something went wrong",
          });
        }
      }
      break;
    case "lessonInfo":
      {
        try {
          const lesson = lessons[req.body.courseName].intro.sections[
            req.body.section
          ].units
            .find((unit) => unit.ref == req.body.unitName)
            .lessons.find((lesson) => lesson.ref == req.body.lessonName);
          res.send({
            lesson,
          });
        } catch (e) {
          res.send({
            error: "something went wrong",
          });
        }
      }
      break;
    default:
      res.status(400).send("Invalid request");
      break;
  }
});

app.post("/quiz", (req, res) => {
  const { courseName, sectionName, unitName, lessonName } = req.body;
  const course = lessons.filter((lesson) => lesson.ref == courseName)[0];
  const section = course.intro.sections.filter(
    (section) => section.ref == sectionName
  )[0];
  const unit = section.units.filter((unit) => unit.ref == unitName)[0];
  const lesson = unit.lessons.filter((lesson) => lesson.ref == lessonName)[0];
  res.send({ questions: lesson.questions });
});

app.get("/users/beginner", async (req, res) => {
  const user = await User.findOne({
    email: req.cookies["Email"],
    sessionId: req.cookies["sessionId"],
    activated: true,
  });
  if (user) {
    user.beginner = false;
    await user.save();
  }
});

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/quiz/:courseName/:sectionName/:unitName/:lessonName", (req, res) => {
  const { courseName, sectionName, unitName, lessonName } = req.params;
  try {
    const lesson = lessons[courseName].intro.sections[sectionName].units
      .find((unit) => unit.ref == unitName)
      .lessons.find((lesson) => lesson.ref == lessonName);
    const { questions } = lesson;
    let talley = 0;
    questions.forEach((question) => {
      if (question.options[question.solution] === req.body[question.question]) {
        talley++;
      }
    });
    res.send({ talley });
  } catch (e) {
    res.send({
      error: "something went wrong",
    });
  }
});
