// Scope Example
function showScope() {
    var localVar = 'I am a local variable';
    window.globalVar = 'I am a global variable';
    return localVar;
}

document.getElementById('scopeButton').addEventListener('click', () => {
    const localVar = showScope();
    const globalVar = window.globalVar;
    document.getElementById('scopeOutput').innerText = `Local Variable: ${localVar}, Global Variable: ${globalVar}`;
});

// IIFE Example
(function() {
    var iifeVar = 'I am an IIFE variable';
    document.getElementById('iifeOutput').innerText = iifeVar;
})();

document.getElementById('iifeButton').addEventListener('click', () => {
    document.getElementById('iifeOutput').innerText = 'IIFE already executed on page load';
});

// Array Methods: Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5];

document.getElementById('mapButton').addEventListener('click', () => {
    const mappedNumbers = numbers.map(num => num * 2);
    document.getElementById('arrayOutput').innerText = `Mapped Numbers: ${mappedNumbers}`;
});

document.getElementById('filterButton').addEventListener('click', () => {
    const filteredNumbers = numbers.filter(num => num > 2);
    document.getElementById('arrayOutput').innerText = `Filtered Numbers: ${filteredNumbers}`;
});

document.getElementById('reduceButton').addEventListener('click', () => {
    const reducedValue = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById('arrayOutput').innerText = `Reduced Value: ${reducedValue}`;
});

// Use of 'this'
const person = {
    name: 'Alice',
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

document.getElementById('thisButton').addEventListener('click', () => {
    document.getElementById('thisOutput').innerText = person.greet();
});
