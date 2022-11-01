// OBJECT METHODS

const myObj = {
	name: 'Julia',
	age: 35,
}

const myIterable = [
	['name', 'Julia'],
	['age', 36],
]

// OBJECT.KEYS
const myKeys = Object.keys(myObj)
// console.log(myKeys)
// [ 'name', 'age' ]

// OBJECT.VALUES
const myValues = Object.values(myObj)
// console.log(myValues)
// [ 'Julia', 35 ]

// OBJECT.ENTRIES
const myEntries = Object.entries(myObj)
// console.log(myEntries)
// [ [ 'name', 'Julia' ], [ 'age', 35 ] ]

// OBJECT.FROMENTRIES
// The Object.fromEntries() method transforms a list of key-value pairs into an object.

const fromEntries = Object.fromEntries(myIterable)
console.log(fromEntries)
// { name: 'Julia', age: 36 }

// ------------------------------------------------

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
