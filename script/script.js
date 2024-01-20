// 1. Удвоение элементов массива:

// Условие: Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.map(number => number * 2);

console.log(result);

// 2. Преобразование строк в верхний регистр:

//  Условие: Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр.

const line = ["bike", "boat", "car", "bus", "train", "motorbike", "airplane"];

const resul = line.map(element => element.toUpperCase());

console.log(resul);

// 3. Вычисление суммы элементов:

// Условие: Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
array.forEach(x => {
    sum += x;
});

console.log(sum);

// 4. Удаление отрицательных чисел:

// Условие: Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.

const num = [1, -2, -3, 4, -5, -6, -7, 8, 9];

const res = num.filter(x => x > 0);

console.log(res);
