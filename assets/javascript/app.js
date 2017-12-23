// Run at page load
// Create an object that contains an array of objects with questions and answers
var questions = [{
        question: "Is the sky blue?",
        answers: [
            { answer: 'No', correct: false },
            { answer: 'bad', correct: true },
            { answer: 'yes', correct: false },
        ],
        youGotIt: false
    },
    {
        question: "Is the sky blue2?",
        answers: [
            { answer: 'No2', correct: false },
            { answer: 'bad2', correct: true },
            { answer: 'yes2', correct: true },
        ],
        youGotIt: false
    }
];

var currentQuestion = 0;

window.onload = function() {

    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    //prevents the clock from being sped up unnecessarily
    var clockRunning = false;

    // Our stopwatch object
    var stopwatch = {

        time: 120,
        reset: function() {

            stopwatch.time = 120;

            // DONE: Change the "display" div to "00:00."
            $("#display").text("02:00");

        },
        start: function() {

            // DONE: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(stopwatch.count, 1000);
                clockRunning = true;
            }
        },
        stop: function() {

            // DONE: Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },

        count: function() {

            // DONE: decrease time by 1 for countdown.
            stopwatch.time--;

            // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
            //       and save the result in a variable.
            var converted = stopwatch.timeConverter(stopwatch.time);
            console.log(converted);

            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $("#display").text(converted);
        },
        timeConverter: function(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };
    stopwatch.start();

    //Radio button on click alert this.index
    // alert questions[0].answers[THIS.INDEX].correct
    // function listQuestions() {

    //     for (var i = 0; i < questions.length; i++) {
    //         var qvalue = $("<span id=questions[i]>");
    //         $(qvalue).append(`<span>  ${questions[i].question}  </span>`);
    //         $("#question").append(qvalue);
    //         console.log(questions[i].question)
    //     }
    // }
    // listQuestions();

    //answers[2].answer
    function createQuestion() {

        // var q = document.getElementById('question');
        // var q = $("#question")
        $("#answers").empty();
        // var a = document.getElementById('answers');
        // var a = $("#answers");

        // q.innerHTML = "<span>" + questions[currentQuestion].question + "</span>";

        $("#question").html("<span>" + questions[currentQuestion].question + "</span>");
        for (var j = 0; j < questions[currentQuestion].answers.length; j++) {
            // $("#answers").empty();
            // var answer =   document.createElement("p");
            var answer = $("<span>");

            // var radio = document.createElement("input");
            var radio = $(`<input type = "radio", name = "answer"/>`);

            // $("input").attr(type = "radio", name = "answer");
            // radio.setAttribute("type", "radio");
            // radio.setAttribute("name", "answer");
            radio.attr("data-index", j);

            // answer.innerHTML = questions[currentQuestion].answers[i].answer;
            $(answer).append(questions[currentQuestion].answers[j].answer + " ");

            var correctAnswer = 0
            var wrongAnswer = 0
            var score = function tally() {
                if (youGotIt = true) {
                    correctAnswer++;
                } else {
                    wrongAnswer++;
                }
            }

            $("input").on("click", function() {
                var index = radio.attr("data-index");
                if (questions[currentQuestion].answers[index].correct) {
                    questions[currentQuestion].youGotIt = true;
                    score();
                    console.log(correctAnswer + " " + wrongAnswer);
                } else {
                    score();
                    console.log(correctAnswer + " " + wrongAnswer);
                    //show score, calculate score
                }

                // alert(questions[currentQuestion].answers[index].correct);
                if (currentQuestion + 1 < questions.length) {
                    currentQuestion++;
                    createQuestion();
                }
            })

            $("#answers").append(radio);
            $("#answers").append(answer);
            console.log(answer);


        }
    }
    createQuestion();
};