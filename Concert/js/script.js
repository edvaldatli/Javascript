

// VARIABLES //
var data;
var keyArray = [];
// VARIABLES //

$(document).ready(function(){
    $('.takkar').html('<button class="btn btn-flat col s12 m5 orderByName" id="0">Raða eftir nafni tónlistarmanna</button>' +
        '<button class="btn btn-flat col s12 m5 offset-m2 orderByDate" id="1">Raða eftir dagsetningu</button>');

    $('.vidburdir').html('<div class="progress"><div class="indeterminate"></div></div>');

    $.when($.ajax({
            'url': 'http://apis.is/concerts',
            'type': 'GET',
            'dataType': 'json',
            'success': function(response) {
                data = response.results;
            }
        }))
        .then(function(){
            data = data.sort(sortByName);
            appendContentToBody(data);

        });

    $('#0').on('click', function(){
        data = data.sort(sortByName);
        appendContentToBody(data);
    });
    $('#1').on('click', function(){
        data = data.sort(sortByDate);
        appendContentToBody(data);
    });


});

function sortByName(a, b){
    return a.eventDateName > b.eventDateName ? 1 : -1;
};
function sortByDate(a, b){
    return a.dateOfShow > b.dateOfShow ? 1: -1;
};

function appendContentToBody(array){
    var counter = 0;

    $('.vidburdir').html('');
    $.each(array, function(){
        $('.vidburdir').append('<div class="col s12 m6 l3"><div class="card">' +
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
            '</div>').hide().fadeIn(200, 'swing');
        counter++;
    })
    $('img').error(function(){
       $(this).attr('src', 'http://www.fresno-limo.com/uploads/3/9/3/9/39396171/6334181_orig.jpg');
    })
}





