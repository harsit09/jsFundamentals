Here is the edited code in a `.js` file format:

```
// async-example.js

/**
 * Async in JavaScript refers to the ability to write code that can execute multiple tasks concurrently,
 * improving the overall performance and responsiveness of an application.
 */

// Using Callbacks
function callbackExample() {
  setTimeout(function() {
    console.log('Callback executed after 2 seconds');
  }, 2000);
}

callbackExample();

// Using Promises
function promiseExample() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved after 2 seconds');
    }, 2000);
  }).then((message) => console.log(message));
}

promiseExample();

// Using Async/Await
async function asyncAwaitExample() {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Async/await executed after 2 seconds');
      }, 2000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

asyncAwaitExample();
```