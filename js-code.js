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

