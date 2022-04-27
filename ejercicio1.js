const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

let double = arr.map((arrnums) => arrnums * 2);
console.log(double);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

let evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// utilizar el método reduce para sumar todos los elementos
// 21

let sum = arr.reduce((initNum, count) => initNum + count);
console.log(sum);
