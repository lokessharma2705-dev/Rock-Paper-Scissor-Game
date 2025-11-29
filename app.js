let circles=document.querySelectorAll(".c");
let userChoice=document.querySelector(".tap");
let s1=document.querySelector("#s1");
let s2=document.querySelector("#s2");
let tap=document.querySelector(".tap");

let userScore=0;
let compScore=0;


let compOutput=0;

const generateOutput=()=>{
let arr=["rock","paper","scisor"];
const i=Math.floor(Math.random()*3);
 compOutput=arr[i];
console.log(compOutput);

}
let x=-1;
let userInput;
circles.forEach((circle)=>{
    circle.addEventListener("click",()=>{
          userInput=circle.getAttribute("id");
          console.log(userInput);
          generateOutput();
          win();
    })
});

const win=()=>{
    if(((userInput==="Rock")&&(compOutput==="rock"))||((userInput==="Paper")&&(compOutput==="paper"))||((userInput==="Scisor")&&(compOutput==="scisor"))){
    console.log("The game is draw");
    tap.innerText=("The game is draw");
}
else{
         if((userInput==="Rock")&&(compOutput==="paper")){
            console.log("user win");
            userScore++;
            s1.innerText=`${userScore}`;
            tap.innerText="The User wins";
         }
         if((userInput==="Rock")&&(compOutput==="scisor")){
            console.log("comp win");
            compScore++;
            s2.innerText=`${compScore}`;
            tap.innerText="The Computer wins";
         }
         if((userInput==="Paper")&&(compOutput==="rock")){
            console.log("user win");
            userScore++;
            s1.innerText=`${userScore}`;
            tap.innerText="The User wins";
         }
         if((userInput==="Paper")&&(compOutput==="scisor")){
            console.log("comp win");
            compScore++;
            s2.innerText=`${compScore}`;
            tap.innerText="The Computer wins";
         }
         if((userInput==="Scisor")&&(compOutput==="paper")){
            console.log("user win");
            userScore++;
            s1.innerText=`${userScore}`;
            tap.innerText="The User wins";
         }
         if((userInput==="Scisor")&&(compOutput==="rock")){
            console.log("comp win");
            compScore++;
            s2.innerText=`${compScore}`;
            tap.innerText="The Computer wins";
         }
}
}




