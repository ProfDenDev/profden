const classes = ['first', 'second', 'third', 'fourth'];

// 1 Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір.
//  Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
// console.log(document.body.childElementCount);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log('Всі дочірні елементи ', document.body.childNodes);

console.log(typeof document.querySelectorAll("h1")); //NodeList
const allNavbar = document.querySelectorAll("h1");

for (i = 0; i < allNavbar.length; i++) {
console.log(allNavbar[i], '---', typeof(allNavbar[i]));
}

// 2 Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. 
// Встановити для нього стиль background-color = "gold"
const p1s = document.body.querySelector("p");
const p2s = document.body.querySelectorAll('p');

const all_p = document.body.querySelectorAll("p");

all_p[0].style.cssText = 'background-color : gold';

// 3 Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
// Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
all_p[1].style.cssText = 'color: gold; font-size: 2rem; color: blue';


// 4 Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. 
// Призначити для нього клас third
all_p[2].className = classes[2];

// 5 Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. 
// Призначити для нього класи fourth та border
all_p[3].className = classes[3] + '.border';
// all_p[3].className = 'border';
for (i = 0; i < all_p.length; i++) {
    console.log('p ', i, all_p[i]);
    }
// 6 Знайти всі елементи з класом container. Використовуючи цикл for, 
// вивести на консоль перший елемент для кожного зі знайдених елементів.
const all_cont = document.body.getElementsByClassName('container');
console.log('contanier all ', all_cont.length , all_cont);


for (i = 0; i < all_cont.length; i++) {
        console.log('contanier  ', i, 
            all_cont[i].firstElementChild
          );
    }
// 7 Знайти всі елементи з класом container. Використовуючи цикл for,
//  вивести на консоль вміст першого елементу для кожного першого елемента зі знайдених елементів.
for (i = 0; i < all_cont.length; i++) {
        console.log('contanier  ', i, 
            all_cont[i].firstElementChild.textContent
          );
}
// 8 Знайти колекцію всіх елементів з селектором '.container header', 
// зберегти її в змінній headers. Використовуючи цикл for для отриманої колекції headers, 
// замінити заголовки h1 таким чином
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4
// зберегти початкові атрибути id та class

const headers = document
            .querySelectorAll(".container header")
            .forEach((headers, index) => {


 const new_H = headers.querySelector('h1');
 const h_new = `h${index + 1}`;
 
 headers.classList.add(classes[index]);
 console.log(headers.className);

 if (index !== 0) {
        var dummy = document.createElement(h_new);
        dummy.innerHTML = headers.innerHTML;
        headers.parentNode.replaceChild(dummy, headers);

  }
//   можно без if , тогда на 1 цикл больше будет

console.log('contanier header ' , headers, new_H, h_new, dummy, index);
});


// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи 
// таким чином

// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth

// 77 строка 