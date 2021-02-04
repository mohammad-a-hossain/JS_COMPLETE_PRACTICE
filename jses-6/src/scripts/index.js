import '../styles/index.scss'

 

//alert('Hello suhel')

/* ---------------------------------------------------------var-----let vs const----------------------------------------------------------   */



  //const a= 100 //can not change its a constant

/* let a=100

a =10
console.log(a)

var s='hi ther'
 console.log(s)

 let p ='hi suhel'
 {
     let b= 'its working??'
 }
 console.log(p)
 console.log(b) // err0r

 */


 /* ---------------------------------------------------------arrow function---------------------------------------------------------   */
/* 
  function add(a,b){
   return a + b
 }
 add(10,10)

 let add1 =(a,b) => {
   return a+b
 }
 
 console.log(add1(100,100))

// different convention of arrow function  syntax

 let add2 =(a,b) => a+b
 console.log(add2(200,100))

 // different convention of arrow function syntax

 let sqr =(x) => x*x 
 console.log(sqr(5))
 // different convention of arrow function  syntax
 let sqr1 = y => y*y
 console.log(sqr1(3)) */

 // different convention of arrow function  syntax with this key word self keyword

 //  ARROW FUNCTION  ALWAYS REFER TO HIS PARENT THIS
 // WE CAN NOT ADD BIND CALL FUNCTION TO CALL FROM OUTSIDE
/* 
 let obj ={
   name: 'm a h suhel',
   print: function(){
     let self= this
     setTimeout(function(){
       alert(`hi ${self.name}`)
     }, 1000)
   }
 }
 */
 // other way of solution
/*  let obj1 ={
  name: 'm a hossianl',
  print: function(){
  
    setTimeout(function(){
      console.log(`hello ${this.name}`)
    }.bind(this), 1000)
  }
}
obj1.print()

let obj2 ={
  name: ' hossianl',
  print: function(){
  
    setTimeout(()=>{
      console.log(this)
      console.log(`hello ${this.name}`)
    }, 2000)
  }
}
obj2.print()
 */

/* -------------------------------------------------default parameter---------------------------------------------------------- */

/*  function greet(name ='suhel', msg='helloy'){  // we can default parameter on argument 
   console.log(`${name}, ${msg}`)
 }
 //greet('dedede','fefefe')
 greet()

 */



 /* ------------------------------------REST AND SPREAD OPERATOR-------------------------------------------------------- */

/*  function sam(){
   let sam =0

   for(let i=0 ; i < arguments.length; i++){
    sam += arguments[i]
   }
   return sam
 }
 console.log(sam(1,2,3,4,5)) */



 //   *** REST OPERATOR USE INSIDE FUNCTION PARAMETER 
 // *** REST OPERTOR MUST BE USE AT LAST PARAMETER
     
 /* 
 function sam(...rest){
  
  return sam
}
console.log(sam(1,2,3,4,5)) // out put 15
 */
/* 

function sum(...rest){
  return rest.reduce((a,b)=> a+b)  // using reduce method
}
console.log(sum(6,7,8,9)) // out put 30 

*/



//  SPREAD OPERATOR   ** USES FOR SHOWING  EACH ITEM  IN ARRAY 
// ** spread operator is use for array and object  but rest operator only use in a function parameter

/*

let arron =[1,2,3]

console.log(arron)   // traditional array display
console.log(...arron) // it shows array item separately

let obj ={
  a:'suhel',
  b:'rumel',
  c:'hasan'
}
console.log(obj) 

*/
//let obj2 = { ...obj  } // this code will not play in my normal old version
//console.log(obj)


/* ------------------------DESTRUCTURING---------------------------------------- */

/* 
var person ={

  name: 'md abu hossain',
  email:'abuse50@gmail.com',
  address:{
    city:'sylhet',
    country:'bangladesh'
  }
}

//console.log(person)  // normal calling

let {name, email, address:{city, country}} =person // destructoring

console.log(name,email, city,country)


 */

 //---------------------------------------------------Object.entries and Object.fromEntries----------------------------------------------
/* 
 var obj ={
   a:10,
   b:20
 }
 //console.log(Object.entries(obj))

 var arrObj =[
   ['s', 100],
   ['p', 200]
 ]
 console.log(Object.fromEntries(arrObj)) */