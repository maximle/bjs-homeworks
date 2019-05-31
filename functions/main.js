function getSolutions( a, b, c ) {
  let D = b**2 - 4 * a * c;
  let result = {};
  let x1, x2;
  if (D < 0) {
    result.D = D;
  } else if (D === 0) {
    x1 = -b/(2 * a);
    result.roots = [x1];
    console.log(x1);
    result.D = D;
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D))/ (2 * a);
    x2 = (-b - Math.sqrt(D))/ (2 * a);
    result.roots = [x1, x2];
    console.log(result.roots);
    result.D = D;
  };
  return result;
};

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log("Вычисляем корни квадратного уравнения " + a + "x\u00B2 + " + b + "x + " + c);
  console.log("Значение дискриминанта: " + result.D);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D === 0) {
    console.log("Уравнение имеет один корень X₁ = " + result.roots[0]);
  } else if (result.D > 0) {
    console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + " X₂ = " + result.roots[1]);
  };
};

showSolutionsMessage(2, 4, 2);


let grades = {
  algebra: [2, 4, 5],
  geometry: [3, 3, 2],
  russian: [4, 4, 4, 5]
};

function getAverageScore(data) {
  let sum = 0;
  let avgGrades = {};
  for (let prop in data) {
    let value = data[prop];
    for (i = 0; i < value.length; i++) {
     sum = sum + value[i];
    };
    //console.log(sum);
    avgGrades[prop] = sum / value.length;
    sum = 0;
  };
  avgGradesValues = Object.values(avgGrades);
  avgGradesSum = 0;
  for (i = 0; i < avgGradesValues.length; i++) {
    avgGradesSum = avgGradesSum + avgGradesValues[i];
  };
  
  avgGrades.average = avgGradesSum / avgGradesValues.length;
  return avgGrades;
};

//console.log(Object.entries(grades.algebra))
console.log(getAverageScore(grades));

function getPersonData(secretData) {
  let names = {};
  for (let prop in secretData) {
    let value = secretData[prop];    
    if (prop === "aaa") {
      names.firstName = "";
      if (value === 0) {
        names.firstName = "Родриго";
      } else if (value === 1) {
        names.firstName = "Эмильо";
      }
    } else if (prop === "bbb") {
      names.lastName = "";
      if (value === 0) {
        names.lastName = "Родриго";
      } else if (value === 1) {
        names.lastName = "Эмильо";
      };
    };
  };  
  return names; 
};

let asd = {
  "aaa": 0,
  "bbb": 0
};

console.log(getPersonData(asd));