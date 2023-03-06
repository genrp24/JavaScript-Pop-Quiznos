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
		answer1: 'concat()',
		answer2: 'pop()',
        answer3: 'push()',
        answer4: 'some()',
		correct: 'concat()'
    },
    {
        question: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
		answer1: 'reverse()',
		answer2: 'shift()',
        answer3: 'slice()',
        answer4: 'some()',
		correct: 'slice()' 
    },
    {
        question: 'Which built-in method returns the calling string value converted to lower case?',
		answer1: 'toLowerCase()',
		answer2: 'toLower()',
        answer3: 'changeCase(case)',
        answer4: 'None of the Above',
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

function displayQuestion1() {

}