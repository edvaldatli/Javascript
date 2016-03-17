var teljari = 0;
var spurningarArray = [];
var spurningNumber = 0;
var rettSvarad = 0;
var samtals = 0;
var seconds;
var temp;
var buttonClick = false;
var counter;


function Spurning (spurning, svor, rettsvar){
    this.spurning = spurning,
    this.svor = svor,
    this.rettsvar = rettsvar

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
    new Spurning('Which team has won the most majors?', ['Ninjas in Pyjamas', 'FaZe', 'Astralis', 'Fnatic', 'EnVyUs', 'Na\'vi', 'Virtus.Pro'], 3)
];

function rettSvar(){
    return spurningar[spurningarArray[spurningNumber]].rettsvar;
}





function checkAnswer(targetId){
    var svarNotanda = targetId;
    console.log('Svar Notanda: ' + svarNotanda);
    console.log('Rétt svar ' + rettSvar());
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
    if (spurningar.length > spurningNumber) {
        $('#timer').html("15");
        container.innerHTML = spurningar[spurningarArray[spurningNumber]].template();
        timer(15);
        $('.btn').on('click', function (event) {
            var targetId = event.target.id;
            checkAnswer(targetId);
            $('button[id^=""]').not('#' + targetId).prop('disabled', true);
        });
    }
    else{
        $('#timer').empty();
        $('#main').html("<h3>Thanks for playing!</h3> <h5>Your points: " + rettSvarad + "</h5>");
    }
    progress();
    console.log(spurningNumber);

}

function progress(){
    var container = document.getElementById('progress');
    var reiknir = 100 / spurningar.length;
    container.innerHTML = '<div class="container progress"><span>' + samtals + ' %</span> <div class="determinate" style="width: ' + samtals + '%"></div></div> ';
    samtals += reiknir;

}

function loadGame(){
    teljari = 0;
    for(var i = 0; i < spurningar.length; i++){
        spurningarArray.push(i);
    }
    shuffle(spurningarArray);
    console.log(spurningarArray);
    loadQuestion();
}

function timer(seconds){
    var time = seconds - 1;
    counter = setInterval(timer, 1000);

    function timer(){
        $('#timer').html(time);
        time += -1;

        $
        if(time < 0){
            clearInterval(counter);
            checkAnswer();
            return
        }
    }
}

function playAgain(){
    loadGame();
}









loadGame();
$(document).ready(function(){

});

