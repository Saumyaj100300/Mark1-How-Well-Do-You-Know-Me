var readLineSync=require('readline-sync');
var chalk = require('chalk');
var username=readLineSync.question(chalk.green("Hey There!\nPlease enter your name: "));
console.log(chalk.cyanBright("Welcome "+username+" , Let's see how well you know me...\nEnter a/ b/ c  to answer and for each correct answer you will get a point."));
console.log(chalk.grey("__________________________________________"));
var score=0;


function play(question, answer){
  var userAnser=readLineSync.question(chalk.green(question));
   if(userAnser.toUpperCase()==answer.toUpperCase()){
     console.log(chalk.yellowBright("You are right. You get a point"));
     score++;
   }
   else{
     console.log(chalk.redBright.bold("Oops!You are wrong."));
   }
   console.log(chalk.bgBlack("Your score is "+score));
   console.log(chalk.grey("________________"));

}

var questions=[ {
  question:"Where do I live? \na. Lucknow \nb. Agra \nc. Delhi \n",
  answer:"a",
},{
  question:"Who is my favourite cartoon character? \na. Doremon \nb. Shinchan \nc. Ninja Hatori \n",
  answer:"a",
},{
  question:"What is my favourite sport? \na. Cricket \nb. Badminton \nc. Swimming\n",
  answer:"b",
},{
  question:"What do I like watching the most? \na. Hollywood \nb. Bollywood \nc. Korean Drama\n",
  answer:"b",
},{
  question:"Where do I study? \na. Manipal University Jaipur \nb. IIT Delhi \nc. BML Munjal University\n",
  answer:"a",
},{
  question:"Which is my favourite web series? \na. Vampire Diaries \nb. The Office \nc. Friends\n",
  answer:"c"
}
];


for(var i=0;i<questions.length;i++){
  var currques=questions[i];
  play(currques.question,currques.answer);
}

if(score>4) {
console.log(chalk.hex('#DEADED')("Congratulations you have come this far !! You are surely know me very well :)"))
}
else  {
  console.log(chalk.yellowBright("Sorry you don't know me well :("))
}