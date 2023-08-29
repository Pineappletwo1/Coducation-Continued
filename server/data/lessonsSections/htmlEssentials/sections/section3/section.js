module.exports = [
  {
    ref: "unit1",
    title: "Unit 1: Memory Matching Game",
    description:
      "Build a memory matching game to test and improve players' memory.",
    lessons: require("./units/unit1"),
  },
  {
    ref: "unit2",
    title: "Unit 2: Snake Game",
    description:
      "Create a classic snake game where the player controls a growing snake.",
    lessons: require("./units/unit2"),
  },
  {
    ref: "unit3",
    title: "Unit 3: Pong Game",
    description: "Develop a simple Pong game with paddles and a bouncing ball.",
    lessons: require("./units/unit3"),
  },
  {
    ref: "unit4",
    title: "Unit 4: Whack-a-Mole Game",
    description: "Create a fun Whack-a-Mole game to test players' reflexes.",
    lessons: require("./units/unit4"),
  },
];
