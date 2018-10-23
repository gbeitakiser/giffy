$(document).ready(function(){




// Vars

var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]



// Document Ready
function displayData() {
    var subject = $(this).attr("data-name");
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";

    // AJAX call
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);
        console.log(results);
        $("#display").append('<img src=' + results[0].images.fixed_height.url + "'><br><br>");
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