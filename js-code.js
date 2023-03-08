/* 
this is for coding practise fro js interview 
*/
//1. what is the output of below code?

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
/* 1: Undefined
2: ReferenceError
3: null
4: {model: "Honda", color: "white", year: "2010", country: "UK"} */


//2. What is the output of below code
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
/* 1: 1, undefined and undefined
2: ReferenceError: X is not defined
3: 1, undefined and number
4: 1, number and number */



//3.What is the output of below code
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
/* 1: A, B and C
2: B, A and C
3: A and C
4: A, C and B */


//4. What is the output of below equality check
console.log(0.1 + 0.2 === 0.3);
/* 1: false
2: true */



//5. What is the output of below code
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

/* 1: 1function
2: 1object
3: ReferenceError
4: 1undefined */



//6. What is the output of below code
function foo() {
  return;
  {
    message: "Hello World";
  }
}
// console.log(foo());

/* 1: Hello World
2: Object {message: "Hello World"}
3: Undefined
4: SyntaxError */



//7. What is the output of below code

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

/* 1: [empty, 'b', 'c', 'd'], empty, 3
2: [null, 'b', 'c', 'd'], empty, 3
3: [empty, 'b', 'c', 'd'], undefined, 4
4: [null, 'b', 'c', 'd'], undefined, 4 */



// 8. What is the output of below code in latest Chrome
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
/* 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
2: [empty × 3], [empty × 2, 100], [empty × 3]
3: [null × 3], [null × 2, 100], [null × 3]
4: [], [100], [] */



//9. What is the output of below code
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

 console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3()); 
/* 1: 0, 1, 2
2: 0, { return 1 }, 2
3: 0, { return 1 }, { return 2 }
4: 0, 1, undefined */




// 10. What is the output of below code
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
/* 1: true, true
2: true, false
3: SyntaxError, SyntaxError,
4: false, false */

/* 
The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3); // True converted as 1 during comparison
True
Whereas the second statement follows the below order,

console.log(3 > 2 > 1);
console.log(true > 1);
console.log(1 > 1); // False converted as 0 during comparison
False


*/




//11. What is the output of below code in non-strict mode
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
/* 1: 1, 2, 3
2: 3, 2, 3
3: SyntaxError: Duplicate parameter name not allowed in this context
4: 1, 2, 1 */

/* 

In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

Note: In strict mode, duplicate parameters will throw a Syntax Error.

//12. What is the output of below code
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
/* 1: 1, 2, 3
2: 3, 2, 3
3: SyntaxError: Duplicate parameter name not allowed in this context
4: 1, 2, 1 */


//13. What is the output of below code
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
/* 1: ReferenceError: arguments is not defined
2: 3
3: undefined
4: null */


//14. What is the output of below code
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");
/* 1: True, False
2: False, True
 */



//15. What is the output of below code
console.log(Math.max());
/* 1: undefined
2: Infinity
3: 0
4: -Infinity */


//16. What is the output of below code
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
/* 1: True, True
2: True, False
3: False, False
4: False, True */


//17. What is the output of below code
console.log(10 + "10");
console.log(10 - "10");
/* 1: 20, 0
2: 1010, 0
3: 1010, 10-10
4: NaN, NaN */



//18. What is the output of below code
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
/* 1: True, I'm True
2: True, I'm False
3: False, I'm True
4: False, I'm False */



//19. What is the output of below code
console.log([1, 2] + [3, 4]);
/* 1: [1,2,3,4]
2: [1,2][3,4]
3: SyntaxError
4: 1,23,4 */


//20. What is the output of below code
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
/* 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"} */

//extra

/* let aData= [1,1,4,5,4,3,2,6,7,8]
const neData= new Set(aData)
console.log(neData); */


//21. What is the output of below code
console.log(NaN === NaN);
/* 1: True
2: False */


//22. What is the output of below code
let numbes = [1, 2, 3, 4, NaN];
console.log(numbes.indexOf(NaN));
/* 1: 4
2: NaN
3: SyntaxError
4: -1 */

/* 
The indexOf uses strict equality operator(===) internally
 and NaN === NaN evaluates to false. Since indexOf won't
  be able to find NaN inside an array,
   it returns -1 always. But you can use 
   Array.prototype.findIndex method to find out the index of NaN 
   in an array or You can use Array.prototype.includes
   to check if NaN is present in an array or not.

let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true

*/


//23. What is the output of below code
//let [a, ...b,] = [1, 2, 3, 4, 5];
//console.log(a, b);
/* 1: 1, [2, 3, 4, 5]
2: 1, {2, 3, 4, 5}
3: SyntaxError
4: 1, [2, 3, 4]
Answer */
/* 

When using rest parameters, trailing commas are not allowed and 
will throw a SyntaxError. If you remove the trailing comma then 
it displays 1st answer

let [a, ...b] = [1, 2, 3, 4, 5];

console.log(a, b); // 1, [2, 3, 4, 5]

*/

//25. What is the output of below code
async function func() {
  return 10;
}
console.log(func());
/* 1: Promise {<fulfilled>: 10}
2: 10
3: SyntaxError
4: Promise {<rejected>: 10} */



//28. What is the output of below code
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);

//: Process completed! and 1 2 3 5



//29. What is the output of below code
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
/* 1: Set(4) {"+0", "-0", NaN, undefined}
2: Set(3) {"+0", NaN, undefined}
3: Set(5) {"+0", "-0", NaN, undefined, NaN}
4: Set(4) {"+0", NaN, undefined, NaN} */



//30. What is the output of below code
const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

console.log(sym1 === sym2, sym3 === sym4);

/* 1: true, true
2: true, false
3: false, true
4: false, false

Symbol.for() function creates a symbol in a global symbol registry list.
 But it doesn't necessarily create a new symbol on every call,
  it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
Note: The symbol description is just useful for debugging purposes.


*/

//32.What is the output of below code
let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}
/* 1: SyntaxError
2: It is not a string!, It is not a number!
3: It is not a string!, It is a number!
4: It is a string!, It is a number! */

/* The return value of typeof myNumber or typeof myString is always a
 truthy value (either "number" or "string"). The ! operator operates on either
 typeof myNumber or typeof myString, converting them to boolean values.
  Since the value of both !typeof myNumber and !typeof myString is false, 
  the if condition fails, and control goes to else block. 
  To make the ! operator operate on the equality expression, one needs to add parentheses:

if (!(typeof myNumber === "string"))
Or simply use the inequality operator:

if (typeof myNumber !== "string")
  */
 
//34. What is the output of below code
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
// A B 



//35. What is the output of below code
//const [x, ...y, z] = [1, 2, 3, 4];
//console.log(x, y, z);
/* 1: 1, [2, 3], 4
2: 1, [2, 3, 4], undefined
3: 1, [2], 3
4: SyntaxError */


/* 
const [x,y, z] = [1, 2, 3, 4];
console.log(x, y, z);
VM49:2 1 2 3
 */



// 37. What is the output of below code
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}


/* 
If you leave out the right-hand side assignment for the 
destructuring object, the function will look for at least
 one argument to be supplied when invoked. Otherwise you will
  receive an error Error: Cannot read property 'length' of 
  undefined as mentioned above.

*/
area(); //error 

function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area({});

function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();


//38. What is the output of below code
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);

// Tom 






//39. What is the output of below code
function checkType(num = 1) {
  console.log(typeof num);
}

/* checkType();
checkType(undefined);
checkType("");
checkType(null);
 */
/* 1: number, undefined, string, object
2: undefined, undefined, string, object

3: number, number, string, object

4: number, number, number, number */



//40. What is the output of below code
function add(item, items = []) {
  items.push(item);
  return items;
}

/* console.log(add("Orange"));
console.log(add("Apple")); */




//41. What is the output of below code
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");



//42. What is the output of below code
/* function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer(); */

/* 1: ReferenceError
2: Inner
Answer
Answer: 1
The functions and variables declared in the function body
cannot be referred from default value parameter initializers. 
If you still try to access, it throws a run-time
ReferenceError(i.e, inner is not defined). */




//43. What is the output of below code
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
/* 1: [3, 4, 5], undefined
2: SyntaxError
3: [3, 4, 5], []
4: [3, 4, 5], [undefined] */




//44. What is the output of below code
/* 
const obj = { key: "value" };
const array = [...obj];
console.log(array);
*/
/* 1: ['key', 'value']
2: TypeError
3: []
4: ['key']
Answer */

// Answer: 2
/* Spread syntax can be applied only to iterable objects. 
By default, Objects are not iterable, but they 
become iterable when used in an Array, or
 with iterating functions such 
 as map(), reduce(), and assign(). 
 If you still try to do it, it still throws TypeError: obj is not iterable. */



 //45. What is the output of below code

/* function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value); */

/* 1: 1
2: undefined
3: SyntaxError
4: TypeError
Answer 3
 */


//47. What is the output of below code
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
/* 1: 1,2,3 and 1,2,3
2: 1,2,3 and 4,5,6
3: 1 and 1
4: 1 */


//48. What is the output of below code

//const num = 0o38;
//console.log(num);

/* 1: SyntaxError
2: 38
Answer
Answer: 1
If you use an invalid number(outside of 0-7 range) 
in the octal literal, JavaScript will throw a SyntaxError. 
In ES5, it treats the octal literal as a decimal number. */


//49. What is the output of below code
/* const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
} */
/* 1: 100
2: ReferenceError */



//50. What is the output of below code
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());

/* 1: undefined, undefined
2: Person, Person
3: SyntaxError
4: Window, Window
Answer
Answer: 4
When a regular or prototype method is called without a value 
for this, the methods return an initial this value if the value
 is not undefined. Otherwise global window object will be returned.
  In our case, the initial this value is undefined so both methods 
  return window objects.
 */




  //51. What is the output of below code
class Vehicles {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Carr extends Vehicles {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const carr = new Carr("BMW");
console.log(carr.start());
/* 1: SyntaxError
2: BMW vehicle started, BMW car started
3: BMW car started, BMW vehicle started
4: BMW car started, BMW car started
Answer
Answer: 3
The super keyword is used to call methods of a superclass.
 Unlike other languages the super invocation doesn't need to 
 be a first statement. i.e, The statements will be executed 
 in the same order of code. */



 //54. What is the output of below code?
 console.log(typeof typeof typeof true);
/*  1: string
 2: boolean
 3: NaN
 4: number
 Answer
 Answer: 1
 The typeof operator on any primitive returns a string value.
  So even if you apply the chain of typeof operators on the 
  return value, it is always string. */
 
 




//55. What is the output of below code?
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
/* 1: If
2: Else
3: NaN
4: SyntaxError
Answer
Answer: 1
The type of operator on new Number always returns object. i.e, 
typeof new Number(0) --> object.
Objects are always truthy in if block
Hence the above code block always goes to if section. */






//55. What is the output of below code in non strict mode?
let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);
/* 1: ""
2: Error
3: John
4: Undefined
Answer
Answer: 4
It returns undefined for non-strict mode and returns Error for 
strict mode. In non-strict mode, the wrapper object is going to
 be created and get the mentioned property. But the object get
  disappeared after accessing the property in next line. */




  //57. What is the output of below code ?
/* 1: console.log(true && 'hi');
2: console.log(true && 'hi' && 1);
3: console.log(true && '' && 0); */
/* Answer
1: hi
2: 1
3: ''
Reason : The operator returns the value of the first falsy operand 
encountered when evaluating from left to right, or the value of
 the last operand if they are all truthy.

Note: Below these values are consider as falsy value
 */
/* 1: 0
2: ''
3: null
4: undefined
5: NAN */



//58. What is the output of below code ?
let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str);
/* 1: false
2: Error
3: true
Answer
Answer: 3
Arrays have their own implementation of toString method that
 returns a comma-separated list of elements. So the above code 
 snippet returns true. In order to avoid conversion of array type,
  we should use === for comparison.

 */


 // 60. What is the output of below code?
let quickPromise = Promise.resolve();

quickPromise.then(() => console.log("promise finished"));

console.log("program finished"); 
/* 1: program finished
2: Cannot predict the order
3: program finished, promise finished
4: promise finished, program finished */






//61. What is the output of below code?
console.log('First line')
['a', 'b', 'c'].forEach((element) => console.log(element))
console.log('Third line')
/* 1: First line, then print a, b, c in a new line, and finally print Third line as next line
2: First line, then print a, b, c in a first line, and print Third line as next line
3: Missing semi-colon error
4: Cannot read properties of undefined
Answer
Answer: 4
When JavaScript encounters a line break without a semicolon, 
the JavaScript parser will automatically add a semicolon based 
on a set of rules called Automatic Semicolon Insertion which
 determines whether line break as end of statement or not to 
 insert semicolon. But it does not assume a semicolon before
  square brackets [...]. So the first two lines considered as a single
 statement as below. */



 //64. What is the output of below code?
const numberss = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numberss);
/* 1: [11, 18, 23, 25, 31, 33, 200]
2: [11, 18, 200, 23, 25, 31, 33]
3: [11, 25, 31, 23, 33, 18, 200]
4: Cannot sort numbers
Answer
Answer: 2
By default, the sort method sorts elements alphabetically. 
This is because elemented converted to strings and strings 
compared in UTF-16 code units order. Hence, you will see the
 above numbers not sorted as expected. In order to sort numerically 
 just supply a comparator function which handles 
numeric sorts. */

const numbersss = [11, 25, 31, 23, 33, 18, 200];
numbers.sort((a, b) => a - b);
console.log(numbers);




//66. What is the output of below code?
/* console.log(name);
console.log(message());
var name = 'John';
(function message() {
   console.log('Hello John: Welcome');
}); */
/* 1: John, Hello John: Welcome
2: undefined, Hello John, Welcome
3: Reference error: name is not defined, Reference error: message is not defined
4: undefined, Reference error: message is not defined
Answer
Answer: 4
IIFE(Immediately Invoked Function Expression) is
 just like any other function expression which won't 
 be hoisted. Hence, there will be a reference error 
 for message call. The behavior would be the same with below function 
expression of message1, */




//68. What is the output of below code?
var currentCity = "NewYork";

var changeCurrentCity = function() {
  console.log('Current City:', currentCity);
  var currentCity = "Singapore";
  console.log('Current City:', currentCity);
}

changeCurrentCity();
/* 1: NewYork, Singapore
2: NewYork, NewYork
3: undefined, Singapore
4: Singapore, Singapore
Answer
Answer: 3
Due to hositing feature, the variables declared 
with var will have undefined value in the creation 
phase so the outer variable currentCity will get same 
undefined value. But after few lines of code JavaScript 
engine found a new function call(changeCurrentCity())
 to update the current city with var re-declaration. 
 Since each function call will create a new execution 
 context, the same variable will have undefined value
  before the declaration and new value(Singapore) after
   the declarion. Hence, the value undefined print first
    followed by new value 
Singapore in the execution phase. */




//69. What is the output of below code in an order?
function second() {
	var message;
  console.log(message);
}

function first() {
	var message="first";
  second();
  console.log(message);
}

var message = "default";
first();
console.log(message);

/* 1: undefined, first, default
2: default, default, default
3: first, first, default
4: undefined, undefined, undefined
Answer
Answer: 1
Each context(global or functional) has it's own variabl
 environment and the callstack of variables in a LIFO order.
  So you can see the message variable value from second, 
  first functions in an order followed by global context 
  message variable value at the end. */






  //71. What is the output of below code?
/* const user = {
  name: 'John',
  eat() {
    console.log(this);
    var eatFruit = function() {
      console.log(this);
    }
    eatFruit()
  }
}
user.eat(); */
/* 1: {name: "John", eat: f}, {name: "John", eat: f}
2: Window {...}, Window {...}
3: {name: "John", eat: f}, undefined
4: {name: "John", eat: f}, Window {...}
Answer
Answer: 4
this keyword is dynamic scoped but not lexically scoped . 
In other words, it doesn't matter where this has been written
 but how it has been invoked really matter. In the above code
  snippet, the user object invokes eat function so this keyword
   refers to user object but eatFruit has been invoked by eat 
   function and this will have default Window object.

The above pit fall fixed by three ways,

In ES6, the arrow function will make this keyword as
 lexically scoped. Since the surrounding object of this
  object is user object, the eatFruit function will contain
   user object for this object. */
/* const user = {
  name: 'John',
  eat() {
    console.log(this);
    var eatFruit = () => {
      console.log(this);
    }
    eatFruit()
  }
} */
/* user.eat();
The next two solutions have been used before ES6 introduced.

It is possible create a reference of this into a separate variable and use that new variable inplace of this keyword inside eatFruit function. This is a common practice in jQuery and AngularJS before ES6 introduced.
const user = {
  name: 'John',
  eat() {
    console.log(this);
    var self = this;
    var eatFruit = () => {
      console.log(self);
    }
    eatFruit()
  }
} */
/* user.eat();
The eatFruit function can bind explicitly with this keyword where it refers Window object.
const user = {
  name: 'John',
  eat() {
    console.log(this);
    var eatFruit = function() {
      console.log(this);
    }
    return eatFruit.bind(this)
  }
}
user.eat()();
 */




//77. What is the output of below code?
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));
/* 1: [{status: "fullfilled", value: undefined}, {status: "rejected", reason: undefined}]
2: [{status: "fullfilled", value: undefined}, Uncaught(in promise)]
3: Uncaught (in promise)
4: [Uncaught(in promise), Uncaught(in promise)]
Answer
Answer: 2 */
/* The above promises settled at the same time but one of them 
resolved and other one rejected. When you use .all method on 
these promises, the result will be short circuted by throwing
 an error due to rejection in second promise. But If you use 
 .allSettled method then result of both the promises will be
  returned irrespective of resolved or rejected promise status 
  without throwing any error.
 */
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));





//78. What is the output of below code?
try {
  setTimeout(() => {
    console.log('try block');
    throw new Error(`An exception is thrown`)
  }, 1000);
} catch(err) {
  console.log('Error: ', err);
}
/* 1: try block, Error: An exception is thrown
2: Error: An exception is thrown
3: try block, Uncaught Error: Exception is thrown
4: Uncaught Error: Exception is thrown
Answer
Answer: 3
If you put setTimeout and setInterval methods inside the
 try clause and an exception is thrown, the catch clause
 will not catch any of them. This is because the try...catch 
 statement works synchronously, and the function in the above
  code is executed asynchronously after a certain period of time.
  Hence, you will see runtime exception without catching the error. 
  To resolve this issue, you have to put the try...catch block 
  inside the function as below, */

setTimeout(() => {
   try {
      console.log('try block');
      throw new Error(`An exception is thrown`)
   } catch(err) {
      console.log('Error: ', err);
   }
  
  }, 1000);
/* You can use .catch() function in promises to 
avoid these issues with asynchronous code. */
