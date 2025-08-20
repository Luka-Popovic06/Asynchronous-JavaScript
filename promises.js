//Promise
/*const promise = new Promise((resolve, reject) => {
  const allWentWell = true;
  if (allWentWell) {
    resolve('All things went well!');
  } else {
    reject('Oop! Something went wrong!');
  }
});*/
/*
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
console.log(promise);*/
const promise = new Promise((resolve, reject) => {
  resolve('Well Done! Promise One is Resolve');
});
const promiseTwo = new Promise((resolve, reject) => {
  resolve('Well Done! Promise Two is Resolve');
});
const promiseThree = new Promise((resolve, reject) => {
  reject('Promise Three is Rejected. Unlucky!');
});
promise
  .then(value => {
    console.log(value);
    return promiseTwo;
  })
  .then(value => {
    console.log(value);
    return promiseThree;
  })
  .catch(error => {
    console.log(error);
  });
