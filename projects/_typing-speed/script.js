//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
// const sentences = 
//   `The quick brown fox jumps over the lazy dog.
//   Sphinx of black quartz, judge my vow.
//   Pack my box with five dozen liquor jugs.
//   How vexingly quick daft zebras jump!`
// ;

// const startButton = document.getElementById("start-btn");
//         const inputField = document.getElementById("input");
//         const sentenceDisplay = document.getElementById("sentence");
//         const timerDisplay = document.getElementById("timer");
//         const resultDiv = document.getElementById("result");

//         let timer;
//         let startTime;
//         let correctWords = 0;
//         let totalCharacters = 0;

//         function startTest() {
//             startButton.disabled = true;
//             inputField.disabled = false;
//             sentenceDisplay.textContent = sentences;
//             resultDiv.style.display = "none";

//             // Start the timer
//             startTime = Date.now();
//             timer = setInterval(updateTimer, 1000);
//         }

//         function updateTimer() {
//             const currentTime = Date.now();
//             const elapsedTime = Math.floor((currentTime - startTime) / 1000);
//             const remainingTime = 30 - elapsedTime;

//             if (remainingTime <= 0) {
//                 clearInterval(timer);
//                 showResult();
//             } else {
//                 timerDisplay.textContent = `Time remaining: ${remainingTime} seconds`;
//             }
//         }

//         function showResult() {
//             inputField.disabled = true;
//             const typedWords = inputField.value.trim().split(/\s+/).length;
//             correctWords = getCorrectWords(typedWords);
//             totalCharacters = inputField.value.length;

//             const speed = Math.round((correctWords / 30) * 60);
//             const accuracy = Math.round((correctWords / totalCharacters) * 100);

//             document.getElementById("speed").textContent = speed;
//             document.getElementById("accuracy").textContent = accuracy;
//             resultDiv.style.display = "block";
//         }

//         function getCorrectWords(typedWords) {
//             const referenceWords = sentences.split(/\s+/);
//             let correctCount = 0;

//             for (let i = 0; i < typedWords; i++) {
//                 if (inputField.value.trim().split(/\s+/)[i] === referenceWords[i]) {
//                     correctCount++;
//                 }
//             }

//             return correctCount;
//         }

//         startButton.addEventListener("click", startTest);
//         document.getElementById("retry-btn").addEventListener("click", () => {
//             startButton.disabled = false;
//             inputField.value = "";
//             inputField.disabled = true;
//             resultDiv.style.display = "none";
//         });

const sentences = 
  `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`
;

let currentSentenceIndex = 0;
let startTime, endTime;
let timerInterval;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");


function startTest() {
  sentenceElement.innerHTML = sentences;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  setTimeout(endTest, 30000); // End the test after 30 seconds
}




function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const remainingTime = 30 - elapsedTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}




function endTest() {
  clearInterval(timerInterval);
  endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  const typedSentence = inputElement.value.trim();
  const correctSentence = sentenceElement.textContent.trim();
  
  let speed = 0;
  let typedWords = [];
  if(typedSentence != ""){
    typedWords = typedSentence.split(" ");
  }
  
  const correctWords = correctSentence.split(" ");
  console.log(correctWords);
  let correctCount = 0;
  let ind =0;
  typedWords.forEach((word, index) => {
    if (word === correctWords[index]) {
      correctCount++;
      ind =index;
    }
  });
  if(typedSentence != ""){
    speed = Math.floor(((correctCount) / 30) * 60);
  }
  const accuracy = (correctCount / correctWords.length  ) * 100;
  speedElement.textContent = speed;
  accuracyElement.textContent = accuracy.toFixed(2);
  resultElement.style.display = "block";
  retryButton.focus();
}




startButton.addEventListener("click", startTest);



retryButton.addEventListener("click", () => {
  resultElement.style.display = "none";
  startButton.disabled = false;
  inputElement.value = "";
});



document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.textContent = '<- go back';
  button.addEventListener('click', function () {
      window.location.href = '../index.html'; // Replace with your desired URL
  });
  document.body.appendChild(button);
});
