/* console.log('hi this is suhel')
console.log(3434)
console.log(44.25)
console.log('its time for js ' +100)
console.log(9 + 9)
console.log('8' + 9)
 */

//-----------------------------------------------

//type conversion

/* var srt="1000"
var n=10

 ""
console.log(srt *n)
console.log(srt + n)
console.log(Number(srt))
console.log(Number.parseInt(srt))
//converting number to string
console.log(n.toString())
// converting infinity
console.log(Number(infinity))
console.log(String(infinity))
console.log(Boolean(infinity))
 */



// JS falsy value->   "" 0 null naN undefined
/* undefined
null
0
console.log(Boolean(""))
console.log("hi cheek it empty stiring")
console.log(Boolean(0))
console.log(Boolean(9))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log("its working !") */
// boolean k string conversion

/* console.log(Boolean(true))
var v=true

console.log(v.toString()) */


//----------------------pre incremental & post incremental--------------
/* 
var a=10 
a ++                  //10 + 1=11
console.log(a)
var b=5 
++b                    // 1+5= 6
console.log(b)

var c=10
var d=20 
// c= c+d  
c +=d
console.log(c)
c-=d
console.log(c)

var a = "50"
var b=50
console.log(a==b)// return true cause both can be convert a type

console.log(a===b) //return false cause data type is not equal (===)

console.log(typeof 'string')
console.log(typeof 50)
console.log(typeof Boolean)// return function
console.log(typeof false)
 */


//------------------------Math js-------------------------------------------------------------
/* console.log(Math.E)
console.log(Math.PI)

var n=3.3256
console.log(Math.abs(n))
console.log(Math.floor(n))
console.log(Math.ceil(n))
console.log(Math.round(n))

console.log(Math.max(2,3,5))
console.log(Math.min(2,3,4))
console.log(Math.pow(2,3))
console.log(Math.sqrt(8))
console.log(Math.sqrt(64))
console.log(Math.random()) 
console.log(Math.floor(Math.random()* 5 +1))*/

//----------------date js---------------------------------------------

// var date =new Date()
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString())

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getSeconds())

//-------------------------------------loop------------------------

// for(i=0; i< 100; i++){
//     console.log( (i + 2) +' suhel is here')
// }
// var i=1
//  while(i<10){
//      console.log('ki hochche')
//      i++
//  }

//----------------- a game ------------------------------------------------------

/*  var isRunning =true
 while(isRunning){
     var rand=  Math.floor(Math.random() * 10 +1)
     if(rand=== 7){
         console.log('you have won da game')
         isRunning=  false
     }else{
         console.log( 'you got number' + rand)
     }
     
 } */

 //--------------------------------string------------------------------------


/*  var str='this is \'Bangladesh\'' //scape notation  \'\'
 console.log(str)
 var str='this is \nBangladesh' // new line \n
 console.log(str)
 var str='this is \tBangladesh'  // tab notaion
 console.log(str)
 */

// string comparaing----------------
/* 
var a ='abc' 
var b='ABC' // capital letter is smaller to the smaller for comparing in string 
console.log(a === b) // return false 

var a= '010'
var b= 10
console.log(a===b) //data type is not same retun false 
console.log(a+b) // return 01010
 */

/*
 var f = 'i an a student'
var g= 'from Bangladesh'
var r= f.concat(' ', g) // string concatanation 
console.log(r)

var s= 'hi how are you man'
console.log(s.substr(5))
console.log(s.substr(5, 5)) */

//----------------------------------------more function as bellows---------------------

/* f.toLowerCase()
g.toUpperCase()
r.startsWith('an')
r.endsWith('eed')
console.log('   adf    '.trim()) 
console.log(r.split(' ')) //will make a array of the string 
*/

/* var str='my name is Abu Hossain'

  var length =0;
  while(true){
if(str.charAt(length)==""){
    break
}else{
    length++
}
console.log('total length is '+ length)
  } */

  // ====================== array================================================


/* var arr =[1,2,3,4,5,6]
console.log(arr)
 arr[10]=12
 console.log(arr)
 console.log(arr.length)
 //replace
 arr[1]=11 
 console.log(arr) */

 //--------------- array length measurement=============================================
 
 /* var arr1 =[1,2,3,4,5,6,7,8,9,10,11]

 var length=0
 for(i=0;i <arr1[i]; i++){
     length ++
 }

 console.log('total length is '+ length) */

// var arr2 =[1,2,3,4,5,6,7,8,9,10,11]
 /* for(var i=0; i< arr2.length;i++){
     console.log(arr2[i])
 }
  */
 //-----------
/*  1 
2 
3 
4 
5 
6 
7 
8 
9 
10
11 */
  //--------------------finding summetion

/*   var sum=0
  for(var i=0; i< arr2.length;i++){
    sum = sum + arr2[i] // sum += arr2[i]

}
console.log(sum) */

//----------array insert update delete --------------------------------

var alpha =['A','B','C','D','E','F']

alpha[0]='a'                             //replacing A to a 

alpha.push('I')                         // i inserted to array last index

alpha.unshift('I')                       // I insert to 0 index first element  index

alpha[1]=undefined                      // a is index 1 and deleted for undefined is set

alpha.pop()                             // last index value I is deleted for pop function

alpha.shift()                           // first index value I is deleted for shift function

//console.log(alpha) 


//=========== array splice function()-----------------------------------------------

/* alpha.splice(2,1)       // 2 index value C is deleted 
alpha.splice(2,0,'C')   // 2 index C is inserted
alpha.splice(7,0,11)   // 7 index 11 is inserted
alpha.splice(6,1,13)   // 6 index is replaced by 13 
alpha.splice(6,1)     // 6 index is deleted

console.log(alpha)  */


//-------------- array searching algorithom ---------------------------------------------------

/* var name =['suhel','aaron','manha','azoa','raisa','tanifa','adiba','anuva','abid','miska','maisha']
var find ='maisha'
var isFound =false
for(var i=0; i<name.length;i++){
  if(name[i] === find){
    console.log('data found at index ' + i)
    isFound = true  // if data not found this var will be false 
    break
  }
//   if(!isFound){
  console.log('data not found') if u wnto to get the result inside loop and after traversing
} 
}
if(!isFound){
  console.log('data not found')  // here loop will travers only 1 time 
} */

//-------------- array searching algorithom -   end------------------------------------------------------



//-----array dimensional array examples ---------------------------

//one dimensional array=[1,2,3]
/*  two dimensional array=[
                            [],
                            []
                          ] */
/* three dimensional array=[
  [
    [],
    []
  ]
]  


*/

/* var exam =[  // this is a two dimensional array
  [45,55,656,1],
  [1,88,55,66],
  [5,55]
] */

// console.log(exam[0][0]) result=45
             //  exam[1][1] result=1

//how to traverse Array  two dimension

/* for(i=0;i< exam.length;i++){
  for(j=0; j< exam[i].length; j++){
    console.log('element is ' +i + '-' + exam[i][j])
  }
} */

// ------------------------three dimensional array print------------------------------
/* var fruit=[
  [44,55,66],
  [
    ['apple','banana','orange'],
    ['aaron','manha','azoa']

  ],
  [1,55,66]
]
for(i=0; i< fruit.length;i++){
  for(j=0;j<fruit[i].length;j++){
    console.log('element is '+ i + fruit[i][j])
    for(k=0;k<fruit[j].length;k++)
    console.log(fruit [j][k])
  }
}  */

//----             array reverse function     --------------------------------------

var page =[1,2,3,4,5,6,7,8]
var ppg=[44,45,66]
var text =['a','b','c','d','e']
page[6]=11
var ppg= page

/* for(var i =0; i< (page.length/2); i++){ // 
    var temp = page[i]
    page[i] = page[page.length -1 -i]
    page[page.length -1 -i] = temp

} */
 // console.log(page)

 // console.log(page.reverse()) // this function use for array reverse
 //console.log(page.join(' ')) // thid function takes space for array 1 2 3 .....
// console.log(page.fill(0))  // this function fills the array with 0  0 000000000
 
var result = page.concat(text)
console.log(result)

//  console.log(Array.isArray(page))  // this function will return isArray means its true or false
 
console.log(Array.from(ppg))