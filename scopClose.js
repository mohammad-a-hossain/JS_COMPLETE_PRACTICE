// execution context

// when a function create it will also create a context

/* -------------------------rules of a execution context---------------------------- */


function a(){
    b()
    console.log('i an a function')
}
function b(){
    d()
    console.log('i am b function')
}
function c(){
    console.log(' i am c function')
}
function d(){
    c()
    console.log('i am d function')
}

 // var x=100
a()
console.log('i am a global value')
// ** above all function is declared is a global function along with a variable and a() is invoked


// here execution stack as bellow and data structure is details like as bellow
  /* 
  first a() is called 

  when a() is called the global   ***  execution is stopped
  then a() context is called      ***  execution of a() is started but for b() it paused
  but b() has called b() then     ***  execution is started but b() has d() so it will paused
  where b() has called d() then   *** execution of b() stopped and will find d() context and it also paused
  d() is called c() so d()        *** execution of d() paused and it will search c() context and d() will paused

  it will execution like LIFO system dataStructure Last in First Out  as bellow

  it execute like
     'i am c function' ---------------------------- and c() execution will be deleted // last item
     ' i am d function ' --------------------------- d() execution will be deleted
     ' i am b function ' --------------------------  b() execution will be deleted
     ' i am a function' ------------------------ a() execution will be deleted        // first item
     'i am a global value'

  */









  //-------------------------------how variable object work-----in creational and execution phase---------------------------------------------------------------------------------------------------------- 

    var e =1000

    console.log('a is '+ e)
    console.log('b is '  + f) // here b is undefined
    var f =50
    console.log('b is after declared '  + f)










    //-------------------------------how function work-----in creational and execution phase---------------------------------------------------------------------------------------------------------- 

  abc()
  function abc(){
      console.log('hi i am a function') // here abc is as  reference 
  }
  abc()


  /* -------------HOISTING----eXAMPLe------------------------ */

  var g = 100
 // newPrint(g)
  print(10)
  var newPrint = print
  newPrint(45)
  function print(g){
      console.log('i am a hoisting function = '  + g)
  }
print(g)

/*            execution  phase                           creation phase

             g =undefined                               g =100 update
            newprint() = undefined                      newPrint() is occured an error( bcoz no function found)
            print = reference                           print value is 10 updated
                                                        newPrint is updated value is 45
                                                        print value is 100







*/ 

//-------------------------------SCOPE AND CLOSURE-----------------------------------------------------------

//                   *** in js SCOPE means (scope control >> how to store a data and in the function block which and who has access in side the block)

 var i =55

 function scop(){
     console.log(i)// there i has access inside the block
 }
 scop() // result is 55


 //-----------------------------------NESTED SCOPE--------------------------------------------

 function test(){

   var x=1000
   var y =20

    function xx(){
        var x=10
        var y =200
        console.log(x)


        function yy(){
            //var y =20 *** if y not defined result will be undefined
            console.log(y)
        }
      yy() // result y =200

    }
    xx()  // result  x=10


 }
 test() // 10 200


 // --------------------------------------- Lexical Scope-----------------------------------------------

 // -----------------scope chain------------------------------------

 var a=15
 function A(){

    var b =11
    function B() {
        var c= 22
        console.log(c)
    }
    function C() {
        var d =33
        console.log(d)
    }
    console.log(b)
    d ()
    B()
    C()
  
 }
 function d(s) {
     return s * a
 }

/* 

 A has access chain of -> var a, b, c, B(),C(),d()
 B has access chain of -> var a, b, c, B(), C(),d()
 C has access chain of -> var a, b, d,  B(), C(),d()
 d has access chain of -> var a, s A()
 
 
 */



 // ------------------------------------------------------------------CLOSURE-----------------------------------

 //js -private property and getter and setter 


 var React = function(width,height){
              this.width = width
              this.heigh =height

              var position={
                  a:22,
                  b:211
              }
              /* // how to call position ? now set a positionhere
              this.getPosition =function(){
                  return position
              } */
              var print = function(){
                  console.log('its workin g from print ' + this.width +''+ this.heigh)
              }.bind(this)

             this.draw= function(){
               print()
                  console.log('this is a draw function is calling from draw method')
                  
              }
              //another way to get property
           Object.defineProperty(this,'position',{
               get: function(){
                   return position
                   console.log('from get posiion')
               },
               set:function(value){
                position =value
                console.log('from set posiion')
               }

           })
 }
 var rex = new React(55,66)
 rex.draw(3,3)
console.log(rex.position) 
rex.position={
    x:900,
    y:100
}
console.log(rex.position)


