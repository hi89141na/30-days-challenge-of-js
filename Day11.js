//! Day 11: Promises and Async/Await
//! Tasks/Activities:
//todo Activity 1: Understanding Promises
//* Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
myPromise.then((message) => {
    console.log(message);
});

//* Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");
    }, 2000);

});
myPromise2.catch((error) => {
    console.error(error);
});
//todo Activity 2: Chaining Promises
//* Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
let pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Step 1: Fetching User Data from Server');
        resolve("User Data");
    }, 2000);
});
let pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Step 2: Fetching Product Data from Server');
        resolve("Product Data");
    }, 2000);
});
let pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Step 3: Fetching Order Data from Server');
        resolve("Order Data");
    }, 2000);
});
pro1.then((result) => {
    console.log(`Result 1: ${result}`);
    return pro2;
}).then((result) => {
    console.log(`Result 2: ${result}`);
    return pro3;
}).then((result) => {
    console.log(`Result 3: ${result}`);
}).catch((error) => {
    console.error(error);
});

//todo Activity 3: Using Async/Await
//* Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
let promise = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Promise resolved Successfully');
    }, 2000);
});
async function task4() {
    try {
        let result = await promise;
        console.log(result);
    }
    catch (err) {
        console.error(err);
    }
}
task4();
//* Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
let errPromise = new Promise((reject) => {
    setTimeout(() => {
        reject("some error occurred");
    }, 3000);
});
async function task5() {
    try {
        let result = await errPromise;
        console.log(result);
    }
    catch (err) {
        console.error(err);
    }
}
task5();
//todo Activity 4: Fetching Data from an API
//* Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiURL = 'https://jsonplaceholder.typicode.com/posts/2';
function fetchData() {
    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log('Fetched data:', data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchData();

//* Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData2() {
    try {
        const result = await fetch(apiURL);
        if (!result.ok) {
            throw new Error('Network response was not ok ' + result.statusText);
        }
        const data = await result.json();
        console.log('Fetched data:', data);
    }
    catch (err) {
        console.error('There was a problem with the fetch operation:', err);
    }
}
fetchData2();
//todo Activity 5: Concurrent Promises
//* Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000);
});
Promise.all([promise1, promise2, promise3]).then(values => {console.log(values);});

//* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('First resolved promise:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });