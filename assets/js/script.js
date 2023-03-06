//Setting variables
var body = document.body;
var header = document.createElement('header');
var highscores = document.createElement('span');
var timer = document.createElement('span')
var title = document.createElement('div');
var titleName = document.createElement('h1')
var instructions = document.createElement('h3')
var strtBtn = document.createElement('button')
var questions = [
    {
        question: 'Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?',
		answer1: '1. concat()',
		answer2: '2. pop()',
        answer3: '3. push()',
        answer4: '4. some()',
		correct: 'concat()'
    },
    {
        question: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
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
timer.textContent = 'Time: ';


//Appending elements
body.appendChild(header);
header.appendChild(highscores);
header.appendChild(timer);
body.appendChild(title);
title.appendChild(titleName);
title.appendChild(instructions);
title.appendChild(strtBtn);

//Setting Attributes to body elements.
title.setAttribute('style', 'margin:auto; width:50%; text-align:center;')
header.setAttribute('style', 'display:flex; justify-content:space-between;')
strtBtn.setAttribute('style', 'background-color:#000000; color:white; border-radius: 4px; padding: 14px 40px; font-size:16px;')

strtBtn.addEventListener ('click', function displayQuestion() {
    body.removeChild(title);
    var question1 = document.createElement('div');
    var answer1 = document.createElement('button');
    var answer2 = document.createElement('button');
    var answer3 = document.createElement('button');
    var answer4 = document.createElement('button');

    question1.textContent = questions[0].question;
	answer1.textContent = questions[0].answer1;
	answer2.textContent = questions[0].answer2;
	answer3.textContent = questions[0].answer3;
	answer4.textContent = questions[0].answer4;

    body.appendChild(question1);

    question1.setAttribute('style', 'font-size:25px; text-align:center; padding:50px')

    var answerText = [answer1, answer2, answer3, answer4]

    for (var i = 0; i < answerText.length; i++) {
        question1.appendChild(answerText[i])
        answerText[i].setAttribute('style', 'display:block; border-radius:20px; center; padding:10px 24px; margin:5px; background:#000000; color:white;')
    }
});
