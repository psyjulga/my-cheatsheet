// ARRAY METHODS

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ---- .SOME -----
// does at least ONE element passs the condition?
// returns boolean
const some = myArr.some((x) => x === 5)
// console.log(some) // true

// ---- .EVERY -----
// do ALL elements pass the condition?
// returns boolean
const every = myArr.every((x) => x < 10)
// console.log(every) // true

// ---- .FIND -----
// returns the VALUE of the FIRST element answering the condition
// if none => returns undefined
const find = myArr.find((x) => x > 3)
// console.log(find) // 4

// working with array of objects
const myArrOfObj = [
	{ name: 'Julia', age: 35 },
	{ name: 'Benjamin', age: 34 },
	{ name: 'Hicham', age: 33 },
]
const findArrOfObj = myArrOfObj.find((x) => x.name === 'Benjamin')
// console.log(findArrOfObj) // { name: "Benjamin", age: 34 }

// ---- .FINDINDEX -----
// returns the INDEX of the FIRST element answering the condition
// if none => returns -1
const findIndex = myArr.findIndex((x) => x > 7)
// console.log(findIndex) // 7

// ---- .FILTER -----
// returns an ARRAY of ALL elements answering the conditions
// if none => returns empty array => []
const filteredArray = myArr.filter((x) => x > 3 && x < 7)
// console.log(filteredArray) // [ 4, 5, 6 ]

// ---- .MAP -----
// creates a NEW ARRAY and returns it by a function on an existing one
// original array is NOT mutated
const mappedArray = myArr.map((x) => x + 10)
// console.log(mappedArray) // [11,12,13,14,15,16,17,18,19]

// ----.MAP & .FILTER -----
const mappedAndFilteredArray = myArr.map((x) => x * 2).filter((x) => x > 10)
// console.log(mappedAndFilteredArray) // [12,14,16,18]

// ---- .FOREACH -----
// returns UNDEFINED
// => NO ARRAY METHODS CAN BE RUN ON THE OUTPUT
// original array is NOT mutated
// but YOU CAN MUTATE the original:
myArr.forEach((x, index) => (myArr[index] = x * x))
// console.log(myArr) // [1,4,9,16,25,36,49,64,81]

// ---- .REDUCE -----
// reduces an array down to one value
// arr.reduce(callback, optionalInitialValue)
const result = myArr.reduce((acc, curr) => acc + curr)
// console.log(result) // 285

// ---- .REVERSE -----
// MUTATES the original
const reversedArray = myArr.reverse()
// console.log(reversedArray) // [81,64,49,36,25,16,9,4,1]
// console.log(myArr) // [81,64,49,36,25,16,9,4,1]

// ---- .SORT -----
// => UNICODE order
// MUTATES the original
const sortedArray = myArr.sort()
// console.log(sortedArray) // [1,16,25,36,4,49,64,81,9]
// console.log(myArr) // [1,16,25,36,4,49,64,81,9]

// ---- .PUSH -----
// MUTATES the original
// ADDS an element at the LAST position
// returns the array's new length
const pushed = myArr.push('push')
// console.log(myArr) // [1,16,25,36,4,49,64,81,9,"push"]
// console.log(pushed) // 10

// ---- .POP -----
// MUTATES the original
// REMOVES the LAST element
// returns the removed element
const popped = myArr.pop()
// console.log(popped) // "push"
// console.log(myArr) // [1,16,25,36,4,49,64,81,9]

// ---- .JOIN -----
// combines the elements
// => converts to STRING
const joinedArr1 = myArr.join() // separator "," is the default
const joinedArr2 = myArr.join(' ') // define a separator
// console.log(joinedArr1) // 1,16,25,36,4,49,64,81,9
// console.log(joinedArr2) // 1 16 25 36 4 49 64 81 9

// ---- .SPLICE -----
// adds / removes elements from ANYWHERE within the array
// MUTATES the original
// returns the removed items
// arg1 => starting index, mandatory (-1 => last element)
// arg2 => count of elements to be removed, optional (0 => none removed)
// arg3, ... => items to be added at index postion arg1
const splicedArr = myArr.splice(3, 2, 'new1', 'new2')
// console.log(splicedArr) // [36,4]
// console.log(myArr) // [1,16,25,"new1","new2",49,64,81,9]

// ---- .SLICE -----
// creates a COPY of an array between two indices
// does NOT MUTATE the original
// arg1 => first copied element
// arg2 => first NOT copied element (if no arg2 => copies all elements left)
// if no args => copies whole array
const slicedArr = myArr.slice(3, 7)
// console.log(slicedArr) // ["new1","new2",49,64]

// ---- .UNSHIFT -----
// MUTATES the original
// ADDS an element at the FIRST position
// returns the array's new length
const unshiftedArray = myArr.unshift('unshift')
// console.log(unshiftedArray) // 10
// console.log(myArr) // [ 'unshift', 1, 16, 25, 'new1', 'new2', 49, 64, 81, 9 ]

// ---- .SHIFT -----
// MUTATES the original
// REMOVES the FIRST element
// returns the removed element
const shiftedArray = myArr.shift()
// console.log(shiftedArray) // "unshift"
// console.log(myArr) // [1,16,25,'new1','new2',49,64,81,9]

// ---- .CONCAT -----
// concatenates two or more arrays into a new one
// does NOT mutate the original
const arr10 = ['Cecilie', 'Lone']
const arr20 = ['Emil', 'Tobias', 'Linus']
const children = arr10.concat(arr20)
// console.log(children)
// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
const arr1 = ['Cecilie', 'Lone']
const arr2 = ['Emil', 'Tobias', 'Linus']
const arr3 = ['Robin']
const children2 = arr1.concat(arr2, arr3)
// console.log(children2)
// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]
