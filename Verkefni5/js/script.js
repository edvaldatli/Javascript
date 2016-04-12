// VARIABLES
    var functionName;
// VARIABLES

$(document).ready(function(){
    preload();
    $('.takkar').html('<button class="btn btn-flat col s12 m5 orderByName" id="0">Raða eftir nafni tónlistarmanna</button>' +
        '<button class="btn btn-flat col s12 m5 offset-m2 orderByDate" id="1">Raða eftir dagsetningu</button>');
    main();
    $('#0').on('click', function(){
        functionName = sortJsonByName;
        main();
        preload();
    });
    $('#1').on('click', function(){
        functionName = sortJsonByDate;
        main();
        preload();
    });
});

function preload(){
    $('.vidburdir').html('<div class="progress"><div class="indeterminate"></div></div>');
}
function sortJsonByName(a, b){
    return a.eventDateName > b.eventDateName ? 1 : -1;
};
function sortJsonByDate(a, b){
    return a.dateOfShow > b.dateOfShow ? 1: -1;
};

function main(){
    $.ajax({
    'url': 'http://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        var data = response.results.sort(functionName);
        $('.vidburdir').html("");
            $.each(data, function(){
                $('.vidburdir').append('<div class="col s12 m6 l4"><div class="card">' +
                    '<div class="card-image waves-effect waves-block waves-light">' +
                    '<img class="activator" src="' + this.imageSource + '">' +
                    '</div>' +
                    '<div class="card-content">' +
                    '<span class="card-title activator grey-text text-darken-4 titill">' + this.eventDateName +'</span>' +
                    '<span class="titill"><i class="material-icons">location_on</i>' + this.eventHallName +'</span>' +
                    '</div>' +
                    '<div class="card-reveal">' +
                    '<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + this.eventDateName + '</span>' +
                    '<p>' + moment(this.dateOfShow).format('LLLL') + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
                $('.vidburdir').fadeIn(1000);
                $("img").error(function(){
                    $(this).attr("src", "http://www.fresno-limo.com/uploads/3/9/3/9/39396171/6334181_orig.jpg");
                })
            });
    },
    'error': function(){
        $('.vidburdir').html('<h2 class="center">Ekki tókst að sækja gögn, vinsamlegast reynið síðar.</h2>');
    }
});
}