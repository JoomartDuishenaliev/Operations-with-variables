/*let num = undefined;
console.log(typeof num);*/ //*возвращение типа переменной*/

/*let result = 5 % 2;
console.log(result);*/ /*вывод остатка деления = 1*/

/*let num = 16;
let result = num++;
console.log('result: '+result); //вывод самой переменной (постфикс)
console.log('num: '+num); *///переменная +1 (постфикс)

/*let age = 17;
let result = ++age;
console.log('age: '+age);
console.log('result '+result);*/

/*let money = 200;
let result = --money;
console.log('money '+money);
console.log('result '+result);*/

let money = 200;
let result = money--;
console.log('money '+money);
console.log('result '+result);

/*let x = 9;
x += 5; //x = x + 5;
console.log(x);*/

/*let result = '5' == 5; //сравнивание значений независимо от str / number
console.log(result);*/

/*let result = '5' === '5';
console.log(result); *///сравнивание типов str / number

/*let a = 'hello';
let b = 'hello';
console.log(a != b); *///are they different? false

/*let x = "45";
let y = 45;
console.log(x !== y); *///is their type different? true

/*let result = 5 > 5;
console.log(result);*/ //false

/*let result2 = 10 < 11;
console.log(result2)*/ //true

/*let age = 18;
let ageControl = age >= 18;
console.log(ageControl);*/

/*let money = 500;
let result = money <= 500;
console.log(result); *///true

/*let x = 5 > 5; //false
let y = 10 === 15; //false
let result = x && y;
console.log(result);*/ /*if either is false then result = false*/

/*let result = 45 > 40 || 30 < 20;
console.log(result);*/ //if either is true then result = true

/*let m = !(5 == 5);
console.log(m);*/ //if true then m = false

/*let b = true;
let a = true;
let result = b &&= a;
console.log(result);*/ //returns b (true) if both variables = true

/*let a = 5 > 4; //true
let b = 10 == 5; //false
let result = a ||= b;
console.log(result); *///if either is true then result = true