import React, {useState, useEffect} from 'react';

const CountryStateCitySelector = () => {

// Q1: Remove duplicate numbers

const arrayList = [1,1,2,3,56, 22, 23, 23]

const uniqueArray = [...new Set(arrayList)] // built in function

function removeDupArray(arr){
  const uniqueArray1 = []

  for(let i = 0; i< arr.length; i++){
    let isDuplicate = false

    for(let j = 0; j< uniqueArray1.length; j++){
      if(arr[i] === uniqueArray1[j]){
        isDuplicate = true;
        break
      }
    }
    if(!isDuplicate){
      uniqueArray1.push(arr[i])
    }
  }
  return uniqueArray1
}

const result = removeDupArray(arrayList)

//Q2: Palindrome check

// const stringTest = "mam"

// const reverseString = stringTest.split('').reverse().join('');

// if(stringTest === reverseString){
//   console.log("Yes")
// }
// else{
//   console.log("No")
// }

//Q3: Find the longest word from given sentence

// function longestWord(sentence){
  
//   const words = sentence.split(/\W+/)

//   // console.log(words)

//   let longestWord = ''

//   for(let word of words){
//     if(word.length > longestWord.length){
//       longestWord = word
//     }
//   }

//   return longestWord
// }

// console.log(longestWord("My Name is Prashant"))
// console.log(longestWord("This is Bangalore karnataka"))

//Q4: find the max number from given array

// const arrayNumber = [10, 20, 100, 301, 1, 3, 145, 302]

// function findMaxNumber(arr){
//   let maxNum = arr[0]
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > maxNum){
//       maxNum = arr[i]
//     }
//   }
//   return maxNum
// }

//console.log(findMaxNumber(arrayNumber))

// const maxNumm = Math.max(...arrayNumber)

// console.log(maxNumm, "maxNummmm")

//Q4: return reverse string

// function reverseString(str){
//   let reversedString = ""

//   for(let i=str.length -1; i>=0; i--){
//     reversedString += str[i]
//   }

//   return reversedString;
// }

// console.log(reverseString("prashant"))

//Q5: smallest word

// function smallestWord(sentence){

//   let words = sentence.split(/\W+/)

//   let smallestWord = words[0]

//   for(let word of words){
//     if(word.length < smallestWord.length && word.length>0 ){
//       smallestWord = word
//     }
//   }

//   return smallestWord

// }

// console.log(smallestWord("My Name is Prashant"))

//Q:6: Given two arrays arr1 and arr2, both of which are sorted in non-decreasing order, merge them into a single sorted array. The resulting array should be in non-decreasing order and include all the elements from both arr1 and arr2.

// const array1 = [1,3,4]
// const array2 = [2,4,5]

// const array3 = array1.concat(array2)

// console.log(array3.sort())

//Q7: Find the largest element from given nested array

// function findLargestElementNestedArray(array1){

//   let largestElement = null

//   function traverseFunction(array2){
//     for(let element of array2){
//       if(Array.isArray(element)){
//         traverseFunction(element)
//       }

//       else{
//         if(element > largestElement){
//           largestElement = element
//         }
//       }
//     }
//   }
//   traverseFunction(array1)

//   return largestElement

// }

// const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
// console.log(findLargestElementNestedArray(nestedArray)); 

//Q8: Given a string s, your task is to count the occurrences of each character in the string and return an object where the keys are the characters and the values are their corresponding counts.

// function countChar(str){
//   debugger
//   let charCount={}
//   for(let char of str){
//     if(charCount[char]){
//       charCount[char]++;
//     }
//     else{
//       charCount[char] = 1
//     }
//   }
//   return charCount;
// }

// console.log(countChar("prasha"))


// function countChars(str){
//   let charsCount={}

//   for(let char of str){
//     if(charsCount[char]){
//       charsCount[char]++
//     }

//     else{
//       charsCount[char] = 1
//     }
//   }

//   return charsCount
// }

// console.log(countChars("shruthii"))

//Q9: Polyfills forEach, map, filter

//foreach:

// const names = ["ali", "hamza", "jack"];
// function consoleFunc(x) {
//    console.log(x);
// }

// names.forEach(consoleFunc);

// Array.prototype.ourForEach = function(callback){
//   for (let i=0; i<this.length; i++){
//     callback(this[i], i)
//   }
// }

// names.ourForEach(consoleFunc)

//map:

// const users = [1,2,3,4,5,6]

// function double(x){
//   return x+x
// }

// const result = users.map(double)

// //console.log(result)

// Array.prototype.ourMap = function (callback){
//   const newArray = []

//   for(let i=0; i<this.length; i++){
//     newArray.push(callback(this[i]))
//   }
//   return newArray
// }

// console.log(users.ourMap(double))

// Event.preventDefault

// const [update, setUpdate] = useState('')

// useEffect(()=>{
//   setUpdate("Prashant")
// }, [])

// useEffect(()=>{
//   if(update){
//     console.log("state updated")
//   }
// },[update])

// function handleclick(e){
//   e.preventDefault()
//   console.log("prashhhh")
// }

// In regular function this refers to global object where as arrow function this refers to the sorrouding lexical scope or inherit from its sorrouding within function

// const obj = {
//   "text": "logging",
//   "list": ['1','2','3'],
//   logging(){
//       this.list.forEach(function(item){
//           console.log(this?.text + (item))
//       })
//   }
// }

// obj.logging()


// const obj2 = {
//   "text": "logging",
//   "list": ["1", "2", "3"],
//   logging(){
//     this.list.forEach((item)=>{
//       console.log(this?.text + item)

//     })
//   }
// }

// obj2.logging()


// function testNumber(){

//   var test = []

//   for(let z=0; z<5; z++){
//     test[z] = function foo(){
//       return z
//     }
//   }

//   return test
// }

// let test1 = testNumber()

// console.log(test1[2]())

// function testHack() {
//   var test = [];
//   for (var z = 0; z < 5; z++) {
//       test[z] = function(index){
//           return function foo() {
//               return index;
//           };
//       }(z);
//   }
//   return test;
// }
// var testArray = testHack();
// console.log(testArray[2]());


// var global scope and let const block scopt and will npt be available in window object when we try to access by this key word 

/* var a = 1
const b = 2 */


// function test(){
//   var a = 1
//   const b = 2
  
//   console.log(this.a)
//   console.log(this.b)
  
//   console.log(a, b)
  
//   }
  
//   console.log(test())

// return 10 to 1 print every 1 second delay

// for(let i=10; i>0; i--){
//   setTimeout(()=>console.log(i),(10-i)*1000)
// }

// Javascript output based question

// setTimeout(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// Promise.resolve().then(() => setTimeout(() => console.log(3)));
// new Promise(() => console.log(4));
// setTimeout(() => console.log(5));



//** */ for .... in

// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 30
// }

// //console.log(person, "person")

// for(let key in person){
//   console.log(`${key}: ${person[key]}`)
// }

// const person2 = [
//   {
//     fName: "John",
//     lName: "Doe",
//     age: 30
//   },
//   {
//     fName: "John1",
//     lName: "Doe1",
//     age: 31
//   }
// ]

// for (let key of person2){
//   if(key.age === 31){
//     console.log(key.fName)

//   }
 
// }

// function switchCaseTesting(grade){
//   switch(grade){
//     case "A+":
//       return "Nailed it"
//     case "B":
//     case "B+":
//     case "B++":
//       return "Passed it"
//     case "D":
//       return "Just passed"
//     case "E":
//       return "Fail"
//     default:
//       return "failt"

//   }
// }

// console.log(switchCaseTesting("A+"))

// Question : You have an array of users with information about their name, age, and a list of purchases. Each purchase has a product name and an amount spent.?

// Your task is to:
// Find all users who are 18 years or older.
// For these users, calculate the total amount spent across all purchases.
// Return an array of objects for each user who meets the age requirement, containing only their name and totalSpent.

// ans:

// const users = [
//   { 
//     name: "Alice", 
//     age: 25, 
//     purchases: [
//       { product: "Book", amount: 10 },
//       { product: "Pen", amount: 2 }
//     ]
//   },
//   { 
//     name: "Bob", 
//     age: 17, 
//     purchases: [
//       { product: "Notebook", amount: 5 },
//       { product: "Pencil", amount: 1 }
//     ]
//   },
//   { 
//     name: "Charlie", 
//     age: 30, 
//     purchases: [
//       { product: "Bag", amount: 50 },
//       { product: "Shoes", amount: 80 }
//     ]
//   }
// ];

// const resultfilter = users
//   .filter((item) => item.age > 17)
//   .map((item1) => {
//     let totalSpent = item1.purchases.reduce((sum, purchase) => sum + purchase.amount, 0);

//     return {
//       name: item1.name,
//       totalSpent: totalSpent
//     };
//   });

// console based out put question:

// var a= {};
// var b= {key:'b'}
// var c= {key:'c'}
// a[b]=600;
// b[c]=700;

// console.log(a[b]) // 600
// console.log(a[c]) // 600
// console.log(b[b]) // 700
// console.log(b[c]) // 700

// console.log(a)

// console.log(NaN)
// console.log(typeof(NaN))

//****************//

/* "use strict" */

// function doSomething(){
//   console.log(this)
//   }
  
//   doSomething()

// *************** //

// const obj = {
//   firstName: "Virat",
//   lastName: "Kohli",
//   myFn: function() {
//     const printName = () => {
//       console.log(this);
//       return this;
//     };
//     printName();
//   }
// };

// obj.myFn()


//********************//

// console.log([])
// console.log(false == [])
// console.log(false == ![])
// console.log([] == [])

// **************//

// const user = { 
//   'name': 'Alex',
//   'address': '15th Park Avenue',
//   'age': 43,
//   'department':{
//       'name': 'Sales',
//       'Shift': 'Morning',
//       'address': {
//           'city': 'Bangalore',
//           'street': '7th Residency Rd',
//           'zip': 560001
//       }
//   }
// }

// const {department} = user
// //console.log(department)

// const {department: {address}} = user

// console.log(address)

// // ************** //


// const getUser = () => {
//   return {
//     name: "prash11",
//     age: 32
//   }
// }


// const {name, age} = getUser()

// console.log(name)

//********** */

// const users = [
//   { 
//       'name': 'Alex',
//       'address': '15th Park Avenue',
//       'age': 43
//   },
//   { 
//       'name': 'Bob',
//       'address': 'Canada',
//       'age': 53
//   },
//   { 
//       'name': 'Carl',
//       'address': 'Bangalore',
//       'age': 26
//   }
// ];

// // for (let {name, age} of users){
// //   console.log(`${name} has ${age}` )
// // }

// const mapping = users.map((item)=>{
//   console.log(`${item?.name} has ${item.age}`)
// })

// console.log(mapping, "mapping")


//***********/

// console.log()
// console.warn()
// console.error()

//******************/

// const user = { 
//   'name': 'Alex',
//   'address': '15th Park Avenue',
//   'age': 43,
//   'department':{
//       'name': 'Sales',
//       'Shift': 'Morning',
//       'address': {
//           'city': 'Bangalore',
//           'street': '7th Residency Rd',
//           'zip': 560001
//       }
//   }
// }

// const updatedUser = {
// ...user,
// department: {
// ...user.department,
// number: 7,
// address: {
// ...user.department.address,
// code:9845,
// test: {
//   name: "add1",
//   age:"add2"
//   }
// }
// },
// }

// console.log(updatedUser)

//********* */

// function a(){
//   console.log(b)
// }

// var b = 10

// a()


//******* Closure *****//

//Ex:1

// function x(){
//   var a = 10;
//   function y(){
//     console.log(a)
//   }

//   var a = 100;

//   return y
// }

// const z = x()

// console.log(z)

// z()


//Ex:2 with let 

// function x(){
//   for(let i=0; i<=5; i++){
//     setTimeout(function (){
//       console.log(i)
//     }, i*1000)
//   }
// }

//x()

//with var

// function y(){
//   for(var i=5; i>=0; i--){
//     function close(i){
//     setTimeout(function (){
//       console.log(i)
//     }, (5-i)*1000)
//   }

//   close(i)
//   }
  
// }

// y()


// function a(){
//   var x = 0; var y =10
//    return function b(){
//     console.log(x)
//   }
// }
// //a()();

// const test = a()
// console.log(test())

// function Counter(){
//   var count = 0
  
//   this.incrementCOunter = function(){
//   count ++
//   console.log(count)
//   }
  
//   this.decrementCounter = function (){
//   count--
//   console.log(count)
//   }
//   }
  
//   var Couter1 = new Counter()
  
//   console.log(Couter1.incrementCOunter())

//****************/

// function greet(name, callback){
//   console.log(`Hellow ${name}`)
//   callback()
// }

// function sayGoodbye(){
//   console.log("Goodbye")
// }

// greet("prashant", sayGoodbye)

// callback

// setTimeout(function (){

// 	console.log("Timer")

// }, 5000);

// function x(y){
// console.log("x")
// y()
// }

// x(function y(){
// console.log("y")
// })


//*************/

//calculate area of circle


// const radiusInput = [3,2,4,5]

// const area = function(radius){
//   return (Math.PI * radius * radius)
// }

// const diameter = function(radius){
//   return (2 * radius)
// }

// const circumperence = function(radius){
//   return (2 * Math.PI * radius)
// }

// const calculate = function(radiusInput, logic){
//   const outPut = []
//   for(let i = 0; i<radiusInput.length; i++){
//     outPut.push(logic(radiusInput[i]))
//   }
//   return outPut
// }

// console.log(calculate(radiusInput, area))
// console.log(calculate(radiusInput, diameter))
// console.log(calculate(radiusInput, circumperence))

// // console.log(calculateArea(radius))





  return (
    <>
    {/* <div onClick={handleclick}>{update}</div>
    <a href="https://google.com" onClick={handleclick}>Click Me</a>; */}
    <div></div>
    </>
  );
};

export default CountryStateCitySelector;
