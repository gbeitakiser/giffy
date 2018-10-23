

// Document Ready
$(document).ready(function(){


// Vars
var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]


// Displays data to HTML when called
function displayData() {
    var subject = $(this).attr("data-name");
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";

    // AJAX call
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var shorten = results[i].images
            // Can add to shorten and reduce code needed in display call
            console.log(shorten);

            $("#display").append('<img src=' + shorten.fixed_height.url + "'><br><br>");
        }
    })
};

    // $("#buttons").empty();
    function renderButtons() {
        for (var i = 0; i < topics.length; i++) {
            var buttonOrig = $("<button>");
            buttonOrig.addClass("button");
            buttonOrig.val(topics[i]);
            buttonOrig.attr("data-name", topics[i]);
            buttonOrig.text(topics[i]);
            buttonValue = buttonOrig[0].value;
            $("#buttons").append(buttonOrig);
            console.log(buttonValue);
    }
    }

    $(document).on("click", ".button", displayData);

    // displayData();
    renderButtons();
});