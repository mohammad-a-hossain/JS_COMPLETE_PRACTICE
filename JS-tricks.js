// tricks coding with lws


// 1. swapping an array 

//let array = [1,2,3,4,5]

//     const temp = array[0]
//    array[0] = array[4]
//    array[4] = temp
 // console.log(array)

 // swapping by array destructuring 
 //let array = [1,2,3,4,5]
// [array[0], array[4]] = [array[4], array[0]]
// console.log( array);

//another way 
let a =4 ;
let b =5;
[a,b] = [b,a];
console.log(a,b);



// 2. destructuring as alias

const language={
    name:'javascript',
    founded:1995,
    founder:'Brendon eich'
}

const { name:lang, founded:established} = language
console.log(lang,established);




// 3. remove duplicate Elemen in a array using set 

let numArr= [1,22,3,4,5,6,75,4,3,2,1]
let strArr= ['abu', 'sabu','abu','labu']

console.log([... new Set(numArr)] )
console.log([... new Set(strArr)] )


//4. compare two array by value

const hasSameValue = (a,b) =>{
    return a.length === b.length && a.every((v,i) => v=== b[i])
}

 const res= hasSameValue([1,2,4],[1,2,'3'])
 console.log(res);//falsee

 // 5.comma operator
 let x=1
 x= (x++,x)
 console.log(x);


 //6. remove falsy value from an array
 let valuArry= [null,'apple',false, 333, undefined, 'sama', NaN, '33',0,'']
 let ress= valuArry.filter(Boolean)
 console.log(ress);


 //7. convert any value to boolean

 console.log(!!'suhel'); // true
 console.log(!! 0);
 console.log(!! undefined);
 console.log(!! null);




 //8.how to make flat array from multidimentional array 

 let smile= [ 'fa',['fi','fu'],[ [434, 44], null, undefined, true ],777]
let res2 = smile.flat(Infinity)
console.log(res2);


 // 9. how to replace a string in a sentence
 const qouto='India misfiring batters in the spotlight as West Indies eye series win' 

 const res4= qouto.replace(/India/g,"Bangladesh")
  console.log(res4);



  //10. what is output ?

//   [] + [] = ? black

//   {} + [] = ? Object Object

//   true + 5 = ? 6 // boolean true =1
  
  
  function anything(){ return 'Bangladesh' } 
  const res6= anything `usa` 
  console.log(res6);

  const m = 'constructor'
  console.log(m[m](88)); //m[m]= String(88)
   // 88

    
   console.log(0.1 + 0.2);//0.30000000000000004

   console.log(('objective').__proto__); // {}
   console.log(('objective').__proto__.__proto__); // [Object:null prototype] {}
   console.log(('saban').__proto__.__proto__.__proto__);  // null 





   const myFun= function(){
    return [].slice.call(arguments).sort()
   }

   console.log(myFun(2,4,5,7,8)) //[ 2, 4, 5, 7, 8 ]

   
   // 11 . how to count duplicate item in a array ?

   const listArr= ['a','c','5','d','x','a','c','3']

   //useing map fun
   function countDupl(data){
    const count={}

    data.map((d)=> {
      count[d] = (count[d] || 0) +1
    })

    return count
   }

   console.log(countDupl(listArr));
   //{ '3': 1, '5': 1, a: 2, c: 2, d: 1, x: 1 }




// 12. how to reverse a word or string

const str22= " i love Bangladesh"

function strReverse(data){

  const dataArry= data.split(' ') 

  const result = dataArry.map((d) =>{
    return d.split('').reverse().join('')
  })

  return result.join(' ')
}

console.log(strReverse(str22)); // i evol hsedalgnaB






// 13. set word length wise ascending order

const str1= 'java is not a javaScript language in programming'

function strToSort(data){

  const dataStrOne= data.split(" ")
  const resultt= dataStrOne.sort((a,b)=>{
     return  a.length - b.length
  })

  return resultt.join(" ")
}

console.log(strToSort(str1)); // a is in not java language javaScript programming


//14. how to work with async and await

function delay(i){
  return new Promise((resolve) =>{
      setTimeout(()=>{
    resolve(i);
    }, 1000)
  })

}

async function timer(n){
  console.log('staret time');

  for(let i=0; i <=n; i++){
   const rex= await delay(i)
   console.log(rex);
  }

  console.log('end time');
}

timer(5)



// heigher order function

function hello(){
  return function(){
    console.log('this is heiger order function');
  }
}

hello()()



// object interview question

//create an object

const anyThing={
  name:'abu',
  age:44,
  'i hate false':true
}

console.log(anyThing)
// update object

anyThing.name='kabu'
console.log(anyThing);

// deleting object
delete anyThing.age 
console.log(anyThing);

// how to access property
console.log(anyThing['i hate false']);
delete anyThing['i hate false']
console.log(anyThing);


// how to print key and value in an object

 const something={
  name:'hossain',
  age:44,
  like:true
 }

 for(key in something){
  console.log(key);
 }
//  name age like

for(key in something){
  console.log(something[key]); // value
}
// hossain 44 true


//--------------------------------------------------------------------

 // ** trick 1 // what is the output of the programme ?
const obj1={
   a:'one',
   b:'two',
   a:'three'
}
console.log(obj1); // { a: 'three', b: 'two' }

// **trick2 
// create a fun that will multiply by two all numbers property 
const nums={
  a:33,
  b:333,
  name:'sabu'
}

function numMulty(data){
    for(key in data){
      if(typeof data[key] === 'number'){
        data[key] = data[key] * 2
      }
    }
}

numMulty(nums)
console.log(nums); //{ a: 66, b: 666, name: 'sabu' }



/** trick 3
what is the output of the code ?
*/

const a1={}
const b1={key:'b'}
const c1={key:'c'}
a1[b1]=123 
a1[c1] = 333

console.log(a1[b1]); // 333



/* trick 4 
 what is JSON.stringify and JSON.parse ? and how to set localstorage 
*/

const user1={ 
  name:'md abu',
  age:33,
}

console.log(user1); //{ name: 'md abu', age: 33 }
console.log(JSON.stringify(user1));//{"name":"md abu","age":33}

// now convert it back to obj
 //console.log(JSON.parse(user1));// can not make it for direct the json
 const resJons= JSON.stringify(user1) // need to store in a var

 // now store in localStorage 
// localStorage.setItem("locals",resJons)

 console.log(JSON.parse(resJons)); //{ admin: true, name: 'sabe', age: 44 }

// get the localstorage ite
//const getObj= JSON.parse(localStorage.getItem("locals"));
//console.log(getObj,'from loca');
 


/*
trick 5 what is the out put of the code ?
 */

console.log([...'abuhossain']); 
/*[
  'a', 'b', 'u', 'h',
  'o', 's', 's', 'a',
  'i', 'n'
]
*/



/* trick 6
what is the output of the code ?
*/

const user2={name:'sabe',age:44}
const admin={admin:true, ...user2} 


console.log(admin); // {name:'sabe',age:44, admin:true}




/* trick 7 
what is output of the code
*/

const setting={
  userName:'abum asu',
  level:44,
  health:3
}

const data= JSON.stringify(setting,['level','health'])
console.log(data)

/*
trick 8
what is the out put of the code ? 
 */

const shape={
  radius:10,
  diameter(){
    return this.radius * 2
  },
  perimeter :()=> 2 *  Math.PI * this.radius 
}
console.log(shape.diameter()); // 20
console.log(shape.perimeter());//nan


/* 
trick 9
what is the destruction in object ?  how to destructure of users name, fullname ?? also alias name
*/

const users={
  name:'labu',
  age:44,
  fullname:{
    first:'la',
    last:'bu'
  }
}

const {name, fullname:{first, last} } = users 
console.log(first,last);

/*
trick 10
what is the output of the code ? 
 */

 function getItems(fruitList,  favourateItems,...arg){
  return [...fruitList, ...arg, favourateItems]

 }
getItems[['ba','nana'],'apple','mango']


/*
tricks 11  
 */
let c= {greeting:'hi'}
let d 
  d = c 

  c.greeting='hello'
  console.log(d.greeting); // hello

  /* 
  trick 12
  */
 console.log({a:1}== {a:1}); // memory ref are not same and point different memory space
 console.log({a:1} === {a:1});

/* 
trick 13 
*/
let person={name:'laboni'}
const member= [person]

 person= null 
console.log(member); // [ { name: 'laboni' } ]



/* 
trick 14
*/

const value= {number:10}

const multiply = (x={...value}) =>{
  console.log(x.number *= 2);
}

multiply() // 20
multiply(value) //20 // value update by direct passing argument
multiply(value)// 40 //
multiply(value)// 80 


/* 
trick 15
*/

function objChange(person){
  person.age= 100,
 // here the person is re-assing for obj
  person={ // here the ref is not change so this will be person2 obj
    name:'suhel',age:44
  }  

  return person

}
const person1 = {
  name:'kasem', age:50 // here the age is update by 100
}

const person2 = objChange(person1) // here it pass the ref of objChange fun

console.log(person1);//{ name: 'kasem', age: 100 }
console.log(person2); // { name: 'suhel', age: 44 }

console.log('hr');
/* 
tricks 16
what is shallow copy and deep copy ? and clone object
*/
const userObj = {
  name:'abu hossain', age:44
}

// clone of obj
const clonObj= Object.assign({}, userObj)
//clonObj.age=400
console.log(userObj);//{ name: 'abu hossain', age: 44 }
console.log(clonObj,'clon obj'); //{ name: 'abu hossain', age: 400 } clon obj




//======================= LET CONST VAR ===============================================


// TRICK 1
//BLOCK SCOPE global scope and function scope

var t= 'title'
{
  let f= 144;
  console.log(f); // 144
}
 // console.log(f);//ReferenceError: f is not defined so this can not be call outside scope

 {
  const g= 144;
  console.log(g); // 144
}
 // console.log(f);//ReferenceError: f is not defined so this can not be call outside scope.

console.log(t); // title 

  /* 
  
  note : let and const are  block scope and var is global scope

  */ 

// Variable shadowing


(function test(){
  let a = 'hello00'
  if(true){
    let a = 'hi'
    console.log(a); // hi
  }
  console.log(a);// hello00
})()



/* 
function test1(){
  var a = 'shadowing'
  let b= 'is shadowing' // ithis is called illigal shadowing
  if(true){
    let a = 'not shadowing !!'
    var b ='ins not shadowing' // ithis is called illigal shadowing

    console.log(a);
    console.log(b);
  }
}
 */

// declaratoin 

var aa  
var aa 

/* // const must initialize first and const never update the value 

const dd= 33 // can not redeclare block scopr
// const dd =44 

*/


/* 

let cc //Cannot redeclare block-scoped variable 'cc'.
let cc 
 */

var d3= 44 

var d3= 43 

 //   WHAT IS HOISTING ? CREATTION PHASE AND EXECUTION PHASE 

 /* 
 DURING THE CREATION PHASE JS STORE THE VAR AND FUNCTION TO THE TOP OF THE CODE 
 THIS IS CALLED HOISTING. 
 */

var p // so var is hoisted
console.log(p,'p val'); // undefined
p =34

console.log(p,'p val'); // 34 p v alue


 // console.log(yy); //ReferenceError: Cannot access 'yy' before initialization 
let yy= 'bd'

// here let is hoisted on temporal dead zone 

/* 
 what is temporal dead zone ?

 it meanse the time between the declaration and initialzatin of let and const variable
 so the variables are in the scope but they are not decalred yet
*/
abc()
function abc(){
  console.log(a3); // undefined because the a3 var is not hoisted 
  var a3= 'bangladesh'
}



/* 
function cde(){ // here d and e is in temporal dead zone and c is not hoisted
  console.log(c,d,e);//ReferenceError: Cannot access 'd' before initialization
  let d=44
  const e= 43
  var c=33
}
cde() */

console.log(f3, f2); // can not access before initialization 
let f3='hosistin'
const f2='is hoistin'
