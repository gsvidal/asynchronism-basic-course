function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));



//
function date(myCallback) {
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    myCallback(date);
  }, 4000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
//(Outputs may change), at this moment:
//2021-05-23T21:03:14.120Z
//2021-05-23T21:03:18.121Z



//The same example but with a named function (anotherCallbackFunction)
function date(myCallback) {
  console.log(new Date);
  setTimeout(anotherCallbackFunction, 4000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);

function anotherCallbackFunction() {
  let date = new Date;
  console.log(date);
}