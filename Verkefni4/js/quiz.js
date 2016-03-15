var teljari = 0;
var spurningarArray = [];

$(document).ready(function(){
   loadGame();
});



function Spurning (spurning, svor, rettsvar){
    this.spurning = spurning,
    this.svor = svor,
    this.rettsvar = rettsvar

    this.template = function(){

        var spurning = '<div class="spurning">' + '<h3>' + this.spurning + '</h3>';
        var ehv = "";
        for(var i = 0; i < svor.length;i++){
             ehv += "<button class='btn' id='" + i +"'>" + this.svor[i] + "</button>";
        }

        var last = '</div>';

        return spurning + ehv + last;
    }
}

var spurningar = [
    new Spurning('What is Elvis Presley s middle name?', ['Michael', 'Aaron', 'Keith', 'Johnny'], 1),
    new Spurning('How many oscars did the Titanic movie get?', [9, 4, 7, 11], 3),
    new Spurning('In which country were the first Olympic Games held?', ['United Kingdom', 'France', 'Greece', 'Czech Republic'], 2),
    new Spurning('In computing what is Ram short for?', ['Really Awesome Memory', 'Random Access Memory', 'Rapid Attribute Memory', 'Rapid Access Memory'], 1)
];

function loadGame(){
    teljari = 0;
    for(var i = 0; i < spurningar.length; i++){
        spurningarArray.push(i);
    }
    shuffle(spurningarArray);
    console.log(spurningarArray);
    loadQuestion();
}

function rettSvar(){
    return spurningar[spurningarArray[teljari]].rettsvar;
}

function loadQuestion(questionNumber){
    var container = document.getElementsByClassName('container');
    container.innerHTML = spurningar[0].template();
}

function checkAnswer(targetId){
    var svar = targetId;

}

function playAgain(){
    loadGame();
}

$('#svar').on('click', function(event){
    var targetId = event.target.id;
    checkAnswer(targetId);
});










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