moment().locale('is');

$.ajax({
    'url': 'http://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for(var i = 0; i < response.results.length; i++) {

            $('.vidburdir').append('<div class="col s12 m6 l4"><div class="card">' +
                '<div class="card-image waves-effect waves-block waves-light">' +
                '<img class="activator" src="' + response.results[i].imageSource + '">' +
                '</div>' +
                '<div class="card-content">' +
                '<span class="card-title activator grey-text text-darken-4 titill">' + response.results[i].eventDateName +'</span>' +
                '<span class="titill"><i class="material-icons">location_on</i>' + response.results[i].eventHallName +'</span>' +
                '</div>' +
                '<div class="card-reveal">' +
                '<span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + response.results[i].eventDateName + '</span>' +
                '<p>' + moment(response.results[i].dateOfShow).format('LLLL') + '</p>' +
                '</div>' +
                '</div>' +
                '</div>');
            $("img").error(function(){
                $(this).attr("src", "http://www.fresno-limo.com/uploads/3/9/3/9/39396171/6334181_orig.jpg");
            });
        }
    },
    'error': function(){
        alert('Ekki tókst að sækja gögn, vinsamlegast reynið síðar.');
    }
});