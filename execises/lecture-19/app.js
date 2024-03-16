

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
// одинакові, 13 и true
console.log(str1.length == str2.length);

// Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';
console.log(string5[0]);

// повернути символ J рядка str3:
// // повернути символ J рядка:
let str3 = "Hello Javascript";
console.log(str3[6], ' ', str3.indexOf('J'));



// Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3.at(-1), '-', str3[str3.length-1]);


// Напишіть три варіанти функції lastChar, що повертає останній символ рядка


  var lastLetter = str3[str3.length - 1];
  console.log(lastLetter);
 var lastLetter = str3.substring(str3.length - 1);
   console.log('1. ',str3.substring(str3.length - 1), ' 2. ',str3.slice(-1), ' 3. ',  lastLetter, ' 4. ', str3.charAt(str3.length - 1)); 



// Маємо код

 let a = 'When candles are out,';
 let b = 'all cats are grey.';
// Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey
let ab= a.concat(' ',b);
console.log(ab);

// Маємо код
let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10;
// Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15
console.log(fact, +a1+b1);



// Маємо код
let firstName = "Tom";
let lastName = "Cat";

// Напишіть функцію getFullName, що повертає результат: "Tom Cat"
function getFullName(a,b) {
    return a + ' ' + b ;
}

console.log('Hello,' ,getFullName(firstName, lastName), '!');
// Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting () {
return 'Hello, ' + getFullName(firstName, lastName)+'!';

} 
console.log(greeting());

// Використовуючи функцію greeting, створити такий шаблон:

// <div><h1>Hello, Tom Cat!</h1></div>

// Маємо наступний код:

let string1 = "  The name of our game  ";


// Потрібно отримати такі результати
console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart());// "The name of our game  "
console.log(string1.trimEnd());// "  The name of our game"


const phoneNumber = '\t  555-123\n ';
// // Потрібно отримати такі результати
const num = /[0-9]|'-'/g;
console.log(phoneNumber);
console.log(phoneNumber.match(num)); // => '555-123'
// // => '555-123 \n'
// Маємо наступний код:
var sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.includes('look on',8));
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
// Маємо наступний код


var sentence = 'Always look on the bright side of life';
console.log("індекс символу 'l'",sentence.search('l'));// Знайти індекс символу 'l'
var sen1 = sentence.substring(3);
console.log("індекс символу 'l' z3 pozicii ", sen1.search('l') +3);// Знайти індекс символу 'l', починаючи з 3-ї позиції
console.log("індекс символу 'L'",sentence.search('L'));// Знайти індекс символу 'L'
// Маємо наступний код:

var sentence = 'Always look on the bright side of life';
var sen2 = sentence.substring(7); // Отримати підрядок 'look on the bright side of life'
var sen3 = sentence.substring(0,6);// Отримати підрядок 'Always'

var sen4 = sentence.substring(7,11);
var sen5 = sentence.substring(sentence.search('look'), sentence.search('look')+ 'look'.length);

var lok = 'look'
var sen6 = sentence.substring(sentence.search(lok), sentence.search(lok)+ lok.length);
// sen 4,5,6 разні способи
// Отримати підрядок 'look'
console?.log (sen2,'|',sen3,'|',sen4,'|',sen5,'|',sen6);



// Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри,
//  літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
function nameIsValid (nam) {
    var validSymbol = /^[a-zA-Z\-]+$/;
    if (8 >= nam.length >= 16) { return ' 8-16 '; }
    else if (validSymbol.test(nam) == false ) return 'ne korektni symvol';
    return nam.toLowerCase(nam);
  } // можно сначала преобразовать все в маленькие символи , и изменить validSymvol = /^[a-z\-]+$/;
console.log('name is ', nameIsValid('pHPflc'));
// Створити регулярний вираз, який призначений для перевірки email на коректність.
function emailIsValid (email) {
    var validSymbol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validSymbol.test(email)
  }
console.log('email is ', emailIsValid('pPr.of@ma.il.c'));

// Маємо наступний код:

let s1entence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
function truncateText(tx50){
return tx50.substring(0,50); // от 0 сивола до 49

}
console.log(truncateText(s1entence).length,' ',truncateText(s1entence));
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
let s2entence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText1(tx50end){
    return tx50end.substr(-50,50); // от 50 cконца  - пятьдесят символов
}
    console.log(truncateText1(s2entence).length,' ',truncateText1(s2entence));







