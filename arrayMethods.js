// ARRAY METHODS

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// .some
// does at least ONE element passs the condition?
// returns boolean
const some = myArr.some((x) => x === 5)
// console.log(some); // true

// .every
// do ALL elements pass the condition?
// returns boolean

const every = myArr.every((x) => x < 10)
// console.log(every); // true

// .find
// returns the VALUE of the FIRST element answering the condition
// if none => returns undefined

const find = myArr.find((x) => x > 3)
// console.log(find); // 4

// working with array of objects
const myArrOfObj = [
	{ name: 'Julia', age: 35 },
	{ name: 'Benjamin', age: 34 },
	{ name: 'Hicham', age: 33 },
]

const findArrOfObj = myArrOfObj.find((x) => x.name === 'Benjamin')
// console.log(findArrOfObj); // { name: "Benjamin", age: 34 }

// .findIndex
// returns the INDEX of the FIRST element answering the condition
// if none => returns -1

const findIndex = myArr.findIndex((x) => x > 7)
// console.log(findIndex); // 7

// .filter
// returns an ARRAY of ALL elements answering the conditions
// if none => returns []

const filteredArray = myArr.filter((x) => x > 3 && x < 7)
// console.log(filteredArray); // [4,5,6]

// .map
// creates a new array and returns it by a function on an existing one
// original array is NOT mutated

const mappedArray = myArr.map((x) => x + 10)
// console.log(mappedArray); // [11,12,13,14,15,16,17,18,19]

const mappedAndFilteredArray = myArr.map((x) => x * 2).filter((x) => x > 10)
// console.log(mappedAndFilteredArray); // [12,14,16,18]

// .forEach
// returns UNDEFINED
// => NO ARRAY METHODS CAN BE RUN ON THE OUTPUT
// original array is NOT mutated
// but YOU CAN MUTATE the original:

myArr.forEach((x, index) => (myArr[index] = x * x))
// console.log(myArr); // [1,4,9,16,25,36,49,64,81]

// .reduce
// reduziert einen Array auf einen Wert
// arr.reduce(callback, optionalInitialValue)
const result = myArr.reduce((acc, curr) => acc + curr)
// console.log(result); // 285

// .reverse
// MUTATES
const reversedArray = myArr.reverse()
// console.log(reversedArray); // [81,64,49,36,25,16,9,4,1]
// console.log(myArr); // [81,64,49,36,25,16,9,4,1]

// .sort => UNICODE order
// MUTATES THE ORIGINAL
const sortedArray = myArr.sort()
// console.log(sortedArray); // [1,16,25,36,4,49,64,81,9]
// console.log(myArr); // [1,16,25,36,4,49,64,81,9]

// .push
// MUTATES
// adds an element at the last position
// returns the array's new length
const pushed = myArr.push('push')
// console.log(myArr); // [1,16,25,36,4,49,64,81,9,"push"]
// console.log(pushed); // 10

// .pop
// MUTATES
// removes the last element
// returns the removed element
const popped = myArr.pop()
// console.log(popped); // "push"
// console.log(myArr); // [1,16,25,36,4,49,64,81,9]

// .join
// combine the elements
const joinedArr1 = myArr.join() // separator , default
const joinedArr2 = myArr.join(' ') // define a separator
// console.log(joinedArr1); // 1,16,25,36,4,49,64,81,9
// console.log(joinedArr2); // 1 16 25 36 4 49 64 81 9

// .splice
// adds / removes elements from ANYWHERE within the array
// MUTATES THE ORIGINAL
// returns the removed items
// arg1 => starting index, mandatory (-1 => last element)
// arg2 => count of elements to be removed, optional (0 => none removed)
// arg3, ... => items to be added at index postion arg1
const splicedArr = myArr.splice(3, 2, 'new1', 'new2')
// console.log(splicedArr); // [36,4]
// console.log(myArr); // [1,16,25,"new1","new2",49,64,81,9]

// .slice
// creates a COPY of the array between two indices
// does NOT MUTATE the original
// arg1 => first copied element
// arg2 => first NOT copied element (if no arg2 => copies all elements left)
// if no args => copies whole array
const slicedArr = myArr.slice(3, 7)
// console.log(slicedArr); // ["new1","new2",49,64]

// .unshift
// MUTATES
// adds an element at the first position
// returns the array's new length
const unshiftedArray = myArr.unshift('unshift')
// console.log(unshiftedArray); // 10
// console.log(myArr); // [ 'unshift', 1, 16, 25, 'new1', 'new2', 49, 64, 81, 9 ]

// .shift
// MUTATES
// removes the first element
// returns the removed element
const shiftedArray = myArr.shift()
// console.log(shiftedArray); // "unshift"
// console.log(myArr); // [1,16,25,'new1','new2',49,64,81,9]

// .concat
const arr10 = ['Cecilie', 'Lone']
const arr20 = ['Emil', 'Tobias', 'Linus']
const children = arr10.concat(arr20)

const arr1 = ['Cecilie', 'Lone']
const arr2 = ['Emil', 'Tobias', 'Linus']
const arr3 = ['Robin']
const children2 = arr1.concat(arr2, arr3)

// STRING METHODS
// .split
// converts a string into an array
const myWord = 'hello'
const mySentence = 'my nice sentence'
const wordArr = myWord.split('')
const sentenceArr = mySentence.split(' ')
const wholeSentence = mySentence.split()
// console.log(wordArr); // ['h','e','l','l','o']
// console.log(sentenceArr); // ['my','nice','sentence']
// console.log(wholeSentence); // ['my nice sentence']

// OBJECT METHODS
const myObj = {
	name: 'Julia',
	age: 35,
}

// Object.keys
const myKeys = Object.keys(myObj)
// console.log(myKeys)
// [ 'name', 'age' ]

// Object.values
const myValues = Object.values(myObj)
// console.log(myValues)
// [ 'Julia', 35 ]

// Object.entries
const myEntries = Object.entries(myObj)
// console.log(myEntries)
// [ [ 'name', 'Julia' ], [ 'age', 35 ] ]

// ERROR OBJECT

// try {
// 	throw new Error('my error message')
// } catch (e) {
// console.log('message', e.message) // my error message
// console.log('name', e.name) // Error
// console.log('stack', e.stack)
// Error: my error message
//   at Object.<anonymous> (C:\Users\admin\OneDrive\Desktop\Privat\coding\Masterschool\Practice\Miscellaneous\arrayMethods.js:180:8)
//   at Module._compile (node:internal/modules/cjs/loader:1103:14)
//   at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
//   at Module.load (node:internal/modules/cjs/loader:981:32)
//   at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//   at node:internal/main/run_main_module:17:47
// }
