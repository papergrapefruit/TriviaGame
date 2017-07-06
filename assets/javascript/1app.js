//Initial array of movies
var cats = ["Random Category", "General Knowledge", "Books", "Film", "Music", "Theater", "Television", "Video Games", "Board Games"];
//Set Up Board
function displayTriviaInfo() {
  var catIDs = $("<div class='cat'>");
   function renderButtons() {
     $("#buttons-view").empty();
for (var i = 0; i < cats.length; i++) {
  var a = $("<button>");
    a.addClass("cat");
    a.text(cats[i]);
  $("#buttons-view").append(a);
          }
        }
renderButtons();
}




$(document).ready(function(){
    $("#trivia-info").text(function(){
      var obj =
        });


// Initial array of categories
  var triviaCategories = [];
  $.ajax ({
    url: "https://opentdb.com/api.php?amount=10&type=multiple",


  })
// loads and sets up game
function triviaRoundSetUp() {
    var queryURL = "https://opentdb.com/api.php?amount=30&category=17&type=multiple";
    // AJAX call for specific category button clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      // Creating a div to hold the question
      var questionDiv = $("<div class='question'>");
      // Storing the rating data
      var question = response.question;
      var answers = response.incorrect_answers;



      // Adding category from API to the array
  triviaCats.push(response.category);
  });
}
//function to create a button for each category
function renderButtons() {
  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise will have repeat buttons)
  $("#buttons-info").empty();
  // Looping through the array of cats
  for (var i = 0; i < triviaCats.length; i++) {
    // Then dynamicaly generating buttons for each category in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("cat");
    // Adding a data-attribute
    a.attr("data-catName", triviaCats[i]);
    // Providing the initial button text
    a.text(triviaCats[i]);
    // Adding the button to the buttons-view div
    $("#buttons-info").append(a);


// Calling renderButtons which handles the processing of our categories array
renderButtons();
}

// Adding a click event listener to all elements with a class of "cat"
  $(document).on("click", ".cat", triviaRoundSetUp);
// Calling the renderButtons function to display the intial buttons
  renderButtons();
}

//You'll create a trivia form with multiple choice or true/false options (your choice).
//  The player will have a limited amount of time to finish the quiz.
//  The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//  Don't let the player pick more than one answer per question.
//  Don't forget to include a countdown timer.
//  You'll create a trivia game that shows only one question until the player answers it or their time runs out.
//  If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
//  The scenario is similar for wrong answers and time-outs.
//  If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//  If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
//  On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
