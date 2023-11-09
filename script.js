/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// function calculateVolumeAndArea(length) {
//    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//       return "При вычислении произошла ошибка";
//    }

// 	let volume = "";
// 	let area = "";

// 	volume += length * length * length;
// 	area = 6 * (length * length);

// 	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }	

// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(num) {
// 	if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
// 	  return "Ошибка. Проверьте правильность введенного номера места";
// 	} 
// 	if(num === 0 || num > 36) {
// 		return "Таких мест в вагоне не существует";
// 	}
// 	return Math.ceil(num / 4);
// }
// console.log(getCoupeNumber(6));

// function getTimeFromMinutes(time) {
//    if(typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
// 		return "Ошибка, проверьте данные";
// 	}
// 	 const hours = Math.floor(time / 60);
//     const minutes = time % 60;
//     let hoursStr = '';
//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(65));

// function findMaxNumber(a, b, c, d) {
// 	if(typeof a !== 'number' ||
// 	typeof b !== 'number' ||
// 	typeof c !== 'number' ||
// 	typeof d !== 'number') {
// 		return 0;
// 	} else {
// 		return Math.max(a, b, c, d);
// 	}
// }

// console.log(findMaxNumber(1,2,3,4));

// function fib(num) {
//    if(typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
// 		return '';
// 	}

// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	for(let i = 0; i < num; i++) {
// 		if(i + 1 === num) {
// 			result += `${first}`;
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
//         first = second;
//         second = third;
// 	}

// 	return result;
// }
// console.log(fib(6));

// function first () {
// 	setTimeout(() => {
// 		console.log(1);
// 	}, 500);
// }

// function second() {
// 	console.log(2);
// }

// first();
// second();

// const options = {
// 	name: 'test',
// 	wisth: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function() {
// 		console.log("test");
// 	}
// };

// options.makeTest();

// for( let key in options) {
// 	if(typeof (options[key]) === 'object') {
// 		for(let i in options[key]) {
// 			console.log(`My object has ${key} and option is: ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`My object has ${key} and option is: ${options[key]}`);
// 	}
	
// }

// let arr = [1,2,3,4,5];

// arr.unshift(0);

// console.log(arr[1]);


// let a = 5;
// let b = a;

// b = b + 5;

// console.log(a);
// console.log(b);

// const obj = {
// 	a: 5,
// 	b: 1,
// };

// const copy = obj; //link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for( key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20,
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();

// newArray[1] = 'asdqawd';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'aboba'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'telegram'];

// console.log(internet);

// function log(a,b,c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// };

// const num = [2,5,7];

// log(...num);

// const array = ['a', 'b'];

// const newArr = [...array];

// const q = {
// 	one: 1,
// 	two: 2,
// };

// const newObj = {...q};

// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ru', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			  php: '10%'
// 		 },
// 		 exp: '1 month'
// 	}
// };

// function showExperience(plan) {
// 	const result = {...plan};
// 	return `${result.skills.exp}`;
// }

// console.log(personalPlanPeter.skills.exp);

// console.log(showExperience(personalPlanPeter));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
// 	  }
// }
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
// 	 console.log(typeof(exp));
//     return exp;
// };


// console.log(showExperience(personalPlanPeter));


// const myArr = [1,2,3,4,5],
// 		newArr = [];

// myArr.forEach((el) => {
// 	newArr.push(el *2);
// });

// console.log(newArr)

// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ru', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			  php: '10%'
// 		 },
// 		 exp: '1 month'
// 	},
// 	showAgeAndLangs: function(plan) {
// 		const {age} = plan;
// 		const {languages} = plan.skills;

// 		let str = `Мне ${age} и я владею языками: `

// 		languages.forEach((lang) => {
// 			str += `${lang.toUpperCase()} ` 
// 		})

// 		return str;
// 	}
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience (plan) {
// 	const {exp} = plan.skills;
// 	return exp;
// };

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
// 	let str = "";
// 	const{programmingLangs} = plan.skills;
// 	for(let key in programmingLangs) {
// 		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
// 	}

//  	return str;
//  };

//  console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let str = '';

// 	arr.length === 0 ? str = 'Семья пуста' : str = `Семья состоит из: `;

// 	arr.forEach((human) => {
// 		str += `${human} `;
// 	})

// 	return str;
// };
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
// 	arr.forEach((city) => {
// 		console.log(city.toLowerCase())
// 	})
// }

// console.log(standardizeStrings(favoriteCities));

// const someString = 'This is some strange string';

// function reverse(str) {
// 	if(str !== 'string' && str.length !== 0) {
// 		return str.split('').reverse().join('');
// 	} else {
// 		return 'Error!'; 
// 	}	
// };

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
// 	let str = '';
// 	str === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n'

// 	arr.forEach((curr, miss) => {
// 		if(curr !== missingCurr) {
// 			str += `${el}\n`
// 		}
// 	})

// 	return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));

// const soldier = {
// 	health: 400,
// 	armor: 100,
// };

// const john = Object.create(soldier);

// const john = {
// 	health: 100,
// };

// john.__proto__ = soldier;

// console.log(john.armor);


// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function() {
// 	  personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
 
// 	  while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 		  personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	  }
// 	},
// 	rememberMyFilms: function() {
// 	  for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренных фильмов?', ''),
// 					b = prompt('На сколько оцените его?', '');
 
// 			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 				 personalMovieDB.movies[a] = b;
// 				 console.log('done');
// 			} else {
// 				 console.log('error');
// 				 i--;
// 			}
// 	  }
//  },
//  detectPersonalLevel: function() {
//   if (personalMovieDB.count < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
// 		console.log("Вы киноман");
//   } else {
// 		console.log("Произошла ошибка");
//   }
// },
// showMyDB: function() {
//   if(personalMovieDB.privat === false) {
// 	  console.log(personalMovieDB);
//   }
// },
// toggleVisibleMyDB: function() {
//   if(personalMovieDB.privat) {
// 	  personalMovieDB.privat = false;
//   } else {
// 	  personalMovieDB.privat = true;
//   }
// },
// writeYourGenres: function() {
//   for (let i = 1; i <=2; i++) {
// 	// let genre = prompt(`Ваш любимый жанр под номером ${i}`);

// 	// 	if(genre === '' || genre == null) {
// 	// 		console.log('You made error');
// 	// 		i--
// 	// 	} else {
// 	// 		personalMovieDB.genres[i - 1] = genre;
// 	// 	}
// 	let genres = prompt(`Введите ваши любиміе жанры через запятую`).toLowerCase();
// 	if(genres === '' || genres == null) {
// 			console.log('You made error');
// 			i--
// 		} else {
// 			personalMovieDB.genres = genres.split(', ');
// 			personalMovieDB.genres.sort();
// 		}
//   }
//   personalMovieDB.genres.forEach((item, i) => {
// 		console.log(`Favourite genre: ${i + 1} - its ${item}`);
//   })
// }

// };

// const shoppingMallData = {
// 	shops: [
// 		 {
// 			  width: 10,
// 			  length: 5
// 		 },
// 		 {
// 			  width: 15,
// 			  length: 7
// 		 },
// 		 {
// 			  width: 20,
// 			  length: 5
// 		 },
// 		 {
// 			  width: 8,
// 			  length: 10
// 		 }
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000
// }

// function isBudgetEnough(data) {
// 	let square = 0;
// 	let volume = 0;

// 	data.shops.forEach((shop) => {
// 		square += shop.length * shop.width;
// 	});

// 	volume = data.height * square;

// 	console.log(volume);

// 	if(data.budget - (volume * data.moneyPer1m3) >= 0) {
// 		return 'Nice';
// 	} else {
// 		return 'Not nice';
// 	}
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
// 	arr.sort();

// 	const a = [], b = [], c = [], rest = [];

// 	for(let i = 0; i < arr.length; i++) {
// 		if(i < 3) {
// 			a.push(arr[i]);
// 		} else if ( i < 6) {
// 			b.push(arr[i]);
// 		} else if(i < 9) {
// 			c.push(arr[i]);
// 		} else {
// 			rest.push(arr[i]);
// 		}
// 	}

// 	return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://google.com/' + num);

// const fontSize = 26 + 'px';

// To number
// console.log(typeof(Number('4')));


// console.log(typeof(+'5'));

// console.log(typeof(parseInt('15px, 10')));

// let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN;

// let switcher = null;

// if(switcher) {
// 	console.log('Working');
// }

// switcher = 1;

// if(switcher) {
// 	console.log('Working');
// }

// console.log(typeof(!!"4444"));

// function createCounter() {
// 	let counter = 0;

// 	const myFunction = function() {
// 		counter = counter + 1;
// 		return counter;
// 	}

// 	return myFunction;
// }


// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1,c2,c3);

// let val = 7

// function createAdder() {

//   function addNumbers(a, b) {
//     let ret = a + b
//     return ret
//   }

//   return addNumbers
// }

// let adder = createAdder()
// let sum = adder(val, 8)

// console.log('example of function returning a function: ', sum)

// 1: function createCounter() {
// 2:  let counter = 0

// 3:  const myFunction = function() {
// 4:    counter = counter + 1
// 5:    return counter
// 6:  }

// 7:  return myFunction
// 8:}

// 9:const increment = createCounter()
// 10:const c1 = increment()
// 11:const c2 = increment()
// 12:const c3 = increment()

// 13:console.log('example increment', c1, c2, c3)

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	},
// 	makeTest: function() {
// 		for( let key in options) {
// 			if(typeof(options[key]) === 'object') {
// 				for(let i in options[key]) {
// 					console.log(`Свойство ${i}, значение ${options[key][i]}`)
// 				} 
// 			} else {
// 				console.log(`Свойство ${key}, значение ${options[key]}`)
// 			}	
// 		}
// 	}
// };

// options.makeTest()

// const restorantData = {
// 	menu: [
// 		 {
// 			  name: 'Salad Caesar',
// 			  price: '14$'
// 		 },
// 		 {
// 			  name: 'Pizza Diavola',
// 			  price: '9$'
// 		 },
// 		 {
// 			  name: 'Beefsteak',
// 			  price: '17$'
// 		 },
// 		 {
// 			  name: 'Napoleon',
// 			  price: '7$'
// 		 }
// 	],
// 	waitors: [
// 		 {name: 'Alice', age: 22}, {name: 'John', age: 24}
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true
// };

// function isOpen(prop) {
// 	let answer = '';
// 	prop ? answer = 'Закрыто' : answer = 'Открыто';

// 	return answer;
// }

// console.log(isOpen(restorantData.openNow))

//  function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
// 		return 'Цена ниже средней';
//   } else {
// 		return 'Цена выше средней';
//   }
//  }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
// 	const copy = {...data};
// 	copy.waitors = [{name: 'Mike', age: 32}];
// 	return copy;
// }

// console.log(transferWaitors(restorantData));

// function pow(x, n) {
// 	let result = 1;

// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }

// function pow(x, n) {
// 	if (n === 1) {
// 		return x;
// 	} else {
// 		return x * pow(x, n -1);
// 	}
// }


// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 10));

// let students = {
// 	js: [{
// 		name: 'John',
// 		progress: 100
// 	},
// 	{
// 		name: 'Ivan',
// 		progress: 60
// 	}],

// 	html: {
// 		basic: [{
// 			name: 'Peter',
// 			progress: 20
// 		},
// 		{
// 			name: 'Ann',
// 			progress: 18
// 		}],
// 		pro: [{
// 			name: 'Sam',
// 			progress: 10
// 		}],
// 		semi: [{
// 			students: [{
// 				name: 'Test',
// 				progress: 100,
// 			}]
// 		}]
// 	}
// };

// function getTotalProgressByRecursion(data) {
// 	if (Array.isArray(data)) {
// 		let total = 0;

// 		for(let i = 0; i < data.length; i++) {
// 			total += data[i].progress;
// 		};

// 		return [total, data.length]; 
// 	} else {
// 		let total = [0, 0];
		
// 		for(let subData of Object.values(data)) {
// 			const subDataArr = getTotalProgressByRecursion(subData);
// 			total[0] += subDataArr[0];
// 			total[1] += subDataArr[1]; 
// 		}

// 		return total;
// 	}
// };

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);

// function factorial(n) {
// 	if(typeof(n) !== 'number' || !Number.isInteger(n)) {
// 		return 'Неправильное число!'
// 	}

// 	if(n >= 1) {
// 		return n * factorial(n - 1); 
// 	} else {
// 		return 1;
// 	}
// }

// console.log(factorial(4));

// touchstart

// touchmove

// touchend

// touchenter

// touchleave

//touchcancel

// window.addEventListener('DOMContentLoaded', () => {
// 	const box = document.querySelector('.box');

// 	box.addEventListener('touchend', function(event) {
// 		event.preventDefault();
// 		event.stopPropagation();
// 		console.log('a')
// 		}, false);
// });

// touches 
// targetTouches
// changedTouches

// function User(name, id) {
// 	this.name = name;
// 	this.is = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log('Hi pidoras');
// 	};
// };

// User.prototype.exit = function() {
// 	console.log(`Out ${this.name}`)
// }

// const ivan = new User('ivan', 20);
// const alex = new User('alex', 22);

// ivan.exit();

// ivan.hello();

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this)
// 		return a + b;
// 	}
// 	console.log(sum());
// };
// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		function shou () {
// 			console.log(this)
// 		}
// 		shou()
// 	}
// }

// obj.sum();


// function User(name, id) {
// 	this.name = name;
// 	this.is = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log('Hi pidoras');
// 	};
// };

// let ivan = new User( 'Ivan', 28);

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = windowБ но если стоит юх стрикт = undefined
// 2) Контекст у методов объеуктов - сам объект
// 3) this в конструкторах и классах = это новый экземпляр объекта
// 4) ручная привязка this: call, apply, bind


// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
// 	this.style.backgroundColor = 'red'; 
// });

// const obj= {
// 	num: 5,
// 	sayNumber: function() {
// 		function say () {
// 			console.log(this.num);
// 		}
// 		say();
// 	}
// };

// obj.sayNumber();

// const double = (a) => {
	 
// }


// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}

// 	calcArea() {
// 		return this.width * this.height;
// 	}
// }

// class ColoredRectangleWithText extends Rectangle {
// 	constructor(width, height, text, bgColor) {
// 		super(width, height);
// 		this.text = text;
// 		this.bgColor = bgColor;
// 	}

// 	showRes() {
// 		console.log(`Text: ${this.text}, Color: ${this.bgColor}`)
// 	}
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world!', 'red');

// div.showRes();
// console.log(div.calcArea())

// const square = new Rectangle(10, 10);
// const long = new Rectangle(10, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// console.log(showThis(2, 5));

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();

// function User(name, id) {
// 	this.name = name;
// 	this.is = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log('Hi pidoras is' + this.name);
// 	};
// };

// let ivan = new User('Ivan', 20)

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// };

// const user = {
// 	name: 'Ivan',
// }

// sayName.call(user, 'Lox');
// sayName.apply(user, ["Lox"]);

// function count(num) {
// 	return this * num;
// };

// const double = count.bind(2);

// console.log(double(5));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red';
// });

// const obj = {
// 	num: 5,
// 	sayNumber: function() {
// 		const say = () => {
// 			console.log(this);
// 		}
// 		say();
// 	}
// };

// obj.sayNumber();

// const calc = a => a * 2;

// console.log(calc(4));


// class Rectangle {
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}

// 	calcArea() {
// 		return this.height * this.width;
// 	}
// };

// class ColoredRectangleWithText extends Rectangle {
// 	constructor(height, width, text, bgColor) {
// 		super(height, width);
// 		this.text = text;
// 		this.bgColor = bgColor;
// 	}

// 	showMyProps() {
// 		console.log(`Text: ${this.text}, Color: ${this.bgColor}`)
// 	}
// }


// const div = new ColoredRectangleWithText(25, 10, 'text', 'red');

// div.showMyProps();
// console.log(div.calcArea());
// const square = new Rectangle(10, 10);

// console.log(square.calcArea());

// const restOp = function(a, b, ...rest) {
// 	console.log(a,b, ...rest);
// };

// restOp(1,2,'asdasd', 'asdasd', 'asdasd');

//filter

// const names = ['Ann','Ihor', 'Dan', "kirill", 'abobapazhilayslyakot'];

// const shortNames = names.filter((name) => {
// 	return name.length < 5;
// });

// console.log(shortNames);

// let answer = ['Ivan', 'Ann', 'ABOba', 'IhOr'];

// const result = answer.map(name => name.toLowerCase());

// console.log(result);

// const some = [4,'qwq', 'qweqwe'];

// console.log(some.some(i => typeof(i) === 'number'));

// console.log(some.every(i => typeof(i) === 'number'));

//reduce

// const arr = [4, 5, 1, 72, 2];

// const result = arr.reduce((sum, current,) => sum + current, 3);

// console.log(result);

// const arr = ['apple', 'strawbery', 'pear', 'watermellon'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);

// const obj = {
// 	ivan: 'persone',
// 	ann: 'persone',
// 	dog: 'animal',
// 	cat: 'animal',
// };

// const newArr = Object.entries(obj)
// .filter(i => i[1] === 'persone')
// .map(i => i[0]);

// console.log(newArr);

// const films = [
// 	{
// 		 name: 'Titanic',
// 		 rating: 9
// 	},
// 	{
// 		 name: 'Die hard 5',
// 		 rating: 5
// 	},
// 	{
// 		 name: 'Matrix',
// 		 rating: 8
// 	},
// 	{
// 		 name: 'Some bad film',
// 		 rating: 4
// 	}
// ];

// function showGoodFilms(arr) {
// 	return arr.filter(film => film.rating >= 8);
// };

// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
// 	return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`)
// };

// console.log(showListOfFilms(films))

// function setFilmsIds(arr) {
// 	return arr.map((film, i) => {
// 		film.id = i;
// 		return film;
// 	});
// };

// console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
// 	return arr.every((film) => film.id || film.id === 0);
// };

// console.log(checkFilms(films))

// new RegExp('pattern', 'flags');
// /pattern/

// const ans = prompt('Tell us your name');

// const reg = /\d/g;

// console.log(ans.match(reg));

// const str = 'My name is R2D2';

// console.log(str.match(/\D/ig))

// \D
// \W
// \S

// \d
// \w
// \s

// i
// g
// m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, "one");
//  });
//  const p2 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 2000, "two");
//  });
//  const p3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 3000, "three");
//  });
//  const p4 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 4000, "four");
//  });
//  const p5 = new Promise((resolve, reject) => {
// 	reject("reject");
//  });
  
//  Promise.all([p1, p2, p3, p4, p5]).then(value => {
// 	console.log(value);
//  }, reason => {
// 	console.log(reason)
//  });

// const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// function one() {
//     const promises = [a(), b(), c()];
//     Promise.all(promises).then(values => console.log(values))
// }
 
// console.log(one());

// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }
 
// two().then(console.log);
 
// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// three().then(console.log);
 


// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

// const promisify = (item, delay) =>
//     new Promise(resolve => 
// 		setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// function one() {
//     const promises = [a(), b(), c()];
//     Promise.all(promises).then(values => console.log(values))
// }
 
// one();

// const promisify = (item, delay) =>
//     new Promise(resolve => 
// 		setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }
 
// three().then(console.log);
 
// Это тоже самое, что и .then(data => console.log(data));
// data передается в команду автоматически, и она запускается сама с этими данными

// const persone = {
// 	name: 'Alex',
// 	age: 25,

// 	get userAge() {
// 		return this.age;
// 	},

// 	set userAge(num) {
// 		this.age = num;
// 	}
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);

// const person = {
// 	get() {
// 		return this._name;
// 	},

// 	set(name) {
// 		if(name.length < 4) {
// 			return 'Xui eblan';
// 		}

// 		this._name = name;
// 	}
// };

// person.name = 'Pet';

// class GameShop {
// 	constructor(shop, game) {
// 		this._shop = shop;
// 		this.game = game;
// 	}

// 	#secretGame = 'Abobus';

// 	get() {
// 		return this._shop;
// 	}

// 	set(shop) {
// 		if(typeof(shop) != 'number' && shop.length > 2) {
// 			this._shop = shop;
// 		} else {
// 			console.log('Xui');
// 		}
// 	}

// 	shops = () => {
// 		console.log(`Name this shop is: ${this._shop}, games on sale: ${this.game}, and the secret game is: ${this.#secretGame}`)
// 	}
// };

// const shopGame = new GameShop('One', 'Cod');

// shopGame.set('Two');
// console.log(shopGame.secretGame);
// shopGame.shops();

// const app = '123';

// const number = 1;

// (function(){
// 	let number = 2;
// 	console.log(number);
// 	console.log(number + 3);
// }());

// console.log(number);

const user = (function(){
	const privat = function() {
		console.log('I am privat!');
	};

	return {
		sayHello: privat
	};
}());

user.sayHello();