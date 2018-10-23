// Vars

var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]

// Make "Subject" an empty field that you can append to once I get buttons looped
var subject = "";
// var btnValue = "";

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
        var buttonOrig = $("<button>");
        buttonOrig.addClass("button");
        buttonOrig.val(topics[i]);
        buttonOrig.attr("data-name", topics[i]);
        buttonOrig.text(topics[i]);
        buttonValue = buttonOrig[0].value;
        subject = buttonValue;

        $("#buttons").append(buttonOrig);
        // console.log(buttonValue);
        console.log(subject);
        
       
    }
    console.log("-")
    console.log(subject);
  
    

});