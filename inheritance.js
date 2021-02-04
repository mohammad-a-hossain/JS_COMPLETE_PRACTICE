
//prototype  creation----------------------------------------------------

/* every object has a prototype 
this prototype is inherit the object
every js a parent class and the parent class is his prototype
new object has no prototype 

// multilevel inharitance -------------------------------------------------

var arr =[]
arr [] -> length 0 __proto__: Array (this array)

arr
[] */
// length: 0
//__proto__: Array(0)  ...> this is the base of-----------  (this array)
//concat: ƒ concat()
////constructor: ƒ Array()                 all     this information came from arr[] prototype
//copyWithin: ƒ copyWithin()
//entries: ƒ entries()
//every: ƒ every()
//fill: ƒ fill() 


//Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
//__proto__: Object BASE  -- THIS INHARIT FROM THAT Array.


//---------------------------------------------------------------- multilevel inharitance -------------------------------------------------------------


/* 

function person(name){
      this.name=name
}
var p1 = new person('i am sunel')
console.log(p1) 
 

*/ //-------------- person(name) constructor is ---> p1 object's base
//                                  ---------------------------------
//-----------------out put---------

//person {name: "i am sunel"}
//name: "i am sunel"
//__proto__: Objec              //---this is the person object base and it has another object base 
//constructor: ƒ person(name)
//__proto__: Object            
//constructor: ƒ Object()
//hasOwnProperty: ƒ hasOwnProperty()
//isPrototypeOf: ƒ isPrototypeOf()
//propertyIsEnumerable: ƒ propertyIsEnumerable()
//toLocaleString: ƒ toLocaleString()
//toString: ƒ toString()
//valueOf: ƒ valueOf()
//__defineGetter__: ƒ __defineGetter__()
//__defineSetter__: ƒ __defineSetter__()
//__lookupGetter__: ƒ __lookupGetter__()
//__lookupSetter__: ƒ __lookupSetter__()
///get __proto__: ƒ __proto__()
//set __proto__: ƒ __proto__()


/* ------------descriptor------------------------------------------------- */

/*  var person ={name:'shuhel'}
var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor); */
/*
//out put 
{value: "shuhel", writable: true, enumerable: true, configurable: true}
configurable: true // can we remove from out side
enumerable: true // when we make loop it can be iterate
value: "shuhel"
writable: true // can be override from outside or change
__proto__: Object
 */
// -------------------let change the descrioptor --------------------------
/* 
Object.defineProperty(person,'name', {
    configurable: false,
    enumerable: false,
    writable: false,
    value :' n a h suhel'
}) */
// let see the person 
/* console.log(person) */

// {name: "shuhel"}name: "shuhel"__proto__: Object
/* Object.keys(person) */
//[]  an empty object bcoz we disable enumerable
/* for( var i in person){
    console.log(i) 
}*/
//output empty bocz we can not iterate we disabled enumerable
/* person.name='aaron'
console.log(person) // we can not change name bcoz we disabled writable
delete person.name */
//out put null bcoz we can not make delete for disabled 

// we change the value let see this
/* console.log(person) */
//out put is true bcoz we did not make it false

/* ============ FIRST PROTOTYPE EXAMPLE=========== */

function Squire(width,line){
      this.width =width
}

function Shape(){

}
Shape.prototype.common=function(){
    console.log('i am shape method/' +'s prototype')
}
Squire.prototype= Object.create(Shape.prototype)
Squire.prototype.constructor= Squire// reset the constructor

Squire.prototype.draw =function(){
    console.log('this is a draw mehtod attached to squire constructor')
}
var sqr = new Squire(30)
var sp = new Shape()


function Circle(line){
    Squire.call(this, width) // here call fun define the squire object constructor with its value 
         this.line =line
        }


//Circle.prototype = Object.create(Shape.prototype)
Circle.prototype= Object.create(Squire.prototype)
var cr = new Circle(11,45)

//--------------------------------------let find out prototype------------------------
 
// function prot(age){
//     this.age = age
// }
// prot.prototype.t='md abu hossain' //--- creating a prototype property
// prot.prototype.t='123456' // now property change
// prot.prototype.t1='1000'
// prot.prototype.height='1.3'
// t = new prot(50)
// t1= new prot(100)
// console.log(Object.getPrototypeOf(t))
// console.log(Object.getPrototypeOf(t1)) // the way of get prototype

/* output */
 //{constructor: ƒ}
//constructor: ƒ prot(age)
//__proto__: Object

 
//console.log(prot.prototype)
//console.log(Object.getPrototypeOf(t)===prot.prototype)

//out put true
/* console.log(t)// after creating a property
console.log(t1)
 */
/* prot {age: 50}
age: 50
__proto__:
t: "md abu hossain"
constructor: ƒ prot(age)
__proto__: Object */

// constructor prototype we cn change and add method __proto__
// prototype property can inherit from constructor

/*

function squire(width, height){
         this.width = width    // instance property instance method
         this.height =height
}

squire.prototype ={
    measure:function(width,height) { // this are prototype member or method
        console.log(this.width + this.height)
    },
    toString:function (hi) { // this are prototype member or method
        console.log('this is to string it inherit instance member width '+this.width)
    }   // **here toString method bring instance member access width
    
} 
var sqr = new squire(20, 30)
var sqr1= new squire(50,50)
console.log(sqr)
console.log(sqr1)

*/
  //   


  // we can  instance member access from prototype member also prototype to instance member

  /// example
/* 
  function aaron(age,height,weight) {
      this.age =age
      this.height =height
      this.weight=weight
      this.getWeight=function () {
          console.log('weight is ' + this.weight)
      }
      this.mother()// this mother fun() is called from prototype instance

  }
  aaron.prototype.fname='m a suhel'
  aaron.prototype={
      mother: function(mother){
          this.getWeight() // this getWEeight() is called from instance member
          console.log('aaron mother')
      }

  }

  var aron = new aaron(5, 1.5, 100)
  console.log(aron) */


  // how to confirm which method belong to which instance and which property from


/*   aron.hasOwnProperty('fname')
  false 
  aron.hasOwnProperty('mother')
   false */
   //       -------------     bcoz mother and fname is prototype instance----------------

 /*   aron.hasOwnProperty('getWeight')
    true */
   // -------------bcoz getWeight is main instance property------------------------------


   // ** dont over write any builtin method object prototype


   //-------------------------------------------------------------------------------------------------------------------------------------------------------------------


                                                 // CREATING INHERITANCE PART 1
                                                    

//------------------------------------------------------------------------------------------------------------------------------------------

// function Father(name){
//     this.name = name
// }



// Father.prototype.height= function(){
//                         console.log('1.5meter')
//                          }


// function Aaron(name){
//     this.name = name
// }
// Father.prototype= Object.create(Aaron.prototype)
// Aaron.prototype.color = function(){
//         console.log('father color is brown')
//     }

// function Ameoba(name){
//        this.name = name
// }

// Ameoba.prototype = Object.create(Father.prototype)
// //Ameoba.prototype = Object.create(Aaron.prototype)


// /* Father.prototype={
//     height: function(){
//         console.log('1.5meter')
// }/
//     }  */
// aa= new Aaron('aaron hussain')
// fa = new Father('m a h suhel')
// dau = new Ameoba('ameoba hossain')


// inherit way         ** aa -> Aaron -> object
 //                   ** fa -> Father -> Object
 //                  
  //                 ****** fa -> Father -> Aaron --> object   relationship

                                            
/*   Aaron {name: "aaron hussain"}
  name: "aaron hussain"
  __proto__:
  color: ƒ ()
  constructor: ƒ Aaron(name)
  __proto__: Object */

  
/* 
  Father {name: "m a h suhel"}
  name: "m a h suhel"
  __proto__: Aaron              // father inherit Aaron 
  __proto__:
  color: ƒ ()                   /// color method is Aaron's object
  constructor: ƒ Aaron(name)
  __proto__: Object */

  
/*   Ameoba {name: "ameoba hossain"}
  name: "ameoba hossain"
  __proto__: Aaron
  __proto__:
  color: ƒ ()
  constructor: ƒ Aaron(name)
  __proto__: Object */

/*  
 dau.color
ƒ (){
        console.log('father color is brown') // inherit father's color
 */


/*  aa.color
       ƒ (){
        console.log('father color is brown') // inherit father's color
    } */



    /* ------------------------------------------------------------------------------------------------------------------------- */



    //                      RESET INHERITANCE constructor

    // function Father(name){
    //     this.name = name
    // }
    
    
    
    // Father.prototype.height= function(){
    //                         console.log('1.5meter')
    //                          }
    
    
    // function Aaron(name){
    //     this.name = name
    // }
    // Father.prototype= Object.create(Aaron.prototype) //this line create only relation but failed to sustain father constructor
    // Father.prototype.constructor= Father // this will create or reset Father constructor

/*     Father {name: "m a h suhel"}
        name: "m a h suhel"
        __proto__: Aaron
        constructor: ƒ Father(name)  without (Father.prototype.constructor= Father ) this line father constructor can not be create
        __proto__: Object
 */
/* aa.constructor
ƒ Aaron(name){
        this.name = name
    } 
    */
/*  
  fa.constructor
ƒ Father(name){
        this.name = name
    } 
    */
//     Aaron.prototype.color = function(){
//             console.log('father color is brown')
//         }
    
//     function Ameoba(name){
//            this.name = name
//     }
    
//     Ameoba.prototype = Object.create(Father.prototype)

// aa= new Aaron('aaron hussain')
// fa = new Father('m a h suhel')
// dau = new Ameoba('ameoba hossain')



/* ---------------------------------------------calling supper with call() -example-----------------------------*/




// function Father(fname){
//     this.fname = fname
// }



// Father.prototype.height= function(){
//                         console.log('1.5meter')
//                          }


// function Aaron(name,fname){
//      Father.call(this, fname) //---supper -calling with call() to add the parameter in Aaron from Father property
//     this.name = name
   
// }
// Father.prototype= Object.create(Aaron.prototype) //this line create only relation but failed to sustain father constructor
// Father.prototype.constructor= Father

// Aaron.prototype.color = function(){
//         console.log('father color is brown')
//     }

// function Ameoba(name){
//        this.name = name
// }

// Ameoba.prototype = Object.create(Father.prototype)

// aa= new Aaron('aaron hussain','father') 
// /* fa = new Father('m a h suhel')
// dau = new Ameoba('ameoba hossain') */



/* -----------------------------RE USING OR REDUCING CODE BY EXTEND  METHOD ------------------------------------------------------- */


/* function extend(parent, child){//this line of function will reduce the work
    parent.prototype= Object.create(child.prototype) 
    parent.prototype.constructor= child
}


function Father(fname){
    this.fname = fname
}



Father.prototype.height= function(){
                        console.log('1.5meter')
                         }


function Aaron(name,fname){
     Father.call(this, fname) //---supper -calling with call() to add the parameter in Aaron from Father property
    this.name = name
   
} */
// Father.prototype= Object.create(Aaron.prototype) //this line create only relation but failed to sustain father constructor
// Father.prototype.constructor= Father

/* extend(Father, Aaron) // function calling

Aaron.prototype.color = function(){
        console.log('father color is brown')
    }

function Ameoba(name){
       this.name = name
} */
/* 
Ameoba.prototype = Object.create(Father.prototype)

aa= new Aaron('aaron hussain','father') 
 fa = new Father('m a h suhel')
dau = new Ameoba('ameoba hossain') 



function Mother(mname,mage){
 this.mname =mname
 this.mage =mage 
}*/
/* Mother.prototype= Object.create(Father.prototype)
Mother.prototype.constructor =Mother */

/* extend(Father,Mother)
Mother.prototype.color= function(){
    console.log('calling from mother function over ridding father color')
}

ma =new Mother('johny','30') */

/* 
ma.color
ƒ (){
    console.log('calling from mother function over ridding father color')
}
 */


/* --------------------------------------------------------method over riding------------------------------------------------------------------ */





// function extend(parent, child){//this line of function will reduce the work
//     parent.prototype= Object.create(child.prototype) 
//     parent.prototype.constructor= child
// }


// function Father(fname){
//     this.fname = fname
// }



// Father.prototype.height= function(){
//                         console.log('1.5meter')
//                          }


// function Aaron(name,fname){
//      Father.call(this, fname) //---supper -calling with call() to add the parameter in Aaron from Father property
//     this.name = name
   
// }

// extend(Father, Aaron) // function calling

//  Aaron.prototype.color = function(){
//         console.log('father color is brown')
//     } 

// //aa= new Aaron('aaron hussain','father') 
//  fa = new Father('m a h suhel')


/* -------no over riding here ----------------- */

/* fa.color  // when we call father color method it shows the original color data without over riding
ƒ (){
        console.log('father color is brown')
    }
 */

//extend(Father,Mother)                                           // if we call before mother function it will not over ride and work properly
// function Mother(mname,mage){// a new function create here
  
//     this.mname =mname
//     this.mage =mage
// }
// // we have to call extend function after declared mother function bcoz HOISTING --
// extend(Father,Mother) // this function reduce the code for constructor

// Mother.prototype.color= function(){  /*  mother function change the color method here and it will over ride the father color  */
//     console.log('calling from mother function over ridding father color')
// }

// /* -----OVER RIDING HERE------------------ */

// ma = new Mother('johny','30')// now if we call ma function and want to know the color then it will over ride the father color
/* 
ma.color
ƒ (){
    console.log('calling from mother function over ridding father color')
}
 */



 /* --------------------------------------------------------method over riding----------another example-------------------------------------------------------- */
// function extend(parent,child){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor=child
// }

//  function Shape(color){
//     this.color= color
//  }

// Shape.prototype.common= function(){
//     console.log('i am a common base method')
// }
// function Squire(width, color){
//     Shape.call(this, color)
//   this.width =width
// }
// extend(Shape,Squire)
// /* Squire.prototype = Object.create(Shape.prototype)
// Squire.prototype.constructor=Squire */

// Squire.prototype.draw=function(){
//     console.log('this is drawing')
// }

//  function Circle(radius,color){
//      Shape.call(this,color)
//       this.radius=radius

// }


//extend(Shape,Circle)

// creating a new method for over ride

// Circle.prototype.common=function(){
//     // if we want to call common context of shape method
//     Shape.prototype.common.call(this)
//     console.log('i am calling common method and i have over ride Shape common')
// }

/* 
Circle.prototype= Object.create(Shape.prototype)   // this  line inherit shape object 
Circle.prototype.constructor=Circle
 */

// var sp =new Shape()
// var sqr =new Squire(50,'green')
// var cr = new Circle(10,'red')








 /* -------------------------------------------------------------------------POLYMORPHISM--------------------------------------------------------------- */

 //*** poly morphism meanse to make different out put from an one method with different behavoiur
 

//  function extend(parent,child){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor=child
// }
//  function Shape(color){
//     this.color= color
//  }
// Shape.prototype.common= function(){
//     console.log('i am a common base method')
// }
// var sp=new Shape('purple')
//  //-----------------------------------------------------------------------------------------------------


// function Squire(width, color){
//     Shape.call(this, color)
//   this.width =width
// }
// extend(Shape,Squire)

// Squire.prototype.draw=function(){
//     console.log('this is drawing')
// }
// Squire.prototype.common=function(){
//     console.log('i am calling common method from squire method and over rinding')
// }
// var sqr =new Squire(50,'green')
//-------------------------------------------------------------------------------------------------------



// here we make squire common method calling for another calling common method

//  function Circle(radius,color){
//      Shape.call(this,color)
//       this.radius=radius
// }
// extend(Shape,Circle)

// Circle.prototype.common=function(){
//     console.log('i am calling common method and i have over ride Shape common from circle')
// }

// var cr = new Circle(10,'red')


//now common method is called from different object is polymorphism

/*

sp.common()
inheritance.js:613 i am a common base method
undefined

sqr.common()
inheritance.js:631 i am calling common method from squire method and over riding
undefined

cr.common()
inheritance.js:648 i am calling common method and i have over ride Shape common from circle
undefined


 */


//  var Shapes=[sp,sqr,cr]
//  for(var i of Shapes)
//  {
//      i.common()
//  }
 //output
/*  
i am a common base method
inheritance.js:627 i am calling common method from squire method and over rinding
inheritance.js:643 i am calling common method and i have over ride Shape common from circle

 */
 /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */


                          // INHERITANCE AND COMPOSITION MIXIN
/* ------------------------------------------------------------------------------------------------------------------- */


// function mixin(target, ...sources){ //function for making prototype assigning two parameter
//  Object.assign(target, ...sources)
// }
//   var canWalk={
//       walk: function(){
//           console.log('walking.....')
//       }
//   }
//   var canEat ={
//       eat: function(){
//           console.log('eating....')
//       }
//   }
//   var canSwim ={
//       swim: function(){
//           console.log('swiming.......')
//       }
//   }
//   var person = Object.assign({}, canWalk,canEat)
//   person.name='suhel'

 

//   function Person(name){
//       this.name=name
//   }

// Object.assign(Person.prototype, canEat,canWalk) // it can create prototype

// mixin(Person.prototype, canWalk, canEat) // calling mixin function

// var person =new Person('suhel')
//  console.log(person)


//  function Goldfish(color){
//    this.color= color
//  }

 
//  mixin(Goldfish.prototype, canEat, canSwim)
//  var fish = new Goldfish('golden')

//  console.log(fish)




