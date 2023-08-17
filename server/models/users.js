const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  activated: {
    type: Boolean,
  },
  code: {
    type: String,
  },
  signupDate: {
    type: Number,
  },
  lastLogin: {
    type: Number,
  },
  javascriptProgress: {
    type: Object,
    default: {
      jsBasics: {
        lesson1progress: 0,
        lesson2progress: 0,
        lesson3progress: 0,
        lesson4progress: 0,
        lesson5progress: 0,
        lesson6progress: 0,
        lesson7progress: 0,
        lesson8progress: 0,
        lesson9progress: 0,
        lesson10progress: 0,
      },
      jsIntermediate: {
        lesson1progress: 0,
        lesson2progress: 0,
        lesson3progress: 0,
        lesson4progress: 0,
        lesson5progress: 0,
        lesson6progress: 0,
        lesson7progress: 0,
        lesson8progress: 0,
        lesson9progress: 0,
        lesson10progress: 0,
      },
      jsAdvanced: {
        lesson1progress: 0,
        lesson2progress: 0,
        lesson3progress: 0,
        lesson4progress: 0,
        lesson5progress: 0,
        lesson6progress: 0,
        lesson7progress: 0,
        lesson8progress: 0,
        lesson9progress: 0,
        lesson10progress: 0,
      },
    },
  },
  sessionId: {
    type: String,
  },
  sessionExpiration: {
    type: Number,
  },
  expiredSessionId: {
    type: Number,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  description: {
    type: String,
    default:
      'I was once bored watching YouTube videos when learning how to code, thinking to myself: "There has to be an easier way!" And once I discovered Coducation it all changed. Now I can create full-stack applications and I feel so powerful!',
  },
  beginner: {
    type: Boolean,
    default: true,
  },
  currentCourses: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
