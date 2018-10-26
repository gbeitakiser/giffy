

// Document Ready
$(document).ready(function(){


// Vars
var topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"]


// Runs button that was clicked through Giphy API and returns 10 gifs. Then displays those 10 gifs to HTML
function displayData() {
    $("#display").html("");
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
        console.log(results);
        
            // Display Initial
            var image = $("<img>");
            image.attr("src", shorten.fixed_height_still.url)
            image.attr("id", i);
            image.attr("display-status", "still")
            var rated = $("<p>")
            // rated.attr("rating", i)
            rated.text('Rating: ' + results[i].rating.toUpperCase());
            $("#display").append(image);
            $("#display").append(rated);
        }

        // Click gif Play/Pause function
        $('img').on("click", function() {
            var id = $(this).attr('id');
            console.log(id);
            var status = $(this).attr('display-status');
            
            if (status === "still") {
                $(this).replaceWith($(this).attr("src", results[id].images.fixed_height.url));
                $(this).attr("display-status", "motion")
            }
            else if (status === "motion") {
                $(this).replaceWith($(this).attr("src", results[id].images.fixed_height_still.url));
                $(this).attr("display-status", "still")
            }
        })
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
    }
    }

    // When submit button is clicked...
    $("#submit-search").on("click", function(event) {

        // Creates a var containing the user input. Will be used to check duplicates and eventually gets pushed to button array if it's not a duplicate
        var newTopic = $("#search-input").val();

        // Creates a new array from topics array with lowercased strings. Made so it can compare with lowercased inputs so that users cannot bypass button duplicate checker by altering letter case
        var checkLower = topics.map(function (val) { return val.toLowerCase(); });

        // Checks if the lowercased version of the user input is in the lowercased version of topics array. If it is, it returns the index of it. If not, it returns -1
        var checkTopic = checkLower.indexOf(newTopic.toLowerCase());

        // If submit button is clicked with field empty, alerts user to type something
        if (newTopic.length === 0) {
            alert("Don't be lazy, type something!");
        }
        // If it's not empty and checkLower variable confirms that typed input is not in the array (returns a value of -1), button is pushed to topics array, rendered on screen, and search field is cleared
        else if (checkTopic === -1) {
            topics.push(newTopic)
            renderButtons();
            $("#search-input").val("");
        }
        // If first two conditions aren't met (meaning the button that has been searched already exists in the array), user is alerted that button already exists, then clears search field
        else {
            alert("You already have a button for " + newTopic + "!")
            $("#search-input").val("");
        }
    })


    

    // Play/Pause Functionality





    // Clears .gifs from display when clicked
    $("#clear").click(function() {
        $("#display").html("");
    })

    // Clears user created buttons from the page when clicked
    $("#clearBtns").click(function() {
        topics = ["Pulp Fiction", "Kill Bill", "Reservoir Dogs", "Jackie Brown", "Natural Born Killers", "Desperado", "Sin City", "Inglorious Bastards"];
        renderButtons();
    })

    // Ensures that gifs aren't displayed until a button is clicked and runs only that button through the displayData function
    $(document).on("click", ".button", displayData);

    renderButtons();
});