// DOM Event Handlers
const output = document.getElementById('output')
document.getElementById('clickButton').addEventListener('click', () => {
    output.innerText = 'Button clicked!';
});

document.getElementById('textInput').addEventListener('input', (event) => {
    output.innerText = `Input changed: ${event.target.value}`;
});

document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    document.getElementById('hoverDiv').style.backgroundColor = 'lightgreen';
    output.innerText = 'Hovered over the div!';
});

document.getElementById('selectBox').addEventListener('change', (event) => {
    output.innerText = `Selected: ${event.target.value}`;
});

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = document.getElementById('formInput').value;
    output.innerText = `Form submitted with input: ${formData}`;
});

// Async JavaScript
document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        document.getElementById('fetchOutput').innerText = `Fetched Data: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById('fetchOutput').innerText = `Error: ${error.message}`;
    }
});

// DOM Manipulation
document.getElementById('appendChildButton').addEventListener('click', () => {
    const newChild = document.createElement('div');
    newChild.innerText = 'New Child Element';
    newChild.style.marginTop = '10px';
    newChild.style.padding = '5px';
    newChild.style.border = '1px solid #000';
    document.getElementById('parentDiv').appendChild(newChild);
});

// Timers
setTimeout(() => {
    document.getElementById('timerOutput').innerText = 'This message appears after 3 seconds.';
}, 3000);

let intervalCounter = 0;
const intervalId = setInterval(() => {
    intervalCounter++;
    document.getElementById('timerOutput').innerText = `Interval counter: ${intervalCounter}`;
    if (intervalCounter >= 5) {
        clearInterval(intervalId);
        document.getElementById('timerOutput').innerText += ' (Interval stopped)';
    }
}, 1000);

// Callback Function
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched after 2 seconds');
    }, 2000);
}

document.getElementById('callbackButton').addEventListener('click', () => {
    fetchData((data) => {
        document.getElementById('callbackOutput').innerText = data;
    });
});

function a(callback) {
    setTimeout(() => {
        console.log('a');
        callback();
    }, 3000);
}
function b() {
    console.log(b);
}
a(b)

// Cards
const Cards = document.querySelector('.cards')

function getData(id) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://dummyjson.com/users/${id}`);
    request.send();
    request.addEventListener('load', function () {
        // Not found
        if (request.status === 404) {
            console.log(`NOT Found: ${id}`)
            return
        };

        // Function call
        const data = JSON.parse(this.responseText)
        displayUser(data, id)
    })
}

// Function to add card
function displayUser(data, id) {
    const Card = `<div class='card'>
            <img src="${data.image}"/>
            <h3>${id}:${data.firstName}, ${data.lastName}</h3>
        </div>`
    Cards.insertAdjacentHTML('beforeend', Card)
}

for (i = 0; i <= 10; i++) {
    getData(i)
}