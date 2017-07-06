//var holding setInterval that runs countdown
var correct = 0;
var missed = 0;
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
//stopwatch object
var stopwatch = {
    time: 120,
  setUp: function() {
    stopwatch.time = 2*60;
      // change the "display" div to "02:00."
    $("#display").text("2:00");
    },
  start: function(){
        // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.countDown, 1000);
        clockRunning = true;
        }
    },
  stop: function() {
    //use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    },
  countDown: function() {
  if (stopwatch.time != 0){
    //decrement time by 1
    stopwatch.time --;
    // pass time left into stopwatch.timeConverter; save result in variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    // variable created to show converted time in the "display" div.
    $("#display").html(converted);
    } else {
    clearInterval(intervalId);
    clockRunning = false;
    $("#display").html("Time's up!");
    $("#again").on("click",  stopwatch.setUp);
    $("#again").show();
    }
    $("#again").click(function(){
      $("#again").hide();
      $("#start").show();
      });
  },
  timeConverter: function(t) {
     var minutes = Math.floor(t / 60);
     var seconds = t - (minutes * 60);
     if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 1 ) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
    },
  };
var correctAnswer;
 function setBoard(){
  var queryURL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";
  // Creating an AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    answerChoices = [ ];
    answerChoices.push((response.results[0].incorrect_answers[0]),(response.results[0].incorrect_answers[1]),(response.results[0].incorrect_answers[2]), (response.results[0].correct_answer));
     correctAnswer = response.results[0].correct_answer;
    answerChoices.sort(function(a, b) {return 0.5 - Math.random();});
    console.log(response.results[0].question);
    console.log(answerChoices);
    $("#questionDisplay").html(response.results[0].question);
    $("#choiceA").html(answerChoices[0]);
    $("#choiceB").html(answerChoices[1]);
    $("#choiceC").html(answerChoices[2]);
    $("#choiceD").html(answerChoices[3]);
  });
}
$( document ).ready(function() {
  $(".well").hide();
   setBoard();
  $("#start").on("click", stopwatch.start);
  $("#start").click(function(){
    $("#start").hide();
    $(".well").show();
      setBoard;
  });
  $("#again").hide();
  $("#display").text("02:00");
  $("#correct").text(correct);
  $("#missed").text(missed);
  $("#next").hide();
  $("#next").click((function(){
  $("#next").hide();
    setBoard();
    $("#answerShow").empty();
}))
  $("#A").click(function(){
    $("#next").show();
            if ((answerChoices[0])==correctAnswer) {
              alert("you're right");
              correct++;
              $("#correct").text(correct);
            } else {
              missed++;
              $("#missed").text(missed);
              $("#answerShow").append(("Sorry, the answer was ")+(correctAnswer));
            };
        $("#B").click(function(){
          $("#next").show();
          if ((answerChoices[1])==correctAnswer) {
          alert("you're right");
          correct++;
          $("#correct").text(correct);
        } else {
          missed++;
          $("#missed").text(missed);
          $("#answerShow").append("Sorry, the answer was " + correctAnswer);
        };
        $("#C").click(function(){
          $("#next").show();
          if ((answerChoices[2])==correctAnswer) {
            alert("you're right");
            correct++;
            $("#correct").text(correct);
          } else {
            missed++;
            $("#missed").text(missed);
            $("#answerShow").append("Sorry, the answer was " + correctAnswer);
          };
        $("#D").click(function(){
          $("#next").show();
          if ((answerChoices[3])==correctAnswer) {
          alert("you're right");
          correct++;
          $("#correct").text(correct);
        } else {
          missed++;
          $("#missed").text(missed);
          $("#answerShow").append("Sorry, the answer was " + correctAnswer);
        }
      })
    })
  })
})
})
