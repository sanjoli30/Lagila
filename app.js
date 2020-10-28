let score = [0,1];
let turn1 = 0 ; // for first match
let turn2 = 0 ;  // for second match
var team1 = {
    // Team 1 details
    name: "JAPAN",
    runs:[],
    score:0
};
var team2 = {
    // Team 2 details
    name: "USA",
    runs:[],
    score:0
};
var team3 = {
    // Team 3 details
    name: "ITALY",
    runs:[],
    score:0
};
var team4 = {
    // Team 4 details
    name: "GERMANY",
    runs:[],
    score:0
};

window.onload = ()=>{
    selectTurn(); // Decide who will shoot first
    updateButtonText(); // Update the text of the button based on the team
    updateScore(); // updating the initial scoreboard
    updateName(); // update the team names at the start
};

selectTurn =()=>{
    console.log("select turn");
    turn1 = Math.round(Math.random())+1;
    turn2 = Math.round(Math.random())+3;
};
var x = 0;
updateButtonText = ()=>{
    let button1 = document.getElementById('shoot1-button');
    let button2 = document.getElementById('shoot2-button');

    var scores = document.getElementsByClassName('score');
    var winner1;
    var winner2;
    
    if(x < 11) {  // first match
        button1.textContent = `SHOOT ${turn1===1 ? team1.name : team2.name}`;

        var result1 = document.getElementById('result1');
        result1.style.visibility="";

        // check whether the game is over
        if(team1.runs.length == 5 && team2.runs.length == 5){
            button1.remove();
            scores[0].style.visibility="hidden";
            //check if the match is draw
            result1.textContent = team1.score === team2.score? `It's a draw`:`${team1.score > team2.score? team1.name:team2.name} Wins`;
            if(team1.score > team2.score){
                winner1 = team1;
            } else {
                winner1 = team2;
            }
        }
        else{
        // check strike is over
            turn1 = team1.runs.length == 5?2:team2.runs.length == 5?1:turn1;  
        }
    }
    else { // second match
        button2.textContent = `SHOOT ${turn2===3 ? team3.name : team4.name}`;
    
        var result2 = document.getElementById('result2');
        result2.style.visibility="";

        if(team3.runs.length == 5 && team4.runs.length == 5){
            button2.remove();
            scores[1].style.visibility="hidden";
            //check if the match is draw
            result2.textContent = team3.score === team4.score? `It's a draw`:`${team3.score > team4.score? team3.name:team4.name}\ Wins`;
            if(team3.score > team4.score){
                winner2 = team3;
            } else {
                winner2 = team4;
            }
        }
        else{
        // check strike is over
            turn2 = team3.runs.length == 5?4:team4.runs.length == 5?3:turn2;  
        }
    }
};

updateScore = ()=> {
   // console.log(score);
    document.getElementById('team1-score').textContent = team1.score;
    document.getElementById('team2-score').textContent = team2.score;
    document.getElementById('team3-score').textContent = team3.score;
    document.getElementById('team4-score').textContent = team4.score;
    updateRuns();
};

updateName = ()=>{
    document.getElementById('team1-name').textContent = team1.name;
    document.getElementById('team2-name').textContent = team2.name;
    document.getElementById('team3-name').textContent = team3.name;
    document.getElementById('team4-name').textContent = team4.name;
};

var shootButtonClick = ()=>{
    var runs = score[Math.round(Math.random())];
    x++;

    if(x < 11) {  // first match
        // check which team shots first
        if(turn1 == 1) {
            team1.runs.push(runs);
            team1.score = calculateScore(team1.runs);
        // console.log(team1.score);
        }
        else {
            team2.runs.push(runs);
            team2.score = calculateScore(team2.runs);
        //   console.log(team2.score);
        }
    }
    else{  // second match
            // check which team shots first
        if(turn2 == 3) {
            team3.runs.push(runs);
            team3.score = calculateScore(team3.runs);
        // console.log(team1.score);
        }
        else {
            team4.runs.push(runs);
            team4.score = calculateScore(team4.runs);
        //   console.log(team2.score);
        }
    }

    updateButtonText();
    updateScore();
};

var calculateScore = (runs)=>{
    return runs.map(run =>{
        return run;
    }).reduce((total,runs)=>total + runs);
}

updateRuns = ()=>{
    var teamOneShotsElement = document.getElementById('team1-shots').children;
    var teamTwoShotsElement =  document.getElementById('team2-shots').children;
    var teamThreeShotsElement = document.getElementById('team3-shots').children;
    var teamFourShotsElement =  document.getElementById('team4-shots').children;
    
    team1.runs.forEach((run,index)=>{
        run == 0 ? teamOneShotsElement[index].style.backgroundColor = "red" : teamOneShotsElement[index].style.backgroundColor = "green";
    });
    
    team2.runs.forEach((run,index)=>{
        run == 0 ? teamTwoShotsElement[index].style.backgroundColor = "red" : teamTwoShotsElement[index].style.backgroundColor = "green";
    }); 
    
    team3.runs.forEach((run,index)=>{
        run == 0 ? teamThreeShotsElement[index].style.backgroundColor = "red" : teamThreeShotsElement[index].style.backgroundColor = "green";
    });
    
    team4.runs.forEach((run,index)=>{
        run == 0 ? teamFourShotsElement[index].style.backgroundColor = "red" : teamFourShotsElement[index].style.backgroundColor = "green";
    });

};    