$(document).ready(function () {
    
    var optionsArray = [
        {
            "value": 1,
            "text": "XML"
        },
        {
            "value": 2,
            "text": "JSON"
        }
    ];

    $('#format').populate(optionsArray);

    $('#submit').click(function () {
        // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDVKapf8rd4c1IgFyNXrcWYd2Tg7qjwMHs
        var format = $("#format option:selected").text();
        var address = $("#address").val();
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({ 'address': address }, function (results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                   console.log(results);
                   console.log(results[0].geometry.location.lat);
                   
                   $("#response").val(results);                   
               }
               else {
                  console.log("Geocoding failed: " + status);
               }
            });
        }   
        
        // $.ajax({
        //     url: 'http://maps.googleapis.com/maps/api/geocode/' + format,
        //     crossDomain: true,
        //     type: 'GET',
        //     data: {
        //         sensor: false,
        //         address: address,
        //         key: "AIzaSyDVKapf8rd4c1IgFyNXrcWYd2Tg7qjwMHs"
        //     },
        //     success: function (data) {
        //         $("#response").val(data);
        //     }
        // });
    });

});

//AIzaSyDVKapf8rd4c1IgFyNXrcWYd2Tg7qjwMHs