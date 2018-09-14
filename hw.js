var players = ["Stephen Curry", "Gary Payton", "Tim Duncan", "Bill Russell"];

$(document).ready(function(){renderButtons()});
function renderButtons() {

    $("#buttons-view").empty();

    
    for (var i = 0; i < players.length; i++) {
        console.log(players[i]);
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      
      a.addClass("player-btn");
      // Adding a data-attribute
      a.attr("data-player", players[i]);
      //a.onclick=getgif(players[i]);
      var data=players[i];
     a.attr("onclick", 'getgif(this)');
      // Providing the initial button text
      a.text(players[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  $ ("#add-player").on("click", function(event){

    event.preventDefault();

    var player = $ ("#player-input").val().trim();

    players.push(player);

    renderButtons();
  });

  
  //$(document).on("click", ".player", players);

      
     // renderButtons();

function getgif(player){

//$("button").on("click", function(){
    
    var player =player.textContent //$(this).data("player");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +

    player + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,

        method: "GET"
    })
    

.then(function(response){

    var results = response.data;
    

    for (var i = 0; i < results.length; i++){
       
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            
            var gifDiv = $("<div class='item'>");

            
            var rating = results[i].rating;

            
            var p = $("<p>").text("Rating: " + rating);

            
            var playerImage = $("<img>");

            
            
            playerImage.attr("src", results[i].images.fixed_height.url);

            
            gifDiv.append(p);
            gifDiv.append(playerImage);

            
            $("#gifs-appear-here").prepend(gifDiv);
          }
    }

})
}


//})

