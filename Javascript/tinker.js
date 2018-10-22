// Vars

var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]

// Make "Subject" an empty field that you can append to once I get buttons looped
var subject = "";
var btnValue = "";

var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";

// Document Ready
$(document).ready(function() {

    // AJAX call
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);
        console.log(results);

        // var pic1 = $("#display").append('<img src="' + results[0].images.downsized_large.url + '">')
        
    })

    // $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var buttonUp = $("#buttons").append("<button>" + topics[i] + "</button>");
        $(buttonUp).val(topics[i]);
        btnValue = buttonUp[0].value;
        console.log(btnValue);
        console.log("-------------")


        $(this).click(function() {
            console.log(btnValue);
            subject = btnValue;
            console.log("-------------")

            console.log(subject);
        })

    }
    console.log("-------------")
    console.log(btnValue);
    console.log("-------------")

    

});