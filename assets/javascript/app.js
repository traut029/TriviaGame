//Global Variables
var count = 31;
var start = 0;
var noAnswer = 0;
var question1 = {
    q: "Ol' reliable is Spongebob's most prized what?",
    a1: "Underwater bicycle",
    a2: "Spatula",
    a3: "Jellyfish Net",
    a4: "Krabby Patty"
};

var question2 = {
    q: "Squidward once commented on Patrick's choice of instrument. What did he say?",
    a1: "Mayonnaise is not an instrument.",
    a2: "Your forehead is not an instrument.",
    a3: "A rock is not an instrument.",
    a4: "That's not as cool as my clarinet."
};
var question3 = {
    q: "Spongebob learns a powerful mantra for body positivity. What is it?",
    a1: "Believe in yourself.",
    a2: "A little makeup will cover most blemishes.",
    a3: "Out of sight, out of mind.",
    a4: "I'm ugly and I'm proud!"
};
var question4 = {
    q: "What is somebody in the crowd always shouting during a disaster in Bikini Bottom?",
    a1: "Honey I'm going to be late.",
    a2: "Oh no, not again!",
    a3: "Party!",
    a4: "My leg! My leg!"
};
var question5 = {
    q: "Patrick once said: 'The inner machinations of my mind are an enigma.' What was in his thought bubble afterward?",
    a1: "It was tumbleweeds blowing across an empty landscape.",
    a2: "It was a carton of milk spilling onto a counter top.",
    a3: "It was somebody doing the chicken dance.",
    a4: "It was an advanced mathematical theorem."
};
var question6 = {
    q: "What happens if you eat too many Krabby Patties?",
    a1: "You get terrible gas.",
    a2: "You get a massive belly ache.",
    a3: "They go right to your thighs.",
    a4: "You break out into hives."
};
var question7 = {
    q: "According to a musical Spongebob, what location has magical charms?",
    a1: "The Krusty Krab.",
    a2: "The wild west.",
    a3: "Sandy's treehouse.",
    a4: "Indoors."
};
var question8 = {
    q: "What did the pioneers used to ride for miles?",
    a1: "Sea horses.",
    a2: "Undercurrents.",
    a3: "Rocks.",
    a4: "Snails."
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
    $(".answers").click(function (){
        console.log("answersGuessed: "+answersGuessed)
    })




})


//initial set up of first page
function startPage() {
    console.log("answersGuessed:" + answersGuessed)
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

    if (count <= -1 && answersGuessed == 0) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The Correct answer was: Jellyfish Net.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/bkcbX8SqTCXHG/giphy.gif">')
        noAnswer++;
        pause1();
        return;
    }

    if (count <= -1 && answersGuessed == 1) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: Mayonnaise is not an instrument.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/H2GX5Ik1ILy5q/giphy.gif">')
        noAnswer++;
        pause2();
        return;
    }
    if (count <= -1 && answersGuessed == 2) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: I'm ugly and I'm proud!");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media0.giphy.com/media/hvMTGSBJOQiLS/giphy.gif">')
        noAnswer++;
        pause3();
        return;
    }
    if (count <= -1 && answersGuessed == 3) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: My leg! My leg!");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/yoJC2J9ftjg7eKtMSQ/giphy.gif">')
        noAnswer++;
        pause4();
        return;
    }
    if (count <= -1 && answersGuessed == 4) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: It was a carton of milk spilling onto a counter top.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media0.giphy.com/media/gQzoxR4vrBYg8/giphy.gif">')
        noAnswer++;
        pause5();
        return;
    }
    if (count <= -1 && answersGuessed == 5) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer: They go right to your thighs.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/K4x1ZL36xWCf6/giphy.gif">')
        noAnswer++;
        pause6();
        return;
    }
    if (count <= -1 && answersGuessed == 6) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: Indoors.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/OfXKySrn0Ej4s/giphy.gif">')
        noAnswer++;
        pause7();
        return;
    }
    if (count <= -1 && answersGuessed == 7) {
        stop();
        $("#question").text("Out of time!");
        $("#answer1").text("The correct answer was: Rocks.");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/3o6ZtemX3mjyCQZBEA/giphy.gif">')
        noAnswer++;
        pause8();
        return;

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
    setTimeout(function () {
        $(".answer").click(function () {
            if (answersGuessed == 0) {
                $("#question").text("Wrong you simpleton.");
                $("#answer1").text("The correct answer was Jellyfish Net.");
                $("#answer2").text("");
                $("#answer3").text("");
                $("#answer4").text("");
                console.log("local answers guessed: "+answersGuessed)
                $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/bkcbX8SqTCXHG/giphy.gif">')
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
    }, 1500)
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
    $(".image1").remove();


    $(".answer").click(function () {
        if (answersGuessed == 1) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was Mayonnaise is not an instrument.");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            console.log("local answers guessed: "+answersGuessed)
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/H2GX5Ik1ILy5q/giphy.gif">')
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
    $(".image1").remove();
    console.log("answersGuessed: " + answersGuessed)


    $(".answer").click(function () {
        if (answersGuessed == 2) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: "+question3.a4);
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            console.log("local answers guessed: "+answersGuessed)
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media0.giphy.com/media/hvMTGSBJOQiLS/giphy.gif">')
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
function slide4() {
   
    $("#question").text(question4.q)
    $("#answer1").text(question4.a1);
    $("#answer2").text(question4.a2);
    $("#answer3").text(question4.a3);
    $("#answer4").text(question4.a4);
    console.log("answersGuessed: " + answersGuessed)
    $(".image1").remove();

    $(".answer").click(function () {
        if (answersGuessed == 3) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: "+ question4.a4);
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            console.log("local answers guessed: "+answersGuessed)
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/yoJC2J9ftjg7eKtMSQ/giphy.gif">')
        }
    })

    $("#answer4").click(function () {
        if (answersGuessed == 3) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 3) {
            pause4();
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}
function pause4() {
    setTimeout(function () {
        console.log("pause4 function ran")
        slide5();


    }, 4000)
    answersGuessed++;
}
function slide5() {
  
    $("#question").text(question5.q)
    $("#answer1").text(question5.a1);
    $("#answer2").text(question5.a2);
    $("#answer3").text(question5.a3);
    $("#answer4").text(question5.a4);
    console.log("answersGuessed: " + answersGuessed)
    $(".image1").remove();

    $(".answer").click(function () {
        if (answersGuessed == 4) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: "+question5.a2);
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            console.log("local answers guessed: "+answersGuessed)
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media0.giphy.com/media/gQzoxR4vrBYg8/giphy.gif">')
        }
    })

    $("#answer2").click(function () {
        if (answersGuessed == 4) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 4) {
            pause5();
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}
function pause5() {
    setTimeout(function () {
        console.log("pause5 function ran")
        slide6();


    }, 4000)
    answersGuessed++;
}
function slide6() {
   
    $("#question").text(question6.q)
    $("#answer1").text(question6.a1);
    $("#answer2").text(question6.a2);
    $("#answer3").text(question6.a3);
    $("#answer4").text(question6.a4);
    console.log("answersGuessed: " + answersGuessed)
    
    $(".image1").remove();

    $(".answer").click(function () {
        if (answersGuessed == 5) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: "+question6.a3);
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/K4x1ZL36xWCf6/giphy.gif">')
            
        }
    })

    $("#answer3").click(function () {
        if (answersGuessed == 5) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 5) {
            pause6();
            console.log("local answers guessed: "+answersGuessed)
            console.log("local answers guessed WITH WINDOW: "+answersGuessed)
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}
function pause6() {
    setTimeout(function () {
        console.log("pause6 function ran")
        slide7();


    }, 4000)
    answersGuessed++;
}
function slide7() {
    
    $("#question").text(question7.q)
    $("#answer1").text(question7.a1);
    $("#answer2").text(question7.a2);
    $("#answer3").text(question7.a3);
    $("#answer4").text(question7.a4);
    console.log("answersGuessed: " + answersGuessed)
    $(".image1").remove();

    $(".answer").click(function () {
        if (answersGuessed == 6) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: "+question7.a4);
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/OfXKySrn0Ej4s/giphy.gif">')
        }
    })

    $("#answer4").click(function () {
        if (answersGuessed == 6) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }
    })
    $(".answer").click(function () {
        if (answersGuessed == 6) {
            pause7();
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}
function pause7() {
    setTimeout(function () {
        console.log("pause7 function ran")
        slide8();


    }, 4000)
    answersGuessed++;
}
function slide8() {
   
    $("#question").text(question8.q)
    $("#answer1").text(question8.a1);
    $("#answer2").text(question8.a2);
    $("#answer3").text(question8.a3);
    $("#answer4").text(question8.a4);
    console.log("answersGuessed: " + answersGuessed)
    $(".image1").remove();

    $(".answer").click(function () {
        if (answersGuessed == 7) {
            $("#question").text("Wrong you simpleton.");
            $("#answer1").text("The correct answer was: Rocks.");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            $("#imageDiv").append('<img class="image1 img-fluid" src="https://media.giphy.com/media/3o6ZtemX3mjyCQZBEA/giphy.gif">')
        }
    })

    $("#answer3").click(function () {
        if (answersGuessed == 7) {
            $("#question").text("Correct!");
            answersRight++;
            $("#answer1").text("");
            console.log("test: " + count)
        }

    })
    $(".answer").click(function () {
        if (answersGuessed == 7) {
            pause8()
        }
    })
    count = 30;
    intervalId = setInterval(timer, 1000);

}
function pause8() {
    setTimeout(function () {
        console.log("pause8 function ran")
        endSlide();


    }, 4000)
    answersGuessed++;
}

function endSlide() {
    $("#question").text("All done! Here's how you did:")
    $("#answer1").text("Correct Answers: " + answersRight);
    $("#answer2").text("Incorrect Answers: " + (8 - answersRight - noAnswer));
    $("#answer3").text("Unanswered: " + noAnswer);
    $("#answer4").text("Start Over?");
    $(".image1").remove();
    
    $("#answer4").click(function () {
        if (answersGuessed == 8) {
            location.reload();
            answersGuessed = 0;
            answersRight = 0;
            noAnswer = 0;
            count = 30;
            
            intervalId = setInterval(timer, 1000);
            slide1();
            
        }
    })
}
