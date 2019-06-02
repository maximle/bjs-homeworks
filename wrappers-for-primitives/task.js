function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    //return totalAmount;
  "use strict"
  date = new Date(date);
  let start = new Date(); // текущее время
  let n = date - start; // миллисекунды до даты
  n = Math.floor((n / 3.6e+6 / 24) / (365 / 12)); // месяцев до даты
  
  let returnToTheBank = amount - contribution;
  let P = (percent / 100) / 12;
  let monthlyPay = returnToTheBank * ( P + P / ( ( (1 + P)**n ) - 1 ) );
  let totalAmount = monthlyPay * n;
  console.log(totalAmount);
  return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    console.log(typeof name);
    name = name.replace(/^\s+|\s+$/g, '');
    console.log(name);
    if (name === '' || name === null || name === undefined) {
        name = 'Аноним';
    }; 
    greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}