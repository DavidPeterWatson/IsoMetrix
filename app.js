$(document).ready(function () {
    
    var optionsArray = [
        {
            "value": 1,
            "text": "xml"
        },
        {
            "value": 2,
            "text": "json"
        }
    ];

    $('#format').populate(optionsArray);

    $('#submit').click(function () {
        var format = $("#format option:selected").text();
        var address = $("#address").val();
        var key = 'AIzaSyDVKapf8rd4c1IgFyNXrcWYd2Tg7qjwMHs';
        
        $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/' + format,
            data: {
                address: address,
                key: key
            },
            xhrFields: {
                withCredentials: false
            },
            type: 'GET',
            dataType: format,
            success: function (data) {
                $("#response").val(JSON.stringify(data));
            }
        });
    });

});