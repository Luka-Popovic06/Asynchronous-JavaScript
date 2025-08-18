// 1.Synchronous (Synchronous Programming)!(jedno za drugim,liniju po liniju se izvrsava)
console.log('1. Preheat the oven to 350°F (180°C).');
console.log('2. Chop half the chocolate into chunks & melt in microwave.');
console.log('3. Mix butter & sugar.');
console.log('4. Beat in the eggs and vanilla for 1-2 minutes.');
console.log('5. the melted chocolate.');
console.log(
  '6. Fold in the other half of chocolate chunks, then transfer the batter to baking dish.'
);
console.log('7. Bake for 20-25 minutes,then let cool completely.');
console.log('8. slice, serve & enjoy!');

/*isti princip samo sto se ne prikazuje redosledom kojim smo napisali
prvo se prikaze 8. 1. 3. itd. 
*/
/*setTimeout(() => {
  console.log('1. Preheat the oven to 350°F (180°C).');
}, 1000);
setTimeout(() => {
  console.log('2. Chop half the chocolate into chunks & melt in microwave.');
}, 2000);
setTimeout(() => {
  console.log('3. Mix butter & sugar.');
}, 1500);
setTimeout(() => {
  console.log('4. Beat in the eggs and vanilla for 1-2 minutes.');
}, 3000);
setTimeout(() => {
  console.log('5. the melted chocolate.');
}, 4000);
setTimeout(() => {
  console.log(
    '6. Fold in the other half of chocolate chunks, then transfer the batter to baking dish.'
  );
}, 3500);
setTimeout(() => {
  console.log('7. Bake for 20-25 minutes,then let cool completely.');
}, 1800);
setTimeout(() => {
  console.log('8. slice, serve & enjoy!');
}, 500);*/
//
function task1(callback) {
  setTimeout(() => {
    console.log('1. Preheat the oven to 350°F (180°C).');
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log('2. Chop half the chocolate into chunks & melt in microwave.');
    callback();
  }, 2000);
}
function task3(callback) {
  setTimeout(() => {
    console.log('3. Mix butter & sugar.');
    callback();
  }, 1500);
}
function task4(callback) {
  setTimeout(() => {
    console.log('4. Beat in the eggs and vanilla for 1-2 minutes.');
    callback();
  }, 3000);
}
function task5(callback) {
  setTimeout(() => {
    console.log('5. the melted chocolate.');
    callback();
  }, 4000);
}
function task6(callback) {
  setTimeout(() => {
    console.log(
      '6. Fold in the other half of chocolate chunks, then transfer the batter to baking dish.'
    );
    callback();
  }, 3500);
}
function task7(callback) {
  setTimeout(() => {
    console.log('7. Bake for 20-25 minutes,then let cool completely.');
    callback();
  }, 1800);
}
function task8(callback) {
  setTimeout(() => {
    console.log('8. slice, serve & enjoy!');
    callback();
  }, 500);
}
