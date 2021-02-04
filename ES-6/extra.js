/* 'use strict'  */// for .this key word in class es-6
//import 'assincro/assincro.js'

console.log('hello es6 suhel')
alert('hi es6')


/* --------------------------------ITERATOR------------------------------------------------------- */
 //example----es-5

/* 
for(let i =0;i <arr.length; i++){
    console.log(arr[i])
} */



//---iterator is an object to iterate  on collection
//example----es-5
/*

 const arr=[1,2,3]
 function createIterator(collection){
     let i =0
    return { // returning an object
           next(){ // it also retun a object
               return {
                    done: i >= collection.length,
                    value: collection[i++]
               }
           }
    }
 }   
 let iterator = createIterator(arr) 
 
 
 */

 // ------on demand iterator----------output

/*  console.log(iterator.next())// {done: false, value: 1}
 console.log(iterator.next()) //{done: false, value: 2}
 console.log(iterator.next()) //{done: false, value: 3}
 console.log(iterator.next())// {done: true, value: undefined} */

 // ----------------output-----end----------




// ------- [SYMBOL.ITERATOR]--FUNCTION()--------------------------------------

/* 

const arr=[1,2,3]

let iterator = arr[Symbol.iterator]()

console.log(iterator.next())// {done: false, value: 1}
console.log(iterator.next()) //{done: false, value: 2}
console.log(iterator.next()) //{done: false, value: 3}
console.log(iterator.next())// {done: true, value: undefined} */

/*


let str= 'suhel'
let iteratorText = str[Symbol.iterator]()
console.log(iteratorText.next())
console.log(iteratorText.next())
console.log(iteratorText.next())
console.log(iteratorText.next())
console.log(iteratorText.next())
console.log(iteratorText.next())


 */

 /* ---------------------------------------FOR OF LOOP----------------------- */

 // *** for of loop is imply on object Symbol.iterator()
/* 

const arr=[1,2,3]
 

 for( let v of arr){
     console.log(v)
 }
 

for(let v of 'md abu hossain'){
    console.log(v)
}

console.log('hi aaron') */

/* -------------------------------------------------------GENERATOR--------------------------------------------------------     */
//  generator's work  to return iterator object      

/* 

const arr=[44,55,36]
/* function * generate(){ // simple gernerate function()
    yield 1
    yield 2 
    yield 3
}
 */
/* 

 function * generate(collection){
    for(let i =0; i < collection.length; i++){
        yield collection[i] //yield keyword pause
    }
} 
let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

 */

/* --------------------------------------how to create custom iterator ----------------------------------- */
/* 
let aobj ={
    start: 1,
    end:10,
    [Symbol.iterator]:function(){
        let currentValue =this.start
        const self =this
        return{
            next(){
                return{
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined: currentValue++
                }
            }
        }
    }
}
  for(let v of aobj){
    console.log(v)

}   


 */

 /* -------------------------working with SET-----collection------------------------- */

 // set is iterable 

 //let set = new Set([11,22,3,1,4]) // defined array
 let set=new Set() // creating array
 console.log(set)
 set.add(50)  // adding item in array
 set.add(100)
// new set 
 set.add(50)  // no duplicate data entry allowed
 console.log(set) 

// SET METHOD

 //    set.clear()
// console.log(set)  set clear


 console.log(set.has(50)) // result true
 
set.delete(50)
console.log(set) // 50 is deleted
set.add(11)
set.add(15)
set.add(12)
console.log(set)
for(let v of set){  // here set is iterable
    console.log(v)
}
/* console.log(set.entries())
[[Entries]]
0: {100 => 100}
1: {11 => 11}
2: {15 => 15}
3: {12 => 12}
 */


 /* --------------------MAP COLLECTION-------------------------- */

 // **** key and value pair work we need to take both
 // we can set anything as key

let map =new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

/* // map has no add() it has set() for adding value
map.set('d',40)
console.log(map)

map.delete('d')
console.log(map)

// get value
console.log(map.get('a'))
//map.entries()
 */


/* for(let [v, k] of map ){
  console.log(k, v)
}
 */
/* map.forEach((v, k)=>{ // here value isto see first and key is set to second
    console.log(k, v)
}) */
// adding map value

/* map.set({name:'suhel'}, 42)
console.log(map) */
/* 
result
Map(4) {"a" => 10, "b" => 20, "c" => 30, {…} => 42}
[[Entries]]
0: {"a" => 10}
1: {"b" => 20}
2: {"c" => 30}
3: {Object => 42}
key: {name: "suhel"}
value: 42
size: (...)
__proto__: Map

*/


/* ------------WEAK MAP ---WEAK SET----------- */

//** IT WORKS ONLY WHEN GERVAGE COLLECTION SUCH A VARIBLE NEED TO NULL OR DELETE */


/* ----------- CLASS  ---IN------------------ES-6  */

 /* 
 
 class Reeactangle{

    constructor(width, height){
        this.width = width
        this.height =height
    }
    draw(){
        console.log('drawin g method here')
    }
 }

 let rect = new Reeactangle(44,55)
 console.log(rect) 
 
 
 */

 /*result
 Reeactangle {width: 44, height: 55}
height: 55
width: 44
__proto__:
constructor: ƒ Reeactangle(width, height)
draw: ƒ draw()
__proto__: Object 
  */


  //  class property--------------------------

/* 
 class Reeactangle{

     constructor(width, height){
        this.width = width
        this.height =height 

       

    }
   
 // lastNamae ='msuhel'  

    draw(){
        console.log('drawin g method here')
    }
 }

 let rect = new Reeactangle(44,55)

 console.log(rect) */




 /* ------------------------STATIC METHOD--------------------------------------- */
/*

class Parson{

   constructor(name, email){
       this.name =name
       this.email =email
   }
   print(){
       console.log(this.name, this.email)
   }


static create(str){  // static method()
    let parson =JSON.parse(str)
    return new Parson(parson.name,parson.email)

}

}
let str ='{"name":"suhel","email":"abusen50@gmail.com"}'

   let p1= Parson.create(str)
   console.log(p1)
   console.log(p1 instanceof Parson)  // result true
   p1.print()


*/
/* function Shape(){
    this.draw =function(){
        console.log('draw')
    }
}
let p1= new Shape()
let anotherDraw =p1.draw
anotherDraw()
 */
    



 //***** * es-6 there is no scope  created function or method which can not call from out side class and it will be undefined

/* 
class Parson{

    constructor(name, email){
        this.name =name
        this.email =email
    }
    print(){
        console.log(this.name, this.email)
    }
 
    test(){
        console.log(this)
    }
 static create(str){  // static method()
     let parson =JSON.parse(str)
     return new Parson(parson.name,parson.email)
 
 }
 
 }
 let str ='{"name":"suhel","email":"abusen50@gmail.com"}'
 
    let p1= Parson.create(str)
    console.log(p1)
   // console.log(p1 instanceof Parson)  // result true
    p1.print()

 let test =p1.test
 test() // here result must not come window object for terms of CLASS
 // ***so we need to set install babeljs strict mode and plugin
 // window object create obstacle for es-6 in CLASS TERMS
  // result must undefined */





// ------------------HIDING PRIVATE DATA WITH sYNMBLE KEY WORD--------------------
  
// ** to hide a property from others
/*

const __radius = Symbol()
const __name = Symbol()
const __draw =Symbol()
class Circle{
    constructor(radius, name){
        //this.radius = radius - not this way
        this[__radius] =radius
        this[__name] =name
    }

  //  draw(){
      //  console.log('drawing...')
    //} 
[__draw](){
    console.log('drawing.....')
}

}
let c1 =new Circle(2,'suhel')
 console.log(c1)

  */

 // if we want to another way to get private property or to see-> this code is below

// console.log(Object.getOwnPropertySymbols())







// ------------------HIDING PRIVATE DATA WITH Weak Map--- method  WORD--------------------

/* 
const __radius = new WeakMap()
const __name =new WeakMap()
const __resize = new WeakMap()

class Circle{
    constructor(radius, name){
        //this.radius = radius - not this way
        this.size =100
      __radius.set(this, radius)
      __name.set(this, name)

      __resize.set(this, () =>{ // normal function() will not work here. only arrow function() will work
          console.log(this.size)
      })
    }

  //  draw(){
      //  console.log('drawing...')
    //} 
draw(){
    console.log('drawing.....')
    console.log(__radius.get(this), __name.get(this))
    __resize.get(this)()
}

}
let c1 =new Circle(2,'suhel')
 console.log(c1)
 c1.draw() */


//return
/* Circle {size: 100}size: 100__proto__: Object
app.js:448 drawing.....
app.js:449 2 "suhel"
app.js:440 100 */



/* ------------------------------GETTER ()----AND SETTER ()--------------------- */



/* 
const __radius = new WeakMap()
const __name =new WeakMap()
const __resize = new WeakMap()

class Circle{
    constructor(radius, name){
        //this.radius = radius - not this way
        this.size =100
      __radius.set(this, radius)
      __name.set(this, name)

      __resize.set(this, () =>{ // normal function() will not work here. only arrow function() will work
          console.log(this.size)
      })
    }

  get radius(){ // the way to get property 
      return __radius.get(this)
  }
draw(){
    console.log('drawing.....')
    console.log(__radius.get(this), __name.get(this))
    __resize.get(this)()
}

}
let c1 =new Circle(2,'suhel')
console.log(c1)

c1.draw()
console.log(c1.radius)// calling radius method we find the radious value

*/




/* ---set()---- */

const __radius = new WeakMap()
const __name =new WeakMap()
const __resize = new WeakMap()

class Circle{
    constructor(radius, name){
        //this.radius = radius - not this way
        this.size =100
      __radius.set(this, radius)
      __name.set(this, name)

      __resize.set(this, () =>{ // normal function() will not work here. only arrow function() will work
          console.log(this.size)
      })
    }

  set radius(v){ // the way to get property 
      __radius.set(this, v)
  }
draw(){
    console.log('drawing.....')
    console.log(__radius.get(this), __name.get(this))
    __resize.get(this)()
}

}
let c1 =new Circle(2,'suhel')
//console.log(c1)

c1.draw()
c1.radius = 500
console.log(c1.radius)
c1.draw()// calling new set radius







/* -----------INHERITANCE---------------------------------------- */


/* class GrandFather{
    constructor(grandFatherName){
             this.grandFatherName = grandFatherName
    }

    oldage(){ // method 
        console.log('my grand father is now old age')
    }
}

class Father extends GrandFather{ // inheritance extends keyword
    constructor(grandFatherName, name, age, height){
        super(grandFatherName)
        this.name = name
        this.age = age
        this.height =height
    }

    detail(){
       return this.name + this.age + this.height
    }
 
}
let fatherDetails = new Father('amber ali','abdullah', 55, 5.5)
console.log(fatherDetails)
//fatherDetails.oldage()


 */


/* ---------------METHOD OVER RIDDING--------------------------------- */

class GrandFather{
    constructor(grandFatherName){
             this.grandFatherName = grandFatherName
    }

    oldage(){ // method 
        console.log('my grand father is now old age')
    }
}

class Father extends GrandFather{ // inheritance extends keyword
    constructor(grandFatherName, name, age, height){
        super(grandFatherName)
        this.name = name
        this.age = age
        this.height =height
    }
   oldage(){ // method 
        console.log('grand father is dead now old age AND ITS METHOD OVERRIDDING ')
    }
    detail(){
       return this.name + this.age + this.height
    }
 
}
let fatherDetails = new Father('amber ali','abdullah', 55, 5.5)
console.log(fatherDetails)
fatherDetails.oldage()
//fatherDetails.oldage()


