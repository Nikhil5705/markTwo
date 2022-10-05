var readlinesync = require('readline-sync');
var userName = readlinesync.question("What is your name?");
console.log("Hello! " + userName + ", Lets see How well do you know Ironman?");

var score = 0;
function play(question, answer) {
  var userAnswer = readlinesync.question("\n" + question + "\n");
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes! Right Answer.");
    score = score + 1;
  }
  else {
    console.log("Wrong Answer!!!");
  }
  console.log("You scored :", score);

}
var ques = [
  {
    question: "1. What is Iron Man's alter ego?" + "\n a: Tony Stark \n b: Tony Marker \n c: Peter Parker \n d: Tony Hart",
    answer: "a"
  },
  {
    question: "2. What actor lends his trademark swagger to the Iron Man role?" + "\n a: Llan McKellen \n b: Robert Downey the third \n c: Robert Downey Senior \n d: Robert Downey Junior",
    answer: "d"
  }, {
    question: "3. What is the chemical symbol for Iron?" + " \n a: Ir \n b: Ag \n c: Au \n d: Fe",
    answer: "d"
  },
  {
    question: "4. What is Tony Stark's business empire called?" + "\n a: Starkcom \n b: Stark Corp \n c: Stark Industries \n d: Stark Limited",
    answer: "c"
  },
  {
    question: "5. What Is The Name Of Tony Stark’s Dad?" + " \n a: Roman Stark \n b: Howard Stark \n c: Peter Stark \n d: Gimmy Stark",
    answer: "b"
  },
  {
    question: "6. When Did Iron Man First Debut In The Comics?"
      + " \n a: 1983 \n b: 1966 \n c: 1963 \n d: 1947",
    answer: "c"
  },
  {
    question: "7. What Is Tony’s Middle Name?" +
      " \n a: Edward \n b: Stark \n c: Anthony \n d: Mark",
    answer: "a"
  },
  {
    question: "8. What Color Was Iron Man’s Original Armor In His Comic Book Debut?" + "\n a: Red \n b: Cherry \n c: Yellow \n d: Grey",
    answer: "d"
  }]
for (var i = 0; i < ques.length; i++) {
  play(ques[i].question, ques[i].answer);
}
console.log("");
console.log('Your total score is : ', score);
console.log("");

var totalScore = [
  {
    name: "Tony",
    score: 9,
  },
  {
    name: 'John',
    score: 8
  },
  {
    name: 'Mark',
    score: 7
  }];
console.log("Current highscorers are : ");
console.log("");
for (var i = 0; i < totalScore.length; i++) {
  var Highscore = totalScore[i];
  console.log(Highscore.name + ": " + Highscore.score);
}
console.log("");
console.log("Please contact to Admin if you beat the high score.");