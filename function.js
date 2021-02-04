// how to define a function------------------------------------------------------------

function aaron(){
    console.log('hi i am a function');
    
}         
aaron()               // if function not call then it will not return anything
function add(){
    var a= 11;
    var b=55;
    console.log(a+b);
}
add();                  // return 66
function sub(){
    var a= 44;
    var d=44;
    console.log(a -d);
}
sub()                   // return 0

//======================================function invocking==================================

/* for(var i=0; i< 10; i++){
    aaron()                      // when a function need to invoke u need to give "() sign " 
} */



// =============function parameter and arguments---------------------------------------------------

function add(a,b){ // 2 parameter a b
    result = a +b;
    console.log(a+b);
}
add(100,200);  // pass by value 
add( 55, 22);

var arr1=[1,2,3]
var arr2=[55,5,2]
var arr3=[33,6,33]

/* var sum1=0;
for(var i=0; i< arr1.length; i++){
   sum1 += arr1[i];

}
console.log('sum1 ' + sum1);

var sum2 =0;
for(var i=0; i<arr2.length; i++){
    sum2 += arr2[i];

}
console.log('sum2 '+ sum2);

var sum3=0;
for(var i=0; i< arr3[i]; i++){
    sum3 += arr3[i];

}
console.log('sum3 '+ sum3); */


//----------------------------------------- example of passing parameter-------------------

function sumOfarray(arr){  // parameter 
    var sum =0;
    for(var i= 0; i < arr.length; i++){
        sum += arr[i];
    }
  console.log(sum);
}
sumOfarray('array 1 =' + arr1);  // passing arguments
sumOfarray('array 2 =' +arr2);
sumOfarray('array 3='+ arr3);

//----------------------------------------- example of passing arguments -------------------

function test(a,b,c){

    console.log(arguments);
}
test(10,5,2);

//---------------------------------------------------------------------------------
function test1(){ // without parameter 

    console.log(arguments); // but arguments provides the array 
}
test1(10,5,2);

//---------------------------------------------------------------------------------------------

function addAll(){
      var sum=0;
    for(var i=0; i<arguments.length;i++){
        sum += arguments[i];
    }
    console.log(sum);
}
addAll(1,2,3,4,5,6,7,8,9); // random value can be pass for summetion -----------------------------------------



//================== function return   =============================

function addAll1(){
    var sum=0;
  for(var i=0; i<arguments.length;i++){
      sum += arguments[i];
  }
  return sum;
}

var result =addAll1(1,2,3,4,5); 
console.log('function retuning ' + result);

//--------------------------------------------------------------

function name(name,email){

    return {
        name: name,
        email:email
    }
    console.log('i will not executive bcoz after return nothing will execute');
}
var r= name('aaron','arron@gmail.com');
console.log(r);

//-----------function expression------------------------------------------------------------------

  var music= function(song,singer){ //
       return {
           song:song,
           singer:singer
       }
   }
  var m= music('tere sange yara','atif aslam')
console.log(m)

/* ----------example ------------------------- */

//setTimeout(function(){
 // console.log('i will call after 5 sec')
//},5000)

/* ---------- FUNCTION INNER FUNCTION ------------------------- */


function someThing(greet, name){

    function hello(){
        console.log(greet, name);
    }
    hello()
}

someThing('hi','suhel')

/* -----------------------function scope------------------------- */

var p='abc'

function x(){
   // var p=10 // if p=10 is inactive then p='abc' for global var 
    console.log(p)
    function y(){
     var p='100'
        console.log(p)
    }
    y() // return 100
}
    x()

//-----------------------------small programming----------------------------------------------

function test(n){

      function a(){
          return n% 2=== 0
      }
      function b(){
          return n% 2===0
      }

      if( a() && b()){
          console.log('the modulus  number is :' + n)
      }else{
          console.log('not a valid number')
      }
}
       test(4)


    //--------------------------------------- ------------------------------------------------------------------------