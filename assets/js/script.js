//Setting variables
var body = document.body;
var header = document.createElement('header');
var highscores = document.createElement('span');
var timer = document.createElement('span')
var title = document.createElement('div');
var titleName = document.createElement('h1')
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
        question: '',
		answer1: '',
		answer2: '',
        answer3: '',
        answer4: '',
		correct: '' 
    },
    {
        question: '',
		answer1: '',
		answer2: '',
        answer3: '',
        answer4: '',
		correct: '' 
    },
    {
        question: '',
		answer1: '',
		answer2: '',
        answer3: '',
        answer4: '',
		correct: '' 
    },
    {
        question: '',
		answer1: '',
		answer2: '',
        answer3: '',
        answer4: '',
		correct: '' 
    },
];


//Adding text to body elements
highscores.textContent = 'View high scores';
titleName.textContent = 'JavaScript Quiz Game';
timer.textContent = 'Time: ';


//Appending elements
body.appendChild(header);
header.appendChild(highscores);
header.appendChild(timer);
body.appendChild(title);
title.appendChild(titleName);

//Setting Attributes to body elements.
titleName.setAttribute('style', 'margin:auto; width:50%; text-align:center;')
header.setAttribute('style', 'display:flex; justify-content:space-between;')