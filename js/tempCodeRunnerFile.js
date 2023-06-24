-------------------------------------------------- */
// // Create a new speechSynthesis object
// const synth = window.speechSynthesis;
// // Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// const speakButton = document.querySelector('button');
// let textToSpeak = 'This is the text string that you will generate with your script';

// /* Functions
// -------------------------------------------------- */
// function speakNow(string) {
// 	// Create a new speech object, attaching the string of text to speak
// 	const utterThis = new SpeechSynthesisUtterance(string);
// 	// Actually speak the text
// 	synth.speak(utterThis);
// }

// /* Event Listeners
// -------------------------------------------------- */
// // The click event handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.addEventListener('click', function () {
// 	speakNow(textToSpeak);
// });