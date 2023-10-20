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


