

// Document Ready
$(document).ready(function(){


// Vars
var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]


// Runs button that was clicked through Giphy API and returns 10 gifs. Then displays those 10 gifs to HTML
function displayData() {
    var subject = $(this).attr("data-name");
    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";

    // AJAX call
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(results);
        for (i = 0; i < results.length; i++) {
            var shorten = results[i].images
            // Can add to shorten and reduce code needed in display call
            // console.log(shorten);

            $("#display").append('<img src=' + shorten.fixed_height.url + "'><br><br>");
            $("#display").append('<p>Rating: ' + results[i].rating)
        }
    })
};

    // Renders both the original buttons from array on page as well as new buttons created in search bar
    function renderButtons() {
        $("#buttons").empty();
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

    // Adds an inputted search to the array and calls renderButtons function to render it on scren
    $("#submit-search").on("click", function(event) {
        event.preventDefault();
        var newTopic = $("#search-input").val().trim();
        for (i = 0; i < topics.length; i++) {
            if (newTopic === topics[i]) {
                alert("A button for " + newTopic + " already exists")
                console.log("newTopic === topics[i]")
                return;
            }
            else {
                topics.push(newTopic);
                renderButtons();
                $("#search-input").val("");
                console.log(topics);
                return;
                // console.log("newTopic != topics[i]")
            }

        }
    })

    $("#clear").click(function() {
        $("#display").html("");
    })

    $("#clearBtns").click(function() {
        topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"];
        renderButtons();
    })

    // Ensures that gifs aren't displayed until a button is clicked and runs only that button through the displayData function
    $(document).on("click", ".button", displayData);

    renderButtons();
});