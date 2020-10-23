let score = [0,1];
var turn;
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
    firstMatchTurn = Math.round(Math.random())+1;
    secondMatchTurn = Math.round(Math.random())+3;
    console.log(turn);
};

updateButtonText = ()=>{
    var button1 = document.getElementById('shoot1-button');
    var button2 = document.getElementById('shoot2-button');
    button1.textContent = `SHOOT ${firstMatchTurn===1 ? team1.name : team2.name}`;
    button2.textContent = `SHOOT ${secondMatchTurn===3 ? team3.name : team4.name}`;
};

updateScore = ()=> {
    console.log(score);
    document.getElementById('team1-score').textContent = team1.score;
    document.getElementById('team2-score').textContent = team2.score;
    document.getElementById('team3-score').textContent = team3.score;
    document.getElementById('team4-score').textContent = team4.score;
};

updateName = ()=>{
    document.getElementById('team1-name').textContent = team1.name;
    document.getElementById('team2-name').textContent = team2.name;
    document.getElementById('team3-name').textContent = team3.name;
    document.getElementById('team4-name').textContent = team4.name;
};