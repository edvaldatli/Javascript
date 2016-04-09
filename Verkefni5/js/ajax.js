$.ajax({
    'url': 'http://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        console.log($.parseJSON(response));
    }
});