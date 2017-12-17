// Run at page load
// Create an object that contains an array of objects with questions and answers
var questions = [{
        question: "Is the sky blue?",
        answers: [
            { answer: 'No', correct: false },
            { answer: 'bad', correct: true },
            { answer: 'yes', correct: true },
        ]
    },
    {
        question: "Is the sky blue2?",
        answers: [
            { answer: 'No2', correct: false },
            { answer: 'bad2', correct: true },
            { answer: 'yes2', correct: true },
        ]
    }
];

var currentQuestion = 0;
console.log(currentQuestion);
console.log(questions);

window.onload = function() {

    //Radio button on click alert this.index
    // alert questions[0].answers[THIS.INDEX].correct


    //answers[2].answer
    function createQuestion() {

        // var q = document.getElementById('question');
        // var q = $("#question")

        // var a = document.getElementById('answers');
        // var a = $("#answers");

        // q.innerHTML = "<span>" + questions[currentQuestion].question + "</span>";
        $("#question").html("<span>" + questions[currentQuestion].question + "</span>");
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {

            // var answer =   document.createElement("p");
            var answer = $("p");

            // var radio = document.createElement("input");
            var radio = $("input");

            $("input").attr(type = "radio", name = "answer");
            // radio.setAttribute("type", "radio");
            // radio.setAttribute("name", "answer");
            radio.attr("data-index", i);

            // answer.innerHTML = questions[currentQuestion].answers[i].answer;
            $("p").html(questions[currentQuestion].answers[i].answer);


            $("input").on("click", function() {
                var index = this.attr("data-index");

                alert(questions[currentQuestion].answers[index].correct);
                alert(index);
                currentQuestion++;
                createQuestion();

            })


            $("p").append(radio);
            $("#answers").append(answer);
        }
    }
    createQuestion();
};