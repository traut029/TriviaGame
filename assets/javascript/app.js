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

var question2 = {
    q: "questioning question2?",
    a1: "idk2",
    a2: "can you repeat the question2?",
    a3: "summinsuch2",
    a4: "pie2"
};
var question3 = {
    q: "questioning question3?",
    a1: "idk3",
    a2: "can you repeat the question3?",
    a3: "summinsuch3",
    a4: "pie3"
};


var answersRight = 0;
var answersGuessed = 0;

//wait until document loads before doing anything
$(document).ready(function () {


    //Main Process
    startPage();
    $("#startButton").click(function () {



        if (start == 1) {
            intervalId = setInterval(timer, 1000);

            slide1();

        }
    })





})


//initial set up of first page
function startPage() {
    console.log("hello")
    $("#buttonDiv").append('<button id="startButton">Start</button>');
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
    if (count <= 0 && answersGuessed == 0) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was your face.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        pause1();
    }
    if (count <= 0 && answersGuessed == 1) {
        stop();
        $("#question").text("Out of time2!");
        $("#answer1").text("The correct answer was your face2.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        pause2();
    }
    if (count <= 0 && answersGuessed == 2) {
        stop();
        $("#question").text("Out of time3!");
        $("#answer1").text("The correct answer was your face3.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");

    }



    //pauses timer on screen with click of answer
    $(".answer").click(function () {
        stop();


    })

    //shows timer on screen

    $("#timer").text("Time Remaining: " + count + " Seconds");

}
//stop function
function stop() {
    clearInterval(intervalId);
    start = 2;

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
        if (answersGuessed == 0) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was your face.");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");

        }
    })
    //randomly deciding answer 3 will be the first correct answer
    $("#answer3").click(function () {
        if (answersGuessed == 0) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    //if timer runs out

    $(".answer").click(function () {
        if (answersGuessed == 0) {
            pause1();
        }
    })
}

function pause1() {
    setTimeout(function () {
        console.log("pause1 function ran")
        slide2();


    }, 4000)
    answersGuessed++;

}
function slide2() {
    console.log("hello");
    $("#question").text(question2.q)
    $("#answer1").text(question2.a1);
    $("#answer2").text(question2.a2);
    $("#answer3").text(question2.a3);
    $("#answer4").text(question2.a4);



    $(".answer").click(function () {
        if (answersGuessed == 1) {
            $("#question").text("Wrong you simpleton2.");
            $("#answer1").text("The correct answer was your face2.");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
        }
    })

    $("#answer1").click(function () {
        if (answersGuessed == 1) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 1) {
            pause2();
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);
}

function pause2() {
    setTimeout(function () {
        console.log("pause2 function ran")
        slide3();


    }, 4000)
    answersGuessed++;

}

function slide3() {
    $("#question").text(question3.q)
    $("#answer1").text(question3.a1);
    $("#answer2").text(question3.a2);
    $("#answer3").text(question3.a3);
    $("#answer4").text(question3.a4);
    console.log("answersGuessed: " + answersGuessed)


    $(".answer").click(function () {
        if (answersGuessed == 2) {
            $("#question").text("Wrong you simpleton2.");
            $("#answer1").text("The correct answer was your face2.");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
        }
    })

    $("#answer4").click(function () {
        if (answersGuessed == 2) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 2) {
            pause3();
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}

function pause3() {
    setTimeout(function () {
        console.log("pause3 function ran")
        slide4();


    }, 4000)
    answersGuessed++;

}
function slide4(){
    
}