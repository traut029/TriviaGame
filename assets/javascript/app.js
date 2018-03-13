//Global Variables
var count = 31;
var start = 0;
var question1 = {
    q: "questioning question?",
    a1: "idk",
    a2: "can you repeat the question?",
    a3: "summinsuch",
    a4: "pie"
};
var pauseTimer = false;



//wait until document loads before doing anything
$(document).ready(function () {


    //Main Process
    startPage();
    $("#startButton").click(function () {



        if (start == 1) {
            setInterval(timer, 1000);

            slide1();

        }


    })





})


//initial set up of first page
function startPage() {
    console.log("hello")
    $("#buttonDiv").append('<button id="startButton">Start<button>');
    $("#startButton").click(function () {
        start = 1;

        $("#startButton").remove();
    })



}
//controls the timer
function timer() {
    count = count - 1;

    console.log(count);

    //stop before hitting zero
    if (count <= 0) {


        //text frozen but counter still going
        return;

    }
    //pauses VISUAL of timer on screen with click of answer
    $(".answer").click(function () {
        pauseTimer = true;
    })

    //shows timer on screen
    if (pauseTimer == false) {
        $("#timer").text("Time Remaining: " + count + " Seconds");
    }
}





//first question
function slide1() {

    $("#question").text(question1.q);
    $("#answer1").text(question1.a1);
    $("#answer2").text(question1.a2);
    $("#answer3").text(question1.a3);
    $("#answer4").text(question1.a4);
    //will remove q and a text if an answer is clicked and freezes time
    $(".answer").click(function () {
        $("#question").text("");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");

    })

}