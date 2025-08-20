//Promise
/*const promise = new Promise((resolve, reject) => {
  const allWentWell = true;
  if (allWentWell) {
    resolve('All things went well!');
  } else {
    reject('Oop! Something went wrong!');
  }
});*/

//Pending
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (randomNumber < 4) {
      resolve('Well Done! You Guessed Right!');
    } else {
      reject('Oops! You Guessed Wrong! Unlucky.');
    }
  });
});
console.log(promise);
