import './assincro/assincro'

// console.log('hello es6 suhel')
// alert('hi es6 start from iterator')



// I T E R A R A T O R

/*  const arr1=[1, 2, 3]

function createIterator(collection){
    let i =0
    return {
        next(){
            return{
                done: i >= collection.length,
                value:collection[i++]
            }

        }
    }
}
let ctr = createIterator(arr1)
console.log(ctr.next())
console.log(ctr.next())
console.log(ctr.next())
console.log(ctr.next()) 
 */

 // another way to making an iterator


/* const arr1=[1, 2, 3]


let ctr= arr1[Symbol.iterator]()

console.log(ctr.next())
console.log(ctr.next())
console.log(ctr.next())
console.log(ctr.next())  */

/* const txt='bangladesh'

let ctr2 = txt[Symbol.iterator]()

console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())
console.log(ctr2.next())

const arr2=['a','b','c']
 let res= arr2[Symbol.iterator]()
 console.log(res.next())
 console.log(res.next())
 console.log(res.next())
 console.log(res.next())
 */
// for(let v of arr2){
//     console.log(v)
// }



// G E N E R A T O R
/* 
const arr2=['a','b','c']

function* generate(array){
    for(let i =0; i< array.length; i++){
          yield array[i]
    }
}

let itt= generate(arr2)
console.log(itt.next())
console.log(itt.next())
console.log(itt.next())
console.log(itt.next()) */

/* ---------------------------------SET---- datastructure ------------------------------------ */
/* 
let set = new Set(['a','b','c','d','e','f'])

console.log(set)
console.log(set.add('g'))
console.log(set.add('i'))
console.log(set.delete('i'))
console.log(set.delete('a'))
console.log(set)

console.log(set.has('c'))
console.log(set.keys())
console.log(set.values())
console.log(set.entries()) */

/* ----------------------------MaP datastructure-------------------------------------------- */
/* 
 let map = new Map([
     ['a',100],
     ['b',200],
     ['c',300]
 ])


  map.set('d',400)

  map.delete('b')
  map.entries()
  map.keys()
  map.get('c')
 console.log(map.get('a'))

 for(let [k,v] of map){
     console.log(k, v);
     
 } */

 /* --------------------------------------------WEAK SET-------MAP----------------------- */

 /* ---------------------------NEW CLASS--------------------------- */

/* 
 class Ractangular {
     constructor(width,height){
         this.width= width
         this.height= height
     }

     name ='suhel'

     draw(){
         console.log('this is a draw function coling inside from class')
     }
 }

 let reac = new Ractangular(33,44)
 console.log(reac) */


 /* ----------------------------------------how to hide property---------------------------------------------- */

/* 
 const _width = Symbol()
 const _height= Symbol()
 const _draw = Symbol()

 class Ractangular {
    constructor(width,height){
        this[_width]= width
        this[_height]= height
    }

    name ='suhel';

    [_draw](){
        console.log('this is a draw function coling inside from class')
    }
}
let reac = new Ractangular(3,'alarm')
 //console.log(reac)
  console.log(reac)
  */

/*   // another way to hide property using weakeMap

  const _width = new WeakMap()

 const _height= new WeakMap()


 class Ractangular {
    constructor(width,height){
        _width.set(this, width)
        _height.set(this, height)
    }

    name ='suhel';

    draw(){
        console.log('this is a draw function calling inside from class')
         console.log(_height.get(this), _width.get(this))
    }
}
let reac = new Ractangular(3,'alarm')
 //reac. only name visible and else all invisible */







 /* ---------------GETTER ------------------SETTER------------------------ */




 /* --------------INHERITANCE---------------------- */


 /* -----------------------------MODULING SYSTEM_----------------- */

/*  import Ractengle from './Rectangle.js'
 let re = new Ractengle(3,3)

 console.log(re) */

/* 
 import * as fun  from './Func.js'

 console.log(fun.add(4,5))
 console.log(fun.sub(10,5)) */