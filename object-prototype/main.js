function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
  let targetYear = new Date(birthday).getFullYear();
  let now =+new Date();
  let date = +new Date(birthday);
  console.log(date);
  let diff = now - date;
  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };
  let k = 0;
  for (let y = targetYear; y <= new Date().getFullYear(); y++) {
    if (isLeapYear(y) === true) {
      k = k + 1;
    };
  };
  let age = diff/3.6e+6 / 24 + k;
  console.log(k);
  age = (age - age % 365) / 365;
  console.log(age, 'asd');
  let result = age > 18;

  return result;
};

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
  let result
  let sound = animal.sound;
  if (sound === undefined) {
    result = null;
  } else if (sound != undefined) {
    result = sound;    
  }
  return result;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
  let sum = 0;  
  console.log(marks);
  for (i = 0; i < marks.length; i++) {
    sum = sum + (+marks[i]);
  };
  let average = sum / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
};