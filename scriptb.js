function binarySearch (arr, item) {
	let low = 0;
	let high = arr.length - 1;

	while(low <= high) {

		let mid = Math.floor((low + high) / 2 );
		let guess = arr[mid];
		
		if(guess === item) {
			return mid;
		} else if (guess < item) {
			high = mid + 1;
		} else {
			low = mid - 1;
		}
	}

	return -1;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const item = 5;
const result = binarySearch(myArray, item);

console.log(result);
