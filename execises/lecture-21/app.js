var fruits = 'apple banana cantaloupe blueberries grapefruit';

// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
console.log(fruits);
fruits = Array.from(fruits);
console.log(fruits);

// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for(let j = 0; j < fruits.length; j++) {
	console.log(fruits[j]);
}

// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let d = 0;
while( d < fruits.length ) {
	console.log(fruits[d]);
	d++;
}

// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let c = 0;
do {
	console.log(fruits[c]);
	c++;
} while(d < (fruits.length -1));


// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
let name = 0;
for(let name of fruits) {
	console.log(name);
}
// Маємо масив Numbs.
console.clear();
const Numbs = [1,2,3,4,5,6,7,8,9,10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
for(let j = 1; j < 10; j=j+2) {
	console.log(Numbs[j]);
}

// Маємо масив names:
var  names = ['Batman'];
// Додати 'Joker' в кінець масиву names:
names.push('Joker');
console.log(names);
// Маємо масив names:
// const names = ['Batman'];
// Додати 'Joker' на початок масиву names
names.unshift('Joker_first'); //чтобы не менять неймс изменил , что добавляем (будет 3 элемента)
console.log(names);

// Маємо масив names:

names1 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names1.unshift('Catwoman');


// Маємо масив names:
var names2 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names2 = ['Catwoman' , ...names2];
console.log('names2', names2);


// Маємо масив names
// names = ['Batman', 'Joker', 'Bane'];
let names3 = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
var add1 = names3[0];
names3.unshift(add1);
names3[1] = 'Catwoman';

var removed = names3.splice(1, 0, "Catwoman"); // другой вариант в одну строку, в итоге 2 раза добавил
console.log('names3new' , names3);

// Маємо масив names
// const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи  'Catwoman' і 'Joker' з масиву names:
names3.splice(names3.indexOf('Catwoman'), 1);
names3.splice(names3.indexOf('Joker'), 1);
console.log('names3-new' , names3);


// Маємо масив names:
const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
var a1 =  names4.indexOf('Catwoman');
var a2 =  names4.indexOf('Joker');
var repl = 'Alfred';
names4[a1] = repl;
names4[a2] = repl
console.log('names4new' , names4);
// Маємо масив names:
const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
var a3 =  names5.indexOf(repl);
console.log('names5new' , names5, a3);
if (a3 === -1) names5.push(repl);
console.log('names5new' , names5);


// Маємо масив names:
const names6 = ['Batman', 'Catwoman', 'Alfred', 'Alfred' , 'Joker', 'Bane', 'Alfred'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
console.log('names6' , names6);

var a4 = names6.indexOf(repl);

while ( a4 !== -1 ) {
	names6.splice(a4, 1);
	a4 = names6.indexOf(repl);
  };

  console.log('names6new' , names6);

