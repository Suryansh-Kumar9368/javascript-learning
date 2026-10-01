// arrray

const myArr=[0,1,2,9,5,22,44]
// const heros=["shaktiman","naagraj"]

// const myArr1= new Array(33,44,550)

// console.log(myArr[1]);

// // array methods

// // push and pop insert and remove value from end 
// myArr.push(7)
// myArr.push(9)

// myArr.pop()
// console.log(myArr);

// // unshift and shift insert and remove value from start 
// myArr.unshift(22)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// // includes check value and indexof check index value of given element 
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(5))


// slice gives element from start index to end index(exclude) and important things it cannnot changes in original array 

console.log("Before slice",myArr);
const Arr2=myArr.slice(1,3)
console.log(Arr2);
console.log("After slice",myArr);

// splice gives element from start index to end index and important things it canchanges in original array 

console.log("Before splice",myArr);
const Arr3=myArr.splice(1,3)

console.log(Arr3);
console.log("After slice",myArr);







