// Comment
/* comment
on 
3 line*/
/*let name = 5;
let str = "10";
let boolean = true;
let boolean2 = false;
console.log(5+7);
console.log(`текст на двух строках - тильда`)
let a = 7;
console.log(`text on
 2 line ${a}`)
 console.log("text\non 2 line"+a)

 /*функция для проверки переменной число или строка*/
//  function isNumber(n) {
//     return !isNaN(parseFloat(n)) && !isNaN(n - 0)
//  }
 
//  /*получить случайное число в диапазоне*/
//  function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//  }
 
//  //массивы
// let arr = [1,2,"str1", true]
// let arr2 = [1,2,3]

// //объекты
// let obj = [
//     {
//     "color": "Tomato",
//     "numbers": ["888-777", "666-222"],
//     "checked": true
// },
// {
//     "color": "Green",
//     "numbers": ["111-222", "333-555"],
//     "checked": false
// },
// {
//     "color": "Blue",
//     "numbers": ["888-777", "666-222"],
//     "checked": true
// }
// ]
// let shanya = {
//     "type": "cat",
//     "color": "gray",
//     "ves kg": 1.5
// }

//УСЛОВИЯ
// let age = prompt("введите ваш возраст")
// if(age != null) {
//     alert("Мой возраст " + age)
// } else {
//     alert("Вы нажали отмена")
// }

// if(confirm("Удалить ваш аккаунт?")) {
//   alert("Удалено")  
// } else {
//     alert("Отменено")
// }

// confirm("Удалить ваш аккаунт?") ? alert("Удалено") : alert("Отменено")

// let age = prompt("введите ваш возраст")
// if(age < 18) {
//   alert("Мой возраст меньше 18")
//  } else if(age > 18) {
//      alert("Мне больше 18")
//  } else {
//     alert("Мне 18 лет")
//  } 

// let age = prompt("введите ваш возраст")
// switch(true) {
//     case age > 18:
//         alert("Мне больше 18")
//         break;
//     case age < 18 && age > 0:
//         alert("Мне меньше 18")
//         break;
//     case age == 18:
//         alert("Мне 18 лет")
//         break;
//     default:    
//         alert("Неправильный возраст")
// }

//ЦИКЛЫ
//№1
// let count = 0;
// while(count < 10) {   
//   console.log(count);
//   if(count==4) {
//     break;
//   }
//   count++;
// }
//№2
// let count = 10;
// do {
//     console.log(count);
//     count--;
// } while(count>7)
//№3
// let arr = [5, 7, 9, 1, 0];
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]*2)
// }
//№4
// let arr = [5, 7, 9, 1, 0];
// for(let item of arr) {
//     console.log(item)
// }
//№5
// let obj = {
//     "name": "Petr",
//     "age": 25,
//     "number": 888
// }

// for(let key in obj) {
//     console.log(`Ключ ${key}, Значение ${obj[key]}`)
// }
//№6
// let arr = [5, 7, 9, 1, 0];
// arr.forEach(function(item, i, array) {
//     console.log(`Элемент: ${item}
//     Индекс: ${i}
//     Массив: ${array}
//     Удвоенный элемент: ${item*2}`)
// })

// Пример
// let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "Masha"},
//     {id: 3, name: "Alex"},
//     {id: 4, name: "Kate"},
// ]
// Возвращает массив по id:
// let a = people.find(function(item) {
//     if(item.id==3) return item
// })
// console.log(a)
// Возвращает индекс по id:
// let a = people.findIndex(function(item) {
//     if(item.id==3) return item
// })
// console.log(a)
// Возвращает несколько массивов по id:
// let a = people.filter(function(item) {
//     if(item.id<3) return item
// })
// console.log(a)

//Map - работает как forEach и позволяет создать новый массив:
// let arr = [5, 7, 9, 1, 0];
// let newArr = arr.map(function(item){  return item*3
// }) 
// console.log(newArr)  

// ЗАДАЧИ
// -создать массив из чётных чисел от 0 до 20
// let arr = [];
// for(let i=0; i<20; i+=2) {
//  arr.push(i)
// }
// console.log(arr)
// -создать массив от 30 до 0 из чисел которые делятся на 3 без остатка
// let arr = [];
// for(let i=30; i>0; i--) {
//     if(i%3==0) {
//         arr.push(i)
//     }
//  }
// console.log(arr)
// -создать массив каждый элемент которого равен квадрату его индекса
// let arr = [];
// for(let i=0; i<10; i++) {
//  arr.push(Math.pow(i,2))
// }
// console.log(arr)
// -найти кол-во чётных эл-в в массиве
// let arr1 = [1,12,45,7,441,62,55,8,9,14]
// let count = 0;
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i]%2==0) {
//       count++;
//     }
// }
// console.log("Всего чётных элементов: " + count)

// Функции

// function printText(name, age) {
//     return"Hello My name is "+name+", Age "+age
// }
// let name1 = "Sasha";
// let age1 = 33;
// // alert(printText("Petr", 70));
// // console.log(printText(name1, age1));
// // console.log(printText("Sam", 20));

// let res = printText(name1, age1);
// alert(res);

// let obj = {
//     name: "Ivan",
//     age: 18,
//     hello() {
//       console.log("Меня зовут "+this.name)  
//     }
// }
// obj.hello()

// сортировка массива

// let arr = [2,5,8,66,44,22,1,77,1]
// arr.sort(function(a,b) {
//    if(a==b) return 0
//    if(a>b) return 1
//    if(a<b) return -1 
// })
// console.log(arr)

// let arr = [2,5,8,66,44,22,1,77,1]
// arr.sort(function(a,b) {
//    return a-b
// })
// console.log(arr)
//   стрелочная функция (другой вид отображения)
// let arr = [2,5,8,66,44,22,1,77,1]
// arr.sort((a,b) => a - b)
//    console.log(arr)

// создать массив с числами Фиббоначи

// function fibonachi(count) {
//     let fib = []
//     for(let i=0; i<count; i++) {
//       if(i==0) fib[i] = 1;
//       else if(i==1) fib[i] = 2;
//       else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }
// let f = fibonachi(20);
// console.log(f)

// вычислить факториал числа

// function factorial(n) {
//    let fact = 1;
//    if(n==0) return fact;
//    for(let i=1; i<=n; i++) {
//     fact *= i;
//    } 
//    return fact;
// }
// let a = factorial(0)
// console.log(a)
// let b = factorial(3)
// console.log(b)
// let c = factorial(8)
// console.log(c)

// функция выводит сумму и произведение цифр многозначного числа
// let addAndMul = function(num) { -то же самое: function addAndMul(num)
// let addAndMul = function(num) {
//   num += ""; //добавили строку чтоб сделать num строкой
//   let add = 0, mul = 1;
//   for(let i = 0; i < num.length; i++) {
//    add += +num[i];// +num чтоб сделать числом
//    mul *= num[i];
//   }
//   return{
//     'Сумма': add,
//     'Произведение': mul
//   }
// }
// console.log(addAndMul(795))

// инвертировать цифры числа в обратный порядок

// function reverse(number) {
//     number += "";
//     let reverseNumber = "";
//     for(let i=number.length-1; i>=0; i--) {
//       reverseNumber += number[i]
//     }
//     return +reverseNumber // +reverseNumber -чтоб вернуть число
// }
// console.log(reverse(3486))
//3486
//6843

// посчитать кол-во чётных и нечётных в числе

// function number(number) {
//   number += "";
//   let chet = 0, nechet = 0;
//   for(let i =0; i<number.length; i++) {
//     if(number[i]%2 == 0) chet++;
//     else nechet++;
//   }
//   return {
//     "Чётные цифры": chet,
//     "Нечётные цифры": nechet,
//   }
// }
// console.log(number(348655))

// угадывание случайного числа от 0 до 100 с 10 попыток

// function randomNumber() {
//    let number = Math.floor(Math.random()*100);
//    for(let count=1; count<=10; count++) {
//     let result = +prompt(`Попытка №${count}, Введите число:`)
//     if(result == number) {
//        return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
//     }  else if(result < number) {
//         alert(`Ваше число ${result} меньше загаданного!`)
//     } else if(result > number) {
//         alert(`Ваше число ${result} больше загаданного!`)
//     } 
//    }
//    return alert(`Вы не угадали число! Число: ${number}`)
// }
// randomNumber()

// Создание Даты и времени

//let a = new Date("2022-11-03T09:10:20.941")
// выдаёт кол-во млсек с 01.01.1970
//console.log(Date.parse("2022-11-03T09:10:20.941"))

//let a = new Date(2015,6,21,10,51,54,458) /*первый месяц-нулевой -поэтому 6 - июль, воск - нулевой день, суб -щестой*/
//let a = new Date(2015,6,21,10,51,54,458)
//console.log(a.getDay())

//автоисправление даты- установить дату,год,время и т.д.
// let a = new Date(2015,1,28)
// a.setDate(a.getDate()+2)
// console.log(a)

//преобразование даты к числу - добавив плюсик получаем таймстеп для этой даты
// let a = new Date(2015,1,28)
// console.log(+a)

//форматирование даты
// let a = new Date(2014,11,31,12,30,0)
// let options = {
//   era: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   weekday: "long",
//   timezone: "UTC",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric"  
// }
//  console.log(a.toLocaleString("ru", options))
//  console.log(a.toString())

// Документация функций
// /**
//  * Функция преобразует строку со временем в минуты
//  * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
//  * @return {number} целое число в минутах. Например time="02:08" вернёт 128.
//  */
// function timeToMinute(time) {
//  try {  
//   let hour = +time.split(":")[0]
//   let minute = +time.split(":")[1]
//   if( !(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)) {
//     throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' - от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
//    }
//    return hour*60+minute
//  } catch(error) {
//    console.log(error)
//  }
// }
// console.log(timeToMinute("20:08"))
//try catch позволяют проверять код на наличие ошибок и при обнаружении обрабатывать

// Объектноориентированное программирование

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//       myInfo() {
//     console.log("Меня зовут "+this.name+", мне "+this.age+" лет")
//     }
// }
// class Moderator extends User {
//    addPost() {
//     console.log("New Post")
//    } 
// }
// let u1 = new User("Petr", 21)
// let u2 = new User("Reek", 20)
// let u3 = new User("Pit", 18)
// let m1 = new Moderator("Ivan", 22, true)

// class People {
//     /**
//      * Класс человек
//      * @param {String} fio по формату "Фамилия Имя Отчество"
//      * @param {String} birthday день рождения "24.11.1994"
//      * @param {String} numbers "номера", если больше двух номеров, формат "номер1, номер2"
//      * @param {Number} room комната
//      */
//     constructor(fio, birthday, numbers="", room="") {
//       let name = fio.toLowerCase().split(" ");
//       this.name = {};
//       this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
//       this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
//       this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

//       let date = birthday.split(".");
//       this.date = {};
//       this.date.d = +date[0]
//       this.date.m = +date[1]
//       this.date.y = +date[2]

//       this.numbers = numbers.split(", ")

//       this.room = +room
//     }
//     static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//     /**
//      * Вывести ФИО
//      * @return {String} Строка формата "Фамилия Имя Отчество"
//      */
//     getFio() {
//       return `${this.name.f} ${this.name.i} ${this.name.o}`  
//     }
//     /**
//      * Вывести день рождения
//      * @return {String} Строка формата "24 июля 1997"
//      */
//     getBirthday() {
//         return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
//     }
//     /**
//      * Вывести Фамилия_Имя_Отчество.расширение
//      * @param {String} extention расширение, например "jpg" или "png"
//      * @return {String} для названия изображения
//      */
//     getImgSrc(extention) {
//         return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}` 
//     }
//     /**
//      * Вывести все номера телефонов или только первый номер
//      * @param {Boolean} allNumbers если true то все номера, если false - только первый номер
//      * @return {String} строка формата: "778787987, 54868768"
//      */
//     getNumberList(allNumbers) {
//       if(this.numbers.length == 0 || this.numbers[0].length == 0)
//         return undefined
//       if(allNumbers) {
//         return this.numbers.join(", ")
//       } else {
//         return this.numbers[0];
//       }
//     }

// }
// let people1 = new People("Усеинов Исмаил Асанович", "24.11.1994", "9984, 8847, 5478", 542)
// let people2 = new People("Пупкин Герасим Антонович", "04.01.1964", "")

// console.log(people1.getFio())
// console.log(people2.getFio())

// Стандарт ECMAScript6 с 2015г новые возможности

//неизменяемые переменные const
//const a = 3.5

//оператор расширения
// function sum(a,b) {
//   return a+b
// }
// let date = [4,8]
// sum(...date)

//деструктивное присваивание
//let [a,b,c,d] = [10, 5, 8, 9]
// вместо let a = array[0], let b = array[1] и т.д.

//стрелочные функции
// let sum = (a,b,c) => {
//   return a+b+c
// }
// sum(5,2,3)
// -можно то же записать так:
// let sum = (a,b,c) => a+b+c
// sum(5,2,3)
//преимущество - стрелочные функции сохраняют контекст

//проверка на целое ли число
//Number.isInteger(18.2)

//проверка на значение NaN число или не число
// let a = "NaN"
// let b = NaN
// let c = "hello"
// let d = 12;
// console.log(Number.isNaN(a))
// console.log(Number.isNaN(b))
// console.log(Number.isNaN(c))
// console.log(Number.isNaN(d))

// повторить строку несколько раз
// console.log("Str".repeat(3))

// let a = "Str".repeat(3)

// чтоб найти одну строку в другой
// let str = "Hello, i`m simple String"
// console.log(str.includes("simple"))

// console.log(str.startsWith("Hel, 12"))

// console.log(str.endsWith("ing"))

// метод fill позволяет наполнять массив новым значением
// let arr = [5,8,9,2,4]
// arr.fill(0,1,3)
// console.log(arr)

// методы возвращают значения(values), индексы(keys), массивы с индексами и значениями(entries)
// let arr = ['a', 'b', 'c']
// let entries= arr.entries()
// let keys = arr.keys()
// let values = arr.values()
// console.log(...entries)
// console.log(...keys)
// console.log(...values)

// множества - как массивы, но не могут повторяться элементы
// let set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(1)
// console.log(set)
// console.log(set.has("4"))
// console.log(set.size)
// set.delete(2)
// console.log(set)
// set.clear()
// console.log(set)
      // как избавить массив от дубликатов:
      // let arr = [1,5,4,7,8,91,1,4,5]
      // let arr2 = [...new Set(arr)]
      // console.log(arr2)
      //на выходе имеем опять МАССИВ, но без повторяющихся значений.







