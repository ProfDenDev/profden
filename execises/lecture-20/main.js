// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. 
// Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль

var person = {
    name: '',
    age: 32,
}

console.log(typeof(person.name), typeof(person.age));
// Змінити тип властивості name з рядка на об'єкт, 
// з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.

person.name = {
    firstName: 'Den',
    lastName: 'Prof',
};
console.log(typeof(person.name), typeof(person.age));
console.log(person);

// 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
person.bio = function() {
    console.log(person.name.firstName, person.name.lastName, person.age);
}
person.bio();


// 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.

introduceSelf = {
    sayHi() {
        console.log('Hi! I\'m ', person.name.firstName)
    }
}

introduceSelf.sayHi();

//6.  Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий
//  об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.
function createPerson (nam) {
    introduceSelf = {
            name: nam,
    }
return introduceSelf;

}

var obj1 = createPerson('Oleg');
var obj2 = createPerson('Olga');
console.log(obj1, obj2);


// 6.Створити функцію-конструктор Person, що приймає аргумент name та повертає новий
//  об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person (name) {
    introduceSelf = {
            name: name,
            }
return introduceSelf;
}

var mary = Person('mary');
var tom = Person('tom');
console.log(tom,mary);
// визначити, чи містить об'єкт mary властивість під назвою prop.

console.log(mary.class);


// 7.Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french()
//  При виклику методу excuse_my_french(), на консоль виводиться:

DirtyMartini = {
lan (lang) {
    if (lang == 'en')    
        english_please()
    else excuse_my_french()

}
}

function english_please() {console.log("ingredients:",'\n',
    "   6 fluid ounces gin",'\n',
    "   1 dash dry vermouth (0.0351951ml)",'\n', 
    "   1 fluid ounce brine from olive jar",'\n',
    "   4 stuffed green olives")
}

function excuse_my_french() {console.log("ingrédients:",'\n',  
    "   170.4786 ml de gin",'\n',
    "   1 trait de vermouth sec (0.0351951ml)",'\n', 
    "   28.4131 ml de saumure du pot d'olive",'\n',
    "   4 olives vertes farcies")
}

DirtyMartini.lan('en');
DirtyMartini.lan('fr');