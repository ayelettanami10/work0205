//EX1:

for (let i = 12; i <= 24; i++) {
    console.log('EX1 ' + i);
}

//EX2:
for (let i = 7; i <= 31; i++) {
    if (i % 2 !== 0) {
        console.log('EX2 ' + i);
    }
    

}

//EX3:
for (let i = 10; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log('EX3 ' + i);
    }
    

}

//EX4:
for (let i = 1; i <= 45; i++) {
    if (i % 3 == 0) {
        console.log(i + " Fizz");
    }
    else if(i % 5 == 0){
        console.log(i + " Buzz");
    }
    else if(i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FizzBuzz");
    }
    
}

//EX5:

function calculateSum(numbersArray) {
    let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

const numbersArray = [1, 13, 22, 123, 49, 34, 5, 24, 57, 45];
const totalSum = calculateSum(numbersArray);

console.log("The sum of all numbers in the array is: " + totalSum);

//EX6:

function removeProperty(students, property) {
    students.forEach(student => {
      if (student.hasOwnProperty(property)) {
        delete student[property];
      }
    });
    return students;
  }
  
  function printStudentAttributes(students) {
    students.forEach(student => {
      console.log(`First Name: ${student['First Name']}`);
      console.log(`Last Name: ${student['Last Name']}`);
      console.log(`Age: ${student.age}`);
      console.log(`Country: ${student.Country}`);
      console.log(`City: ${student.City}`);
      console.log("----------------------");
    });
  }
  
  let students = [
    { 'First Name': 'Ayelet', 'Last Name': 'Tanami', age: 21, Country: 'USA', City: 'Miami', GPA: 3.8 },
    { 'First Name': 'Bob', 'Last Name': 'Johnson', age: 22, Country: 'Canada', City: 'Toronto' },
    { 'First Name': 'Roni', 'Last Name': 'Brown', age: 45, Country: 'Israel', City: 'Jerusalem', GPA: 3.5 }
  ];
  
  removeProperty(students, 'GPA');

  printStudentAttributes(students);

//EX7:

const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  function printCats(animals) {
    animals.forEach(animal => {
      if (animal.animalType === "cat") {
        console.log(animal.animalType);
      }
    });
  }
  
  function printDog(animals) {
    animals.forEach(animal => {
      if (animal.animalType === "dog") {
            console.log(animal.animalType);
      }
    });
  }
  
  printCats(ourPets);
  printDog(ourPets);
  
//EX8:

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding']
  };
  
  function printStudentData(student) {
    for (const key in student) {
      console.log(`${key}: ${student[key]}`);
    }
  }
  
  function addHobby(student, hobby) {
    student.hobbies.push(hobby);
  }
  
  function deleteHobby(student, hobby) {
    const index = student.hobbies.indexOf(hobby);
    if (index !== -1) {
      student.hobbies.splice(index, 1);
    }
  }
  
  student.family_name = 'Doe';

  console.log('Student Data Before Adding Hobby:');
  printStudentData(student);
  
  addHobby(student, 'swimming');
  
  console.log('\nStudent Data After Adding Hobby:');
  printStudentData(student);
  
  deleteHobby(student, 'play');

  console.log('\nStudent Data After Deleting Hobby:');
  printStudentData(student);

//EX9:

let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
  }
  
  printArray(arr);

//EX10:

let arr10 = [
    [0, 1, 1],
    [0, 1, 0],
    [1, 0, 0]
  ];
  
  function countZeros(arr) {
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          zeroCount++;
        }
      }
    }
  
    return zeroCount;
  }
  
  let zeroCount = countZeros(arr10);
  console.log(zeroCount);

//EX11:
let arr20 = [4, 2, 34, 4, 1, 12, 1, 4];

function findDup(arr) {
  let duplicates = [];
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  for (const key in counts) {
    if (counts[key] > 1) {
      duplicates.push(parseInt(key));
    }
  }

  return duplicates;
}

console.log(findDup(arr20));

//EX12:

let arr30 = [43, "what", 9, true, "cannot", false, "be", 3, true];

function reverseArray(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

console.log(reverseArray(arr30));

//EX13:

let arr40 = [4, 6, 7];
let arr50 = [8, 1, 9];

function addArrays(arr1, arr2) {
  let sumArray = [];

  for (let i = 0; i < arr1.length; i++) {
    sumArray.push(arr1[i] + arr2[i]);
  }

  return sumArray;
}

console.log(addArrays(arr40, arr50));

//EX14:

let str1 = "racecar";
let str2 = "Java";

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log("string1 palindrome?:");
console.log(isPalindrome(str1) ? "Yes" : "No");

console.log("string2 palindrome?:");
console.log(isPalindrome(str2) ? "Yes" : "No");

//EX15:

let counter = 1;

while (counter < 100) {
  counter *= 2;
}

console.log(counter);

//EX16:

let counter2 = 900000;

while (counter2 > 50) {
  counter2 /= 2;
}

console.log(counter2);

//EX17:

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames = [];
let index = 0;

while (index < names.length) {
  copiedNames.push(names[index]);
  index++;
}

console.log(copiedNames);

//EX18:

let names1 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames1 = [];
let index1 = 0;
let foundPete = false;

while (index1 < names1.length) {
  if (names1[index1] === 'Pete') {
    foundPete = true;
  }
  
  if (!foundPete) {
    copiedNames1.push(names1[index1]);
  }

  index1++;
}

console.log(copiedNames1);

//EX19:

let array = [true, false, false, true, true, false];
let index60 = 0;
let foundIndex = -1;

while (index60 < array.length - 1) {
  if (array[index60] !== array[index60 + 1]) {
    index60++;
  } else {
    foundIndex = index60;
    break;
  }
}

if (foundIndex !== -1) {
  console.log(foundIndex);
} else {
  console.log(-1);
}