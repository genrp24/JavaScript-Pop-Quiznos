//Setting global variables
var body = document.body;
var header = document.createElement('header');
var highscores = document.createElement('span');
var timerEl = document.createElement('span', id='timer');
var totalTime = 60;
var title = document.createElement('div');
var titleName = document.createElement('h1');
var instructions = document.createElement('h3');
var strtBtn = document.createElement('button');
var questions = [
    {
        question: 'Which of the following functions of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?',
		answer1: '1. concat()',
		answer2: '2. pop()',
        answer3: '3. push()',
        answer4: '4. some()',
		correct: 'concat()'
    },
    {
        question: 'Which of the following functions of Array object extracts a section of an array and returns a new array?',
		answer1: '1. reverse()',
		answer2: '2. shift()',
        answer3: '3. slice()',
        answer4: '4. some()',
		correct: 'slice()' 
    },
    {
        question: 'Which built-in method returns the calling string value converted to lower case?',
		answer1: '1. toLowerCase()',
		answer2: '2. toLower()',
        answer3: '3. changeCase(case)',
        answer4: '4. None of the Above',
		correct: 'toLowerCase()' 
    }
];


//Adding text to body elements
highscores.textContent = 'View high scores';
titleName.textContent = 'JavaScript Quiz Game';
instructions.textContent = 'Try to answer the following JavaScript code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.';
strtBtn.textContent = 'Start Quiz'
timerEl.textContent = 'Timer: ' + totalTime;


//Appending elements
body.appendChild(header);
header.appendChild(highscores);
header.appendChild(timerEl);
body.appendChild(title);
title.appendChild(titleName);
title.appendChild(instructions);
title.appendChild(strtBtn);

//Setting Attributes to body elements.
title.setAttribute('style', 'margin:auto; width:50%; text-align:center;')
header.setAttribute('style', 'display:flex; justify-content:space-between;')
strtBtn.setAttribute('style', 'background-color:#000000; color:white; border-radius: 4px; padding: 14px 40px; font-size:16px;')

// Displays the timer in the header decreasing by 1 second
function countdown() {
    var timerId = setInterval(function() {
        totalTime--;
        timerEl.textContent = 'Timer: ' + totalTime + ' seconds remaining.';

        if(totalTime <= 0) {
            clearInterval(timerId);
            alert('Times Up')
            timerEl.textContent = 0;
        }
    }, 1000);
};

// Adds click event to start the timer once start button is clicked.
strtBtn.addEventListener('click', countdown);

// Starts the quiz by displaying the first question
strtBtn.addEventListener ('click', function displayQuestions() {
    // This removes the title, instructions, and start button in order to display the first question.
    body.removeChild(title);

    // Creates all elements that will render question 1 and answer options on the page.
    var question1 = document.createElement('div');
    var answer1 = document.createElement('button');
    var answer2 = document.createElement('button');
    var answer3 = document.createElement('button');
    var answer4 = document.createElement('button');

    // Assigns text taken from the 'questions' array located in the global variables. The '0' index indicates that the text was taken from the first object in that array.
    question1.textContent = questions[0].question;
	answer1.textContent = questions[0].answer1;
	answer2.textContent = questions[0].answer2;
	answer3.textContent = questions[0].answer3;
	answer4.textContent = questions[0].answer4;

    // Sets the attributes for the 'question1' div.
    question1.setAttribute('style', 'font-size:25px; text-align:center; padding:50px')

    //Appends the 'question1' div to the body of the document. At this step you should be able to see the question on the webpage.
    body.appendChild(question1);

    // Creates an array for all the answers to the first question that will be used in a for loop to prevent repeated code.
    var answerText = [answer1, answer2, answer3, answer4]

    //For loop appends all four answers to the 'question1' div and sets the style attributes for the answers. At this point you should see the four answer buttons displayed on the webpage.
    for (var i = 0; i < answerText.length; i++) {
        question1.appendChild(answerText[i])
        answerText[i].setAttribute('style', 'display:block; border-radius:20px; center; padding:10px 24px; margin:5px; background:#000000; color:white;')
    }
    
    // For loop adds a 10 second penalty for clicking one of the three incorrect answers. I just changed the index to start at the second index since the correct answer is the first index in the object.
    for (var i = 1; i < answerText.length; i++) {
        answerText[i].addEventListener('click', function penalize(){
            totalTime -= 10;
            timerEl.textContent = 'Timer: ' + totalTime + ' seconds remaining.';

            if(totalTime <= 0) {
                answerText[i].removeEventListener('click', penalize)
                clearInterval(timerId);
                alert('Times Up')
            }

        })
    };

    //Removes question1 when the correct answer is clicked.
    answer1.addEventListener('click', function clearQuestion1() {
        body.removeChild(question1);
    })

    //Displays the second question when the correct answer button is clicked.
    answer1.addEventListener('click', function displayQuestion2() {

    //Creates all elements that will render question 2 and answer options on the page.    
    var question2 = document.createElement('div');
    var answer1 = document.createElement('button');
    var answer2 = document.createElement('button');
    var answer3 = document.createElement('button');
    var answer4 = document.createElement('button');

    // Assigns text taken from the 'questions' array located in the global variables. The '1' index indicates that the text was taken from the second object in that array.
    question2.textContent = questions[1].question;
	answer1.textContent = questions[1].answer1;
	answer2.textContent = questions[1].answer2;
	answer3.textContent = questions[1].answer3;
	answer4.textContent = questions[1].answer4;

    // Sets the attributes for the 'question2' div.
    question2.setAttribute('style', 'font-size:25px; text-align:center; padding:50px');

    //Appends the 'question2' div to the body of the document. At this step you should be able to see the question on the webpage.
    body.appendChild(question2);

    //Creates an array for all the answers to the second question that will be used in a for loop to prevent repeated code.
    var answerText = [answer1, answer2, answer3, answer4]

    //For loop appends all four answers to the 'question2' div and sets the style attributes for the answers. At this point you should see the four answer buttons displayed on the webpage.
    for (var i = 0; i < answerText.length; i++) {
        question2.appendChild(answerText[i])
        answerText[i].setAttribute('style', 'display:block; border-radius:20px; center; padding:10px 24px; margin:5px; background:#000000; color:white;')
    }

    //Sets a local variable of incorrect answers to use in a for loop that will add a 10 second penalty if clicked.
    var wrongAnswers = [answer1, answer2, answer4]

    //For loop that adds a ten second penalty to the timer for the three incorrect answers.
    for (var i = 0; i < wrongAnswers.length; i++) {
        wrongAnswers[i].addEventListener('click', function penalize(){
            totalTime -= 10;
            timerEl.textContent = 'Timer: ' + totalTime + ' seconds remaining.';

            if(totalTime <= 0) {
                wrongAnswers[i].removeEventListener('click', penalize)
                clearInterval(timerId);
                alert('Times Up')
            }

        })
    };

    //Removes question2 when the correct answer is clicked.
    answer3.addEventListener('click', function clearQuestion2() {
        body.removeChild(question2);
    })

    //Displays the third question when the correct answer button is clicked.
    answer3.addEventListener('click', function displayQuestion3(){

    //Creates all elements that will render question 3 and answer options on the page.    
    var question3 = document.createElement('div');
    var answer1 = document.createElement('button');
    var answer2 = document.createElement('button');
    var answer3 = document.createElement('button');
    var answer4 = document.createElement('button');

    // Assigns text taken from the 'questions' array located in the global variables. The '2' index indicates that the text was taken from the third object in that array.
    question3.textContent = questions[2].question;
	answer1.textContent = questions[2].answer1;
	answer2.textContent = questions[2].answer2;
	answer3.textContent = questions[2].answer3;
	answer4.textContent = questions[2].answer4;

    // Sets the attributes for the 'question3' div.
    question3.setAttribute('style', 'font-size:25px; text-align:center; padding:50px');

    //Appends the 'question3' div to the body of the document. At this step you should be able to see the question on the webpage.
    body.appendChild(question3);

    //Creates an array for all the answers to the third question that will be used in a for loop to prevent repeated code.
    var answerText = [answer1, answer2, answer3, answer4]

    //For loop appends all four answers to the 'question3' div and sets the style attributes for the answers. At this point you should see the four answer buttons displayed on the webpage.
    for (var i = 0; i < answerText.length; i++) {
        question3.appendChild(answerText[i])
        answerText[i].setAttribute('style', 'display:block; border-radius:20px; center; padding:10px 24px; margin:5px; background:#000000; color:white;')
    };

    //Event listener that clears question3 if the correct answer is clicked
    answer1.addEventListener('click', function clearQuestion3() {
        body.removeChild(question3);
    });

    //// For loop adds a 10 second penalty for clicking one of the three incorrect answers. I just changed the index to start at the second index since the correct answer is the first index in the object.
    for (var i = 1; i < answerText.length; i++) {
        answerText[i].addEventListener('click', function penalize(){
            totalTime -= 10;
            timerEl.textContent = 'Timer: ' + totalTime + ' seconds remaining.';

            if(totalTime <= 0) {
                answerText[i].removeEventListener('click', penalize)
                clearInterval(timerId);
                alert('Times Up')
            }

        })
    };

    // Displays the end of the quiz if the correct answer is chosen.
    answer1.addEventListener('click', function displayQuizEnd(){
        var end = document.createElement('div');
        var endText = document.createElement('h2');

        endText.textContent = "All done!"

        body.appendChild(end);
        end.appendChild(endText);

    });
    })
    })
});