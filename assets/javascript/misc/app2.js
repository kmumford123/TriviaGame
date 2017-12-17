// Run at page load
// Create an object that contains an array of objects with questions and answers
window.questions = [{
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
]

window.currentQuestion = 0;

window.onload = function() {



        //Radio button on click alert this.index
        // alert questions[0].answers[THIS.INDEX].correct


        //answers[2].answer
        function createQuestion() {

            var q = document.getElementById('question');
            var a = document.getElementById('answers');


            q.innerHTML = "<span>" + window.questions[currentQuestion].question + "</span>";

            for (var i = 0; i < window.questions[currentQuestion].answers.length; i++) {
                var answer = document.createElement("p");
                var radio = document.createElement("input");

                radio.setAttribute("type", "radio");
                radio.setAttribute("name", "answer");
                radio.setAttribute("data-index", i);

                answer.innerHTML = window.questions[currentQuestion].answers[i].answer;


                radio.addEventListener("click", function() {
                    var index = this.getAttribute("data-index");

                    alert(window.questions[currentQuestion].answers[index].correct);
                    alert(index);
                    // window.currentQuestion++;
                    // createQuestion();

                })


                answer.appendChild(radio);
                a.appendChild(answer);
            }
        }


        createQuestion();
        //$("#submit").on("click", )





        // questions[0].question;
        // questions[0].answer;


        //     var questions = {
        //         question1: "What time is it?",
        //         question2: "Where is the shoestore?",
        //         question3: "How much do you love me?"
        //     };

        //     var answers = {
        //         answer1: "Qui ora es!",
        //         answer2: "donde estas la zeppateria!",
        //         answer3: "Te quiero mucho con todo mi corazon!"
        //     };
        //     //radial button on.click events
        //     function myFunction()

        //     {
        //         var rdiv1 = $("<div id='INPUT'>");
        //         $("#INPUT").attr("type", "radio");
        //         $("#INPUT").appendChild(rdiv1);
        //     }
        //     var userSelect = function() {
        //         if (questions.question1 = answers.answer1) {
        //             correct === correct++;
        //         };
        //     }
        // }


        // Start timer prior to answer

        // Tally number of correct and wrong answers
        var correct = 0;