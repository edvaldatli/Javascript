var teljari = 0;
var spurningarArray = [];
var spurningNumber = 0;
var rettSvarad = 0;
var samtals = 0;
var seconds;
var temp;
var gameStarted = false;
var counter;
var timi = 15;


function Spurning (spurning, svor, rettsvar){
    this.spurning = spurning;
    this.svor = svor;
    this.rettsvar = rettsvar;

    this.template = function(){

        var spurning = '<h3>' + this.spurning + '</h3>' + '<div class="container spurning">';
        var takkar = "";
        for(var i = 0; i < svor.length;i++){
            takkar += "<button class='btn btn-large col s12' id='" + i +"'>" + this.svor[i] + "</button>";
        }

        var last = '</div>';

        return spurning + takkar + last;
    }
}

function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

var spurningar = [
    new Spurning('What is Elvis Presleys middle name?', ['Michael', 'Aaron', 'Keith', 'Johnny'], 1),
    new Spurning('How many oscars did the Titanic movie get?', [9, 4, 7, 11], 3),
    new Spurning('In which country were the first Olympic Games held?', ['United Kingdom', 'France', 'Greece', 'Czech Republic'], 2),
    new Spurning('In computing what is Ram short for?', ['Really Awesome Memory', 'Random Access Memory', 'Rapid Attribute Memory', 'Rapid Access Memory'], 1),
    new Spurning('In the word E-mail, what does the "E" stand for?', ['Electronic', 'Express', 'Estimate', 'Earth-healty'], 0),
    new Spurning('What team did GeT_RiGhT play with before Ninjas in Pyjamas?', ['None', 'Fnatic', 'Team LDLC', 'SK Gaming'], 1),
    new Spurning('Which team has won the most majors?', ['Ninjas in Pyjamas', 'FaZe', 'Fnatic', 'Na\'vi'], 2),
    new Spurning('Er Aron legend?', ['Já', 'Nei', 'Kannski', 'Alveg sama'], 0)
];

function rettSvar(){
    return spurningar[spurningarArray[spurningNumber]].rettsvar;
}





function checkAnswer(targetId){
    var svarNotanda = targetId;
    if(svarNotanda == rettSvar()){
        rettSvar();
        rettSvarad++;
        $('#'+ rettSvar()).addClass('right');
    }
    else{
        $('#'+ svarNotanda).addClass('wrong');
    }
    clearInterval(counter);
    spurningNumber++;
    setTimeout(loadQuestion, 1000);
}

function loadQuestion() {
    var container = document.getElementById('main');
    if (gameStarted == false){
        $('#main').html('<button class="btn btn-large" id="startgame">Start game</button>');
        $('#startgame').one('click', function(){
            gameStarted = true;
            loadGame();
            timerStart();
        });
    }
    else if(spurningar.length > spurningNumber){
        $('#timer').html("LETS GO");
        container.innerHTML = spurningar[spurningarArray[spurningNumber]].template();
        $('.btn').one('click', function (event) {
            var targetId = event.target.id;
            checkAnswer(targetId);
            timerStart();
        });
        progress();
    }
    else{
        $('#timer').empty();
        $('#main').empty();
        $('#main').html("<h3>Thanks for playing!</h3> <div class='container row'><h5>Your points: " + rettSvarad + " / " + spurningar.length + "</h5> <button id='playAgain' class='btn btn-large col s12'>Play Again</button></div>");
        $('#playAgain').one('click', function(){
           playAgain();
        });
        clearInterval(counter);
        progress();

    }
}

function progress(){
    var container = document.getElementById('progress');
    var reiknir = 100 / spurningar.length;
    container.innerHTML = '<div class="container progress"><span>' + samtals + ' %</span> <div class="determinate" style="width: ' + samtals + '%"></div></div> ';
    samtals += reiknir;

}

function loadGame(){
    spurningarArray = [];
    spurningNumber = 0;
    rettSvarad = 0;
    samtals = 0;
    for(var i = 0; i < spurningar.length; i++){
        spurningarArray.push(i);
    }
    shuffle(spurningarArray);
    loadQuestion();
}

function timerStart(){
    var time = timi;
    counter = setInterval(timer, 1000);


    function timer(){

        $('#timer').html(time);
        time += -1;

        if(time < 0){
            clearInterval(counter);
            checkAnswer();
            timerStart();
            return
        }
    }
}

function playAgain(){
    loadGame();
    timerStart();

}

$(document).ready(function(){

});

loadGame();
