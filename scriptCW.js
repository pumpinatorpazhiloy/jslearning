'use strict'

//CodeWars

//1. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
	return `${bool === true ? 'Yes' : 'No'}`;
}

console.log(boolToWord(false));

//2. Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return -number;
}

console.log(opposite(5));

//3. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
	return s.repeat(n);
}

console.log(repeatStr(5, 'Hello'));

//4. Simple, given a string of words, return the length of the shortest word(s).
//	  String will never be empty and you do not need to account for different data types.

function findShort(s){
	const res = s.split(" ").reduce((a,b) => a.length < b.length ? a : b);
	return res.length;
}

console.log(findShort('qwe qwqwe qwqwe qqqq qqqweqeqweqw qq qweqw q qq qqqq'));

//5. Create a function with two arguments that will return an array of the first n multiples of x.
//   Assume both the given number and the number of times to count will be positive numbers greater than 0.
//   Return the results as an array or list ( depending on language ).
//   Example:
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
	let z = [];
 
	for(let i = 1; i <= n; i++) {
		z.push(i*x); 
	}

	return z;
}

console.log(countBy(2,5));

//6. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
//   It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//   Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
//   RNA differs slightly from DNA its chemical structure and contains no Thymine. 
//   In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//   Create a function which translates a given DNA string into RNA.
//   For example:
//   "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
	return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('GCAT'));

//7. Let's play! You have to return which player won! In case of a draw return Draw!.
//   Examples(Input1, Input2 --> Output):
//   "scissors", "paper" --> "Player 1 won!"
//   "scissors", "rock" --> "Player 2 won!"
//   "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
	switch(p1) {
		case 'paper':
			if(p2 === 'scrissors') {
				return 'Player 2 won!';
			} else if (p2 === 'rock') {
				return 'Player 1 won';
			} else {
				return 'Draw';
			}
		case 'rock':
			if(p2 === 'scrissors') {
				return 'Player 1 won';
			} else if (p2 === 'paper') {
				return 'Player 2 won';
			} else {
				return 'Draw';
			}
		case 'scrissors':
			if(p2 === 'rock') {
				return 'Player 2 won';
			} else if (p2 === 'paper') {
				return 'Player 1 won!';
			} else {
				return 'Draw';
			}
	}
};

console.log(rps('scrissors', 'paper'));
