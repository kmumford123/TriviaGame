// Run at page load
window.onload = function() {

    // Create list of question identifyers
    var questions = {
        question1: "What time is it?",
        question2: "Where is the shoestore?",
        question3: "How much do you love me?"
    };

    var answers = {
        answer1: "Qui ora es!",
        answer2: "donde estas la zeppateria!",
        answer3: "Te quiero mucho con todo mi corazon!"
    };
    //radial button on.click events
    function myFunction()

    {
        var rdiv1 = $("<div id='INPUT'>");
        $("#INPUT").attr("type", "radio");
        $("#INPUT").appendChild(rdiv1);
    }
    var userSelect = function() {
        if (questions.question1 = answers.answer1) {
            correct === correct++;
        };
    }
}


// Start timer prior to answer

// Tally number of correct and wrong answers
var correct = 0;
var incorrect = 0;