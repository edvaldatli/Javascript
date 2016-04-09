var teljari = 0;
var spurningarArray = [];
var spurningNumber = 0;
var rettSvarad = 0;
var samtals = 0;
var seconds;
var temp;
var gameStarted = false;
var counter;
var timi = 5;


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
        rettSvarad++;
        $('#'+ svarNotanda).addClass('right');
    }
    else{
        $('#' + svarNotanda).addClass('wrong');
    }
    spurningNumber++;
    clearInterval(counter);
    setTimeout(loadQuestion, 1000);
}

function loadQuestion() {
    if (gameStarted == false){
        $('#timer').html('<h1>QUIZ</h1><button class="btn btn-large" id="startgame">Start game (SPACE)</button>');
        $('#startgame').one('click', function(){
            gameStarted = true;
            loadGame();
            timerStart();
        });
        $(document).one('keydown',function(e){
           if(e.keyCode == 32){
               gameStarted = true;
               loadGame();
               timerStart();
               console.log("click");
           }
        });

    }
    else if(spurningar.length > spurningNumber){
        $('#timer').html("-");
        $('#main').html(spurningar[spurningarArray[spurningNumber]].template());
        $('.btn').one('click', function (event) {
            var targetId = event.target.id;
            checkAnswer(targetId);
            timerStart();
        });
        $(document).one('keypress', function(e){
            if(e.keyCode == 49){
                checkAnswer(0);
                timerStart();
                console.log("click");
            }
            else if(e.keyCode == 50){
                checkAnswer(1);
                timerStart();
                console.log("click");
            }
            else if(e.keyCode == 51){
                checkAnswer(2);
                timerStart();
                console.log("click");
            }
            else if(e.keyCode == 52){
                checkAnswer(3);
                timerStart();
                console.log("click");
            }
        });
        progress();

    }
    else{
        $('#timer').empty();
        $('#main').empty();
        $('#main').html("<h3>Thanks for playing!</h3> <div class='container row'><h5>Your points: " + rettSvarad + " / " + spurningar.length + "</h5> <button id='playAgain' class='btn btn-large col s12'>Play Again (SPACE)</button></div>");
        $('#playAgain').one('click', function(){
           playAgain();
        });
        $(document).one('keypress', function(e){
           if(e.keyCode == 32){
               playAgain();
               console.log("click");
           }
        });
        clearInterval(counter);
        progress();
    }
    console.log(spurningNumber);
}

function progress(){
    var reiknir = 100 / spurningar.length;
    $('#progress').html('<div class="container progress"><span>' + samtals + ' %</span> <div class="determinate" style="width: ' + samtals + '%"></div></div>');
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
    console.log(spurningarArray);
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
            checkAnswer(undefined);
            timerStart();
        }
    }
}

function playAgain(){
    loadGame();
    timerStart();
}


$(document).ready(function(){
    loadQuestion();
});

