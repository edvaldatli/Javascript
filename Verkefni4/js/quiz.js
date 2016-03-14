function Spurning (spurning, svor, rettsvar){
    this.spurning = spurning,
    this.svor = svor,
    this.rettsvar = rettsvar

    this.template = function(){

        var spurning = '<div class="spurning">' + '<h3>' + this.spurning + '</h3>';
        var ehv = "";
        for(var i = 0; i < 4;i++){
             ehv += "<button id='svar'>" + this.svor[i] + "</button>";
        }

        var last = '</div>';

        return spurning + ehv + last;
    }
}

var spurningar = [
    new Spurning('What is Elvis Presley s middle name?', ['Michael', 'Aaron', 'Keith', 'Johnny'], 1),
    new Spurning('How many oscars did the Titanic movie got?', [9, 4, 7, 11], 11),
    new Spurning('In which country were the first Olympic Games held?', ['United Kingdom', 'France', 'Greece', 'Czech Republic'], 2),
    new Spurning('In computing what is Ram short for?', ['Really Awesome Memory', 'Random Access Memory', 'Rapid Attribute Memory', 'Rapid Access Memory'], 1)
];

function Checker (spurnNumer){

}

var teljari = 0;

do{
    var container = document.getElementById('main');

    container.innerHTML = spurningar[teljari].template();

    teljari++;
}while(teljari < spurningar.length)


