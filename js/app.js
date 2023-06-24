// Assignment 1 | COMP1073 Client-Side JavaScript

/* Preset Sound Part
-------------------------------------------------- */

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// const speakButton = document.querySelector('button');
// let textToSpeak = 'button';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.addEventListener('click', function () {
// 	speakNow(textToSpeak);
// });


/* 5 String Arrays of the column texts
-------------------------------------------------- */
colItems1 = [
	"The turkey",
	"Mom",
	"Dad",
	"The dog",
	"My teacher",
	"The elephant",
	"The cat"
];

colItems2 = [
	"sat on",
	"ate",
	"danced with",
	"saw",
	"doesn't like",
	"kissed"
];

colItems3 = [
	"a funny",
	"a scary",
	"a goofy",
	"a slimy",
	"a barking",
	"a fat"
];

colItems4 = [
	"goat",
	"monkey",
	"fish",
	"cow",
	"frog",
	"bug",
	"worm"
];

colItems5 = [
	"on the moon",
	"on the chair",
	"in my spaghetti",
	"in my soup",
	"on the grass",
	"in my shoes"
];

/* 5 String Arrays of the column images
-------------------------------------------------- */

colImage1 = [
	"./images/c1-turkey.svg",
	"./images/c1-mom.svg",
	"./images/c1-dad.svg",
	"./images/c1-dog.svg",
	"./images/c1-teacher.svg",
	"./images/c1-elephant.svg",
	"./images/c1-cat.svg"
];

colImage2 = [
	"./images/c2-sat.svg",
	"./images/c2-ate.svg",
	"./images/c2-dance.svg",
	"./images/c2 - saw.svg",
	"./images/c2-dontlike.svg",
	"./images/c2-kiss.svg"
];

colImage3 = [
	"./images/c3-funny.svg",
	"./images/c3-scary.svg",
	"./images/c3-goofy.svg",
	"./images/c3-slimy.svg",
	"./images/c3-barking.png",
	"./images/c3-fat.svg"
];

colImage4 = [
	"./images/c4-goat.svg",
	"./images/c4-monkey.svg",
	"./images/c4-fish.svg",
	"./images/c4-cow.svg",
	"./images/c4-frog.svg",
	"./images/c4-bug.svg",
	"./images/c4-worm.svg"
];

colImage5 = [
	"./images/c5-moon.svg",
	"./images/c5-chair.svg",
	"./images/c5-spaghetti.svg",
	"./images/c5-soup.svg",
	"./images/c5-grass.svg",
	"./images/c5-shoe.svg"
];


/* Variables
-------------------------------------------------- */
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const column3 = document.getElementById("column3");
const column4 = document.getElementById("column4");
const column5 = document.getElementById("column5");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const btnPlay = document.getElementById("btnPlay");
const btnRandom = document.getElementById("btnRandom");
const btnReset = document.getElementById("btnReset");

const storyOutput = document.getElementById("storyOutput");

/* Mapping
-------------------------------------------------- */
const col1Data = {
	order: 0,
	items : colItems1,
	images: colImage1,
	column: column1
}

const col2Data = {
	order: 1,
	items : colItems2,
	images: colImage2,
	column: column2
}
const col3Data = {
	order: 2,
	items : colItems3,
	images: colImage3,
	column: column3
}
const col4Data = {
	order: 3,
	items : colItems4,
	images: colImage4,
	column: column4
}
const col5Data = {
	order: 4,
	items : colItems5,
	images: colImage5,
	column: column5
}

/* Story Array
-------------------------------------------------- */
var resultStory = ["","","","",""];

/* Functions
-------------------------------------------------- */

// Function that select a random word from the array
function selectRandomNum(arr){	
	let randomNum = Math.floor( Math.random() * arr.length );
	return randomNum;
}

// Function that select a word and image from the array
function selectedItem(num, obj){
	// Play sounds
	let textToSpeak = obj.items[num];
	speakNow(textToSpeak);
	
	// Change item css
	let selectedItemDiv = obj.column.getElementsByClassName("item-container")[num];
	selectedItemDiv.style.opacity = 1;
	
	console.log(textToSpeak);
	return(textToSpeak);
}

function selectedColumnActions(obj){
	let randomNum = selectRandomNum(obj.items);
	let randomWord =  selectedItem(randomNum, obj);
	
	// Update story
	resultStory[obj.order] = randomWord;
	console.log(resultStory);
	storyOutput.innerHTML = resultStory.join(" ") + ".";
}

btn1.addEventListener("click", ()=>{
	selectedColumnActions(col1Data);
});

btn2.addEventListener("click", ()=>{
	selectedColumnActions(col2Data);
});

btn3.addEventListener("click", ()=>{
	selectedColumnActions(col3Data);
});

btn4.addEventListener("click", ()=>{
	selectedColumnActions(col4Data);
});

btn5.addEventListener("click", ()=>{
	selectedColumnActions(col5Data);
});

btnPlay.addEventListener("click", ()=>{
	let story = storyOutput.innerHTML;
	speakNow(story);
});

btnRandom.addEventListener("click", ()=>{
	let story = storyOutput.innerHTML;
	speakNow(story);
});