

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    "use strict"

    let D = (b**2) - 4*a*c;
    let x1, x2, x;
    let x12 = [];
    if (D > 0) {
        x1 = (-b + (D**(0.5)))/(2*a);
        x2 = (-b - (D**(0.5)))/(2*a);
        console.log(x1. x2);
        x12.push(x1, x2);
        x = x12
        console.log(x1, x2, x12);
    } else if (D === 0) {
        x = -b/(2*a);
        console.log(x);
    } else if (D < 0) {
        console.log('Уравнение не имеет корней');
        x = 'Уравнение не имеет корней';
    };

    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
    let result = '';
    now = (new Date()).getFullYear();
    age = now - dateOfBirthday.getFullYear();
    if (age >= 18) {
       result = 'Не желаете ли олд-фэшн, ' + name + '?';
    } else if (age < 18) {
      result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    };
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
    //let marks = [];
    if (marks.length > 5) {
        console.log('Введено больше пяти оценок\nОбрезаем массив');
        marks.splice(5, (marks.length - 5));
    };
    
    let marksSum = 0;
    let avgMark = 0;

    for (i = 0; i < marks.length; i++) {
      marksSum = marksSum + marks[i];   
    };
    avgMark = marksSum/marks.length;
    return avgMark;
}
