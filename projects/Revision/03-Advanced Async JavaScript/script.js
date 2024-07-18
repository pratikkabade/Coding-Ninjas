// Promise Example
function runPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 2000);
    });
}

document.getElementById('promiseButton').addEventListener('click', () => {
    runPromise().then((message) => {
        document.getElementById('promiseOutput').innerText = message;
    }).catch((error) => {
        document.getElementById('promiseOutput').innerText = `Error: ${error}`;
    });
});

// Fetch Example with Error Handling
document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('fetchOutput').innerText = `Fetched Data: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('fetchOutput').innerText = `Fetch error: ${error.message}`;
        });
});

// Chaining Multiple Promises
function firstPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('First Promise resolved');
        }, 1000);
    });
}

function secondPromise(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${message} -> Second Promise resolved`);
        }, 1000);
    });
}

document.getElementById('chainingButton').addEventListener('click', () => {
    firstPromise()
        .then(result => secondPromise(result))
        .then(finalResult => {
            document.getElementById('chainingOutput').innerText = finalResult;
        })
        .catch(error => {
            document.getElementById('chainingOutput').innerText = `Error: ${error}`;
        });
});

// Async/Await Example with Try/Catch
async function runAsyncAwait(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('asyncOutput').innerText = `Fetched Data: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById('asyncOutput').innerText = `Async/Await error: ${error.message}`;
    }
}

document.getElementById('asyncButton').addEventListener('click', () => {
    runAsyncAwait('');
});

document.getElementById('asyncButtonWrong').addEventListener('click', () => {
    runAsyncAwait('x');
});
