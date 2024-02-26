let userScore = 0;
let compScore = 0;
let choices = document.getElementsByClassName("choices");
console.log(choices); 

let user_scr=document.getElementById("user_score"); 
let comp_scr=document.getElementById("comp-score");  
let verdict=document.getElementById("msg");
console.log(verdict.innerText);


const CompTurn =()=>{ 
  const arr=["rock","paper","scissors"];
  const comp_choice=Math.random()*3; 
  const floor_value=Math.floor(comp_choice);
  return arr[floor_value];
}

const computer =(userchoice)=>{ 
//console.log(userchoice);
const comp_ans=CompTurn(userchoice);
return comp_ans;
}

for (const choice of choices) {
  choice.addEventListener("click", () => {
    const divid = choice.getAttribute("id");
     const fromComp= computer(divid);
     console.log("Mine:::",divid);
     console.log("Computer :::",fromComp);
    //  console.log(divid);
    //  console.log(fromComp);
     if(divid==fromComp){ 
      console.log("Match tie Try one more time");
     }
     else if(divid=="paper" && fromComp=="scissors"){ 
      compScore++; 
      console.log("Comp Score is",compScore);
      comp_scr.innerText=compScore;
      if(compScore==5){ 
        verdict.innerText= "You loose the game"; 
        user_scr.innerText=0; 
        comp_scr.innerText=0;
      }
     }
     else if(divid=="rock" && fromComp=="scissors"){ 
      userScore++;
      console.log("UserScore is",userScore); 
      user_scr.innerHTML=userScore;
      if(userScore==5){ 
      console.log("You Won the game ");
      verdict.innerText= "You Won the game !!"; 
      user_scr.innerText=0; 
      comp_scr.innerText=0;
      }
     }
     else if(divid=="scissors" && fromComp=="rock"){ 
      compScore++;
      console.log("Comp Score is",compScore);
      comp_scr.innerHTML=compScore;
      if(compScore==5){  
        verdict.innerText= 'You LOOSE the game'; 
        user_scr.innerText=0; 
        comp_scr.innerText=0;
      }
     }
  });
}
