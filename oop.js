///procedurial programming example----------------------------------------------------
/* 

var width =10
var height=20

function calculateArea(width, height){
    return width * height
}

function calculateRange(){
    return 2 *(width + height)
}

var area = calculateArea(width, height)
var range = calculateRange(width, height)

console.log('procedurial ' + area, range) 


*/


//-------------------------- oop------programming --example ----------------------

/* 

var rect ={
   
      width : 30,
      height: 20,

     calculateArea: function() {
         
    
         return this.width * this.height
     },
     calculateRange: function() {
         
    
         return 2 * (this.width + this.height)
     }

}
var area = rect.calculateArea()
var range = rect.calculateRange()
console.log('oop area is ' + area , 'rang is '+ range)


 */









//---------------------------------------CREATING OOP PROGRAMMING-----------------------------------------------------------------------------------------

/* 

class Rect{                     // making a class and oop templete here
   constructor(width, height){
    this.width =width
    this.height =height
   }
    

   calculateArea() {
       
  
       return this.width * this.height
   }
   calculateRange() {
       
  
       return 2 * (this.width + this.height)
   }

}
var react1 = new Rect(100,50)
var react2 = new Rect(10,250)
var react3 = new Rect(10,250)
var react4 = new Rect(10,250)
var react5 = new Rect(10,250) // we can create as our wish 


*/

// ----------------FOUR MAIN PILLAR OF OOP -----------------------------------------------------------------------------
/*  

   1. ABSTRUCTION
   2. ENCAPSULATION 
   3. INHERITANCE 
   4. POLYMORPHISM

 */


 /* --------------work with this key and method---------------------------------- */


/*  
function aaron(){
    console.log(this)
}
 new aaron()
 */
/* 


 var box = {
    
    width : 100,
    height: 80,

    draw: function(){ //method 
        console.log(' i draw a box here')
       this.printProperties()
    },
    printProperties: function(){
         console.log('width is ' + this.width + ' height is ' + this.height)
    }
} */



//    box.draw() //method calling

/* var another={
    width: 40,
    height:44,
    print:box.printProperties
   
}
another.print()
console.log(this.another)

  */

/* ---------------------------------------No Class----------but pattern------------------------------ */



// -----------------------------------------------------------FACTORY PATTERN---------------------------------------------------------------------------------
/* 
var creatBox =function(width, height){ // this is a factory or bluePrint template we can create as many as box here 
    return {                 // returning the factory result and getting ready
         
        width : width,
        height:height,

        draw: function(){ //method 
            console.log(' i draw a box here')
            this.printProperties()
        },

        printProperties: function(){
            console.log('width is ' + this.width + ' height is ' + this.height)
        } 

    }
}
var box1 = creatBox(10,20) 
box1.draw()
var box2 =creatBox(100,200)
box2.draw()

 */


/* -------------------------------------CONSTRUCTOR PATTERN-------------------------------------------------------- */


// naming convention first letter must be capital 
// in factory pattern constructor has buit-in object u can not see it in console at window
//-------------function is an object---in js------------


/* var creatBox =function(width, height){

    this.width =width
    this.height = height

    this.draw = function(){
        console.log('hi iam a constructor pattern')
        this.printProperties()
    }
    this.printProperties = function(){
        console.log('the width is ' + this.width + ' the height is ' + this.height)
    }
}
var box3 = new creatBox(500, 300)
box3.draw()
var box4 = new creatBox(222,2223)
box4.draw()

 */  
/* ---------------------------------------------Call()----------------- apply()-------------- bind()------------------------------------------------------ */

/* 

function myFunc(){
  // console.log(this)//                    this imply call{} empty object
    console.log(this.a + this.b)
}
//myFunc()
//myFunc.call({})
myFunc.call({a:33, b:55})// assign empty object property
myFunc.apply({a:222, b:344})


 */


//---------how to imply -------------bind()--------apply and call method explicit way-----------------------------------------------------------------


/* 

function myFunc(c,d){
    // console.log(this)//                    this imply call{} empty object
      console.log(this.a + this.b + c + d) 
  }
 
 
  myFunc.call({a:33, b:55}, 5, 4)// need to pass c and d value outside object


  myFunc.apply({a:222, b:344},[5,5]) // need to pass value within an array
  

  var testBind = myFunc.bind({a:10, b:10}, 10,10) // bind Method need to take  a variable to store the bind value and then call the var
  testBind()// this return a function
  //testBind(10,10)// also pass the argument 


 */


  /* ----------------------CALL BY VALUE -------------CALL BY REFERENCE------------------------ */

  var n = 10

  function changeMe(n){
      n = n + 100
      console.log(n)
  }
  changeMe(n)// pass by value and call by value
  console.log(n) 

  //-----------------------------------------example ------------------------------------------------------------

var obj ={
    a : 20,
    b : 20
}
function changeMe(obj){
    obj.a = obj.a + 1000
    obj.b = obj.b + 1000
    obj.c = 500

} 
console.log(obj) // pass by reference 
changeMe(obj) // call by reference

/* ----------------------------------making private-------------------hide method --------abstruction-------------------------------------- */



var creatBox =function(width, height){

   

   var position ={
       a : 44,
       b: 55
   }
    this.width =width
    this.height = height

    var printProperties = function(){ // var  provide the hiding printProperties fron out side
        console.log('the width is ' + this.width + ' the height is ' + this.height)
    }.bind(this)

    
    this.draw = function(){
        console.log('hi iam a constructor pattern')
        printProperties()
        console.log('position X ' + position.a + 'position Y ' + position.b)
    }
}
 var box4 = new creatBox(100,150)
/* box3.draw()
var box4 = new creatBox(222,2223)
box4.draw() */
 
box4.draw()