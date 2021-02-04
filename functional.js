/* -----programming paradigm ------------------------------------------------------------------------ */
 // 1 pure function
// 2 first class function 
// 3 higher order function 
// function act like value

// 

/* ------- 1 -pure function-----has two rules------- */

//  ** return the same result if given the same argument
//  ** dont cause the side effect 

function sqr(n) {// it has no side effect
    return n*n;
}
console.log(sqr(3))
console.log(sqr(10))


/* ------------------------------ 2 -firstClass-- function---has 6 rules--------------------------------------- */

 // ** a function can be store in a variable 

  function add (a, b) {
      return a + b;
  }
  var sum=add
  console.log(sum(5,5))


// ** a function can be store in a Array--

 var arr =[]
   arr.push(add)
   console.log(arr[0](3,4)) // index in 0 and parameter 3,4

   // ** a function can  be a store in a object

   var obj ={
       mathe :add // add() is stored as an object
   }
   console.log(obj.mathe(10,10))

   // ** we can create a function as we need

/*    setTimeout(function() {
       console.log('i have created a function')
   }, 2000)
 */
   // ** we cam pass a function as another function
   // ** we can return a function from another function

   function add (a, b) {
    return a + b;
}

 function maniPulate(a,b, func) {// func is an argu of add()
     var c = a+b;    //15
     var d= a-b;     //-1

    //  function multiply() {
    //       var m=func(a,b)
    //       return c*d*m      // 15 * -1 * 15
    //  }

    // return multiply      // it act as return of maniPulate()

     return function multiply() {    // **** it act as return of maniPulate() 
          var m=func(a,b)
          return c*d*m      // 15 * -1 * 15
     } 
 }
 var result = maniPulate(7,8,add) //  **** add() is passed as argument
 console.log(result())







 //--------------------------------------- closure example  -------------------------------

  var a = 333

  function foo() {
      var b = 6
      
      return function() {
          console.log(b)
      }
  }
  var xyz= foo()
   xyz()
// console.dir(xyz)



/* ----------------------------------callback function ()---------------------------- */

function sample (a,b){
    var c= a+b //180   5+8=13
    var d= a-b //20      5-8 =-3

    var result= sum(c,d)

 return result  // 13 +(-3) =10
    
}
function sum(a,b){
    return a +b //180
}
/* console.log(sample(100,80)) */
console.log(sample(5,8)) // result 10



//------------------------------another example------callback function ()---------------------------------------

function sample1(e,f, cb){
     var g= e +f 
     var h= e-f
        
     var result1= cb(g,h)
     return result1

}
function sum(e,f){
    return e + f 
}
console.log(sample1(5,8, function(g,h){// substruction
           return g - h  // g= 5 +8 =13  h= 5 - 8= -3  (13 - (-3) =16)
                       // sample1 = 16
}))
console.log(sample1(10, 12, sum)) // g= 10+12= 22  h= 10-12= -2  g+h= 22-2 =20
                        // sample1 =20


console.log(sample1(1,2, function(g,h){ // multiplying 
             return g * h
}))
console.log(sample1(4,8, function(g,h){
    return g/h
}))


/* -----------using--------forEach()----------callback function ()-------------------------- */


 var arr =[1,2,3,4,5,6,7,8,9,10]

arr.forEach(function(value, index, arr) {
    console.log(value, index,arr)
}); 

 
/* -------------- implementing forEach()-------- using call back function()--------------------------------------------- */

var arr =[1,2,3,4,5,6,7,8,9,10]

  function forEach(arr, cb){
    for(var i =0; i< arr.length; i ++){ 
          /*  cb(arr[i],i) */// if i want to pass all three items I can
          cb(arr) // here callback function invoke
    }
}
  /*  forEach(arr,function(value,index){ // if i pass 2 item of array i can
       console.log(value, index)
   })
 */
  forEach(arr, function(arr){
      console.log(arr) // i pass here only array and it print
  })



  /* ------------------------Map function()---------------------------------------------- */

  // Map work modify the array but it don't touch the main array . Map create a new array and return it

  var aaron =[1,2,3,4,5]

  var sqrArr= aaron.map(function(value){
      return value * value
  })
  console.log(aaron)
  console.log(sqrArr)




  // ------- another example - of Map()-------------------------------


   
  function myMap(aaron){
        var newArr=[]
        for(var i=0; i <aaron.length; i++){
            var temp = aaron[i] * aaron[i] // we can make a callback function to change the array
            // we can keep value in temp variable 
               
            newArr.push(temp)
        }
        return newArr
  }
  console.log(myMap(aaron))

//----------------------------------------------------------------------------------

        var anuva =[4,5,6]

        function myCap(anuva, cb){
            var newArr=[]
            var sum =0
            for(var i=0; i <anuva.length; i++){
        /*         var temp = aaron[i] * aaron[i] // we can make a callback function to change the array
                // we can keep value in temp variable  */
                var temp = cb(anuva[i],i,arr)// a callback function cb is stored in temp
                
                newArr.push(temp)
            }
            return newArr
        }

        // now we can make a callback function and stored in cd variable

        var cd= myCap(anuva, function (value) {
            return value + value
        })
        var addit= myCap(anuva, function(value) {// here a callback function return addition of each values
          return   sum +=value
        })
    
//console.log(myCap(anuva))
        console.log(cd)
       // console.log(addit)


        
  /* ------------------------Filter function()---------------------------------------------- */

  var number =[1,2,3,4,5,6,7,8,9,11,12]

  var filteredArr= number.filter(function(value) {
      return value % 2 === 0
     /*  return value % 2 === 1 */
      
  })
  //console.log(filteredArr)


  //--------------example of filter function making own function-----------------

  
  function myFilter(number){
            var newNum =[]
    for( var i=0; i <number.length; i++){
        
        var temp = number[i] * number[i] 
     
        newNum.push(temp)
        }
       return newNum 
    }
    
  
  console.log(myFilter(number))

  
/* ------------------------Reduce function()---------------------------------------------- */

var number1 =[1,2,3,4,5,6,7,8,9,11,12]

var sum= number1.reduce(function(prev,curr){
    return prev + curr
},100)   

var max = number1.reduce(function(prev, curr){
    return Math.max(prev, curr)
})
var min = number1.reduce(function(prev, curr){
    return Math.min(prev, curr)
})
                        // 100 is an initial value which will add with the summetion of array
 console.log(sum)
 console.log(max)
 console.log(min)


 /* ------------------------find and findIndex function()---------------------------------------------- */


 var fin= number1.find(function(value){
    return value === 9           // find will print the value is here 
 })
 console.log(fin)
 var finIndex = number1.findIndex(function(value){
     return value === 9
 })                         // findIndex will find the index number of an array
 console.log(finIndex)




  /* ------------------------sort---some -- Every--- function()---------------------------------------------- */


  var suhel =[

    {
          name: 'abu',
       age:33
    },
    {   
        name:'bokkor',
        age:22

     },
     {
         name:'kolim', 
         age:66
     }, 
     {
         name:'milon',
         age: 55

     }
  ]
  var suhel1 =[-1,1,-2,5,4,1,2,5,3,6,7,9,8,-5,-22] /* -----sorting example */

      suhel1.sort()
      console.log(suhel1)
      suhel.sort()
      console.log(suhel)

     //-----------another way of sorting example--------------------------------------------

      suhel1.sort(function(a,b){
          if(a > b){              //for perfect sorting including positive and negetive number
              return 1
          }else if(a < b){
              return -1
          }else{
              return 0
          }
      })
      console.log(suhel1)

    suhel.sort(function(a,b){
        if(a.age > b.age){
            return 1
        }else if(a.age < b.age){
            return -1
        }else{
            return 0
        }
    })
    console.log(suhel)

    // --------------------------- every ------------------------------------sorting example
    // every fucnctoin implies that if any of array is something /////

    var res= suhel1.every(function(value){
        
       return value > 0  //  it means that if any number is greater than 0 and it reply false  cause there is more negetive number in array suhel1
        })
  console.log(res)

  
    // --------------------------- some ------------------------------------sorting example
    // some fucnctoin implies that if any of array is something /////

    var res1= suhel1.some(function(value){

        return value > 0  //  it means that if any one number is greater than 0 and it reply true  cause there is more positive number in array suhel1
    })
    console.log(res1)




    /* -------function Return()---function()----------------------------------------- */

    function greet(msg){

        function greeting(name){
            console.log(msg +',' + name)
        }
        return greeting

    }

    var res1 = greet('hi how are you ?') // passing value
    var res2 = res1('suhel') // passing two value 
    console.log(res2)


/* ---another example of ----function Return()---function()----------------------------------------- */

  function base(b){
          

         function power(n){ 
             var result =1
             for(var i=0; i< b; i++){
                 result *= n
             }
             return result
         }
         return power
  }

   var vas= base(10) // passing b =10 
   console.log(vas(2)) // passing power 2   10^ 2 = 1024



 /* ---------------------------------another way------------------------------------------- */
   
  function base(b){
          

   return function power(n){ 
        var result =1
        for(var i=0; i< b; i++){
            result *= n
        }
        return result
    }
    
}

var vas= base(10) // passing b =10 
console.log(vas(2)) // passing power 2   10^ 2 = 1024
var vas= base(8)
console.log(vas(2))

/* ---another example of ----function Return()---function()----------------------------------------- */



function sayHello(n){

    if(n ===0){
        return
    }
    console.log('hi iam calling')
    sayHello(n -1)
}


sayHello(5)

function sun(n){
    if(n ===1){
        return 1 
    }
    return n + sun(n -1) 
}
console.log(sun(5))


// factorial --------------------------------------------------------------

function fact(n){
    if(n===1){
        return 1
    }
        return n * fact(n-1)
    
}
console.log(fact(5))


/* --------------------------------------------------curring()------------------------------- */

/* function addict(a,b,c){
    return a+b+c
}
 */
function curring(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

 var kur= curring(10)(10)(10)
 console.log(kur)


