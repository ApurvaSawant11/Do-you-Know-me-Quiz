const readlineSync = require("readline-sync");
const chalk=require("chalk");
const red = chalk.bold.red;
const green = chalk.green;
const cyan = chalk.bold.cyanBright;

const userName=readlineSync.question("What is your name? ");

function welcome()
{
  console.log(green("\nWelcome " + userName + " !!"));

  console.log("\n-----------------------------------------------------------")
  console.log("\t\t\t\tHow well do you know me???")
  console.log("-----------------------------------------------------------")
  console.log("\nLet's start the quiz...")
}

var score=0;

var highScores=[
  {
    name:"Apurva",
    score:10
  },
  {
    name:"Shraddha",
    score:9
  },
  {
    name:"Asha",
    score:4
  },
  {
    name:"Shiv",
    score:3
  },
  {
    name:"Dhruv",
    score:2
  }
];

var qna=[
  {question:"Where does Apurva live?",
  answer:"a", a:"Pune",b:"Bangalore",c:"Chennai"},
  {question:"Which chocolate does Apurva love the most?",
  answer:"c", a:"Dairy Milk", b:"5 Star", c:"Bournville"},
  {question:"What is Apurva's favorite ice cream flavor?",
  answer:"a", a:"Pista", b:"Chocolate", c:"Strawberry"},
  {question:"How old is Apurva?",
  answer:"b", a:"24", b:"22", c:"21"},
  {question:"Where does Apurva work?",
  answer:"b", a:"Cognizant", b:"TCS", c:"Infosys"},
  {question:"What is Apurva's dream job?",
  answer:"a", a:"Web Developer", b:"Digital Marketer", c:"Freelancer"},
  {question:"What is Apurva's favorite movie?",
  answer:"c", a:"Rowdy Rathore", b:"Baby", c:"3 Idiots"},
  {question:"Who is my Favorite Superhero?",
  answer:"b", a:"Iron Man", b:"Thor", c:"Captain America"},
  {question:"What is Apurva's favorite TV show?",
  answer:"a", a:"Friends", b:"How I Met Your Mother", c:"Lucifer"},
  {question:"What is Apurva's favorite color?",
  answer:"c", a:"Yellow", b:"Red", c:"Blue"}
];

function play(question,answer,a,b,c){
  
  console.log("___________________________________________________________")
  var userAnswer = readlineSync.question
  ("\n" + cyan(question) + "\n\na. " + a + "\nb. " + b + "\nc. " + c + "\n\nYour answer: ");
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    score++;
    console.log("\nYou are" + green(" right !!"));
    console.log("Your score is: ", score);
    
  }
  else
  {
    console.log("\nYou are" + red(" wrong !!"));
    console.log("Your score is: ", score);
  }
}

function finalScores(userScore)
{
  console.log("\n============================================================")
  console.log("\n                 Your final score is: " + userScore);
  for(var j=0;j<highScores.length;j++)
  {
    if(userScore>highScores[j].score)
    {
      var min=highScores[0].score;
      var lowestElement=0;
      for(var i=0;i<highScores.length;i++)
      {
          if(highScores[i].score<min)
          {
            min=highScores[i].score;
            lowestElement=i
          }
      }
      console.log("\n************************************************************")
      console.log(green("          Yayyyy!!! You made it to the Top 5"))
      console.log("************************************************************")
      highScores[lowestElement].name=userName;
      highScores[lowestElement].score=userScore;
      break;
    }
  }
}

function showHighestScores()
{
  console.log("\n============================================================")
  console.log(cyan("\nCheck out the Top 5 Scores: "));
  for(var i = 0;i<highScores.length;i++)
  {
    console.log("\nName : " + highScores[i].name + "\nScore : " + highScores[i].score);
  }
}

function askQuestion(currentArray){
  for(var i=0;i<currentArray.length;i++)
  {
    play(currentArray[i].question,currentArray[i].answer,currentArray[i].a,currentArray[i].b,currentArray[i].c)
  }
}

welcome();
askQuestion(qna);
finalScores(score);
showHighestScores();
