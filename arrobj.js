// working array crud operation for now then go to object operation 
const { uuid } = require('uuidv4');
//const { v4 } =require('uuidv4')
const students=[
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
        name:'abu',
        email:'abu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260',
        name:'kbu',
        email:'kbu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
        name:'rabu',
        email:'rabu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
        name:'labu',
        email:'labu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
        name:'sabu',
        email:'sabu@gmail.com',

    }
]

//onsole.log(uuid());

// create a new student : interms of push 0(1) update 0(1) delete > splice o(n) filter 0(n)
students.push({
    id:uuid(),
    name:'jamal',
    email:'jamal@gmail.com'
})
//console.log(students);


// update a student 

const updateId='1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262'

const updateData={
    name:'jony',
    email:'jony@gmail.com'
}

// now find the index of which id will updated

const getIndexTo= students.findIndex((item)=> item.id=== updateId)

students[getIndexTo]={
    ...students[getIndexTo],
    ...updateData
}

//console.log(students);

/* result of update 

[
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260',
    name: 'kbu',
    email: 'kbu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  {
    id: '38d6b1a7-9984-4686-ad3b-8bd78da3b534',
    name: 'jamal',
    email: 'jamal@gmail.com'
  }
]

*/




// now delete operation 
const needDelteId=  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260'

const dleteIndex= students.findIndex((item) =>item.id === needDelteId )

students.splice(dleteIndex,1)
//console.log(students);

/* 
result of delete 

[
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  }
]

*/




// array traverse >
// forEach , map , reduce, every, filter, some, find ,findIndex

// a way of traverse---------------------
/*
 for(let i=0; i < students.length; i++){
      console.log(students[i].name);
}  

abu
jony
labu
sabu
jamal
 */

// anotehre way traverse ================

/*   for(let i in students){
    console.log(students[i].email);
  }
  abu@gmail.com
jony@gmail.com
labu@gmail.com
sabu@gmail.com
jamal@gmail.com
 */

//anotehr way -------------------
/* for(let student of students){
    console.log(student);
} */






//  OBJECT OPERATION -------------------------------------------------------

/* * IN OBJECT KEY MUST BE UNIQUE  */

const users={
    
    '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
          name: 'abu',
          email: 'abu@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
          name: 'jony',
          email: 'jony@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
          name: 'labu',
          email: 'labu@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
          name: 'sabu',
          email: 'sabu@gmail.com'
        },
        '5010cca5-03a0-4124-8425-25e6732f690b':{
          id: '5010cca5-03a0-4124-8425-25e6732f690b',
          name: 'jamal',
          email: 'jamal@gmail.com'
        },
      
      
}

// operation for object ---------------------------------------------



 // *1 create an object for user



 const user={
    id:uuid(),
    name:'aaron',
    email:'aaron@gmail.com'
 }
 
 users[user.id]=user // order of 1 O(1)
/* 
result -- a new data created 
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  'd9b0363e-2a2a-4a08-83e1-f18b3e461be1': {
    id: 'd9b0363e-2a2a-4a08-83e1-f18b3e461be1',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}
*/


// now update a data in obj timecomplexity=o(1)

const willupdateId= '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264'

const willupdateData={
    name:'manha',email:'manha@gmail.com'
}

users[willupdateId] ={
    ...users[willupdateId],
    ...willupdateData
} 

/* 
result of updata
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'manha',
    email: 'manha@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  'f026c41b-a91c-4465-8ada-69ce14b2ed76': {
    id: 'f026c41b-a91c-4465-8ada-69ce14b2ed76',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}

*/



// now delete operation 




const deleteIndexId= '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268'

delete users[deleteIndexId] // complexity O(1)


/* 
result 
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'manha',
    email: 'manha@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  '036f2263-db96-4ef5-83f1-28432ddb8046': {
    id: '036f2263-db96-4ef5-83f1-28432ddb8046',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}
*/




// GET DATA get a data---------------------------------------------------------

users['5010cca5-03a0-4124-8425-25e6732f690b']
//console.log(users['5010cca5-03a0-4124-8425-25e6732f690b']);

/* 
 result 
{
  id: '5010cca5-03a0-4124-8425-25e6732f690b',
  name: 'jamal',
  email: 'jamal@gmail.com'
}

*/



// traversing an object 
/* for(let key in users){
    console.log(users[key].email);
}
abu@gmail.com
jony@gmail.com
manha@gmail.com
jamal@gmail.com
aaron@gmail.com
 */

/* for(let key in users){
    console.log(key);
}
 */


// TRAVERSING OBJECT----------------------------------------------------------
/*  Object.values(students).forEach((student)=> {
  console.log(student.email, student.name)
 }) */

/* 
abu@gmail.com abu
jony@gmail.com jony
labu@gmail.com labu
sabu@gmail.com sabu
jamal@gmail.com jamal

*/

/* 
const len= Object.keys(students).length
console.log(len); */






//console.log(users);

/* ----------------------------------------------------------------------------------------------- */














// LETS SEE SOME USE CASE OF POWER OF OBJECT



// suppose we will count time consume of object operation also compare with array

/* 
let getNum= []
for(let i=0; i < 5000000; i++){
   getNum.push({
    id:i, 
    value:i
   })
} 
*/
//console.log(getNum);

/* [
  { id: 0, value: 0 },   { id: 1, value: 1 },   { id: 2, value: 2 },
  { id: 3, value: 3 },   { id: 4, value: 4 },   { id: 5, value: 5 },
  { id: 6, value: 6 },   { id: 7, value: 7 },   { id: 8, value: 8 },
  { id: 9, value: 9 },   { id: 10, value: 10 }, { id: 11, value: 11 },
  { id: 12, value: 12 }, { id: 13, value: 13 }, { id: 14, value: 14 },
  { id: 15, value: 15 }, { id: 16, value: 16 }, { id: 17, value: 17 },
  { id: 18, value: 18 }, { id: 19, value: 19 }, { id: 20, value: 20 },
  { id: 21, value: 21 }, { id: 22, value: 22 }, { id: 23, value: 23 },
  { id: 24, value: 24 }, { id: 25, value: 25 }, { id: 26, value: 26 },
  { id: 27, value: 27 }, { id: 28, value: 28 }, { id: 29, value: 29 },
  { id: 30, value: 30 }, { id: 31, value: 31 }, { id: 32, value: 32 },
  { id: 33, value: 33 }, { id: 34, value: 34 }, { id: 35, value: 35 },
  { id: 36, value: 36 }, { id: 37, value: 37 }, { id: 38, value: 38 },
  { id: 39, value: 39 }, { id: 40, value: 40 }, { id: 41, value: 41 },
  { id: 42, value: 42 }, { id: 43, value: 43 }, { id: 44, value: 44 },
  { id: 45, value: 45 }, { id: 46, value: 46 }, { id: 47, value: 47 },
  { id: 48, value: 48 }, { id: 49, value: 49 }, { id: 50, value: 50 },
  { id: 51, value: 51 }, { id: 52, value: 52 }, { id: 53, value: 53 },
  { id: 54, value: 54 }, { id: 55, value: 55 }, { id: 56, value: 56 },
  { id: 57, value: 57 }, { id: 58, value: 58 }, { id: 59, value: 59 },
  { id: 60, value: 60 }, { id: 61, value: 61 }, { id: 62, value: 62 },
  { id: 63, value: 63 }, { id: 64, value: 64 }, { id: 65, value: 65 },
  { id: 66, value: 66 }, { id: 67, value: 67 }, { id: 68, value: 68 },
  { id: 69, value: 69 }, { id: 70, value: 70 }, { id: 71, value: 71 },
  { id: 72, value: 72 }, { id: 73, value: 73 }, { id: 74, value: 74 },
  { id: 75, value: 75 }, { id: 76, value: 76 }, { id: 77, value: 77 },
  { id: 78, value: 78 }, { id: 79, value: 79 }, { id: 80, value: 80 },
  { id: 81, value: 81 }, { id: 82, value: 82 }, { id: 83, value: 83 },
  { id: 84, value: 84 }, { id: 85, value: 85 }, { id: 86, value: 86 },
  { id: 87, value: 87 }, { id: 88, value: 88 }, { id: 89, value: 89 },
  { id: 90, value: 90 }, { id: 91, value: 91 }, { id: 92, value: 92 },
  { id: 93, value: 93 }, { id: 94, value: 94 }, { id: 95, value: 95 },
  { id: 96, value: 96 }, { id: 97, value: 97 }, { id: 98, value: 98 },
  { id: 99, value: 99 },
  ... 4999900 more items
] */

// now we will updata a value and see the time complexity


/* 

console.time('time-start')
let id= 4999999

const obj= getNum.find((item) => item.id === id )
obj.value= 499

console.timeEnd('time-start')

*/
// time-start: 59.04ms it take this time to update 


//now we can add object to compare


let getNum= []
let anObj={}
for(let i=0; i < 5000000; i++){
  const o={
    id:i, 
    value:i
  }
   getNum.push(o)
   anObj[i]=o 
}

// console.time('time-start')
// let id= 4999999

// const obj= getNum.find((item) => item.id === id )
// obj.value= 499

// console.timeEnd('time-start')


// console.time('time')
// anObj[id].value = 333
// console.timeEnd('time')

/* 
//to arry time consume
time-start: 71.514ms

//to obj time consume
time: 0.011ms

*/


// NOW COMPARE WITH UNSHIFT -------------------------



console.time('array')
const index = getNum.find((item) => item.id === 4000000)
 getNum.splice(index,1)
console.timeEnd('array')

console.time('obj')
delete anObj[4000000]
console.timeEnd('obj')

/* 
array: 60.789ms time consume for delte operation

obj: 0.013ms time consume for delte operation

note: in sequence of data operation (when data must be serial ) time it need array must 

*/






//  REDUCE USE CASE ---> added to reducer.js and see the rest work-----------------------

// reduce breaking and implement of row reduce 
   
 // first implement own reducer 






//it is a pattern of reduce

/*  

function myReducer(array,cb,init){
     let acc =init 
     
     for(let i=0; i < array.length; i++){
       acc= cb(acc, array[i],i , array)
     }

     return acc 
  }

  let filtNum = [1,2,3,'',false, 5, NaN,7, 'str',10]

   const getREs= myReducer(

    filtNum ,(acc,curr)=>{
      if(curr){
        acc.push(curr)
      }
      return acc
    },[]
   ) 


   console.log(getREs);

  
 
[
  1,  2, 3,
  5,  7, 'str',
  10
]
 
 const doSum =myReducer([3,4,5,6],(a , b)=>{
  acc= a+b 
  return acc
 },0)

 console.log(doSum); // 18 
 
 
 */








const aNum =[1,2,'',5,false,NaN,10]
/*
const res= aNum.reduce((acc,curr,index)=>{
  if(curr){ // if curr is truthy value then it will bring only truthy value
    acc += curr.toString()+(index < aNum.length-1 ? '-':'')
  }
  return acc 
},'')


*/
//console.log(res);
/* 1-2-5-10 */

const res1=aNum.reduce((acc,curr,index)=>{

console.log('index :',index, 'cur :',curr, 'acc :', acc );

     if(curr){ // when curr is true value / number then it push number to acc[]
      acc.push(curr.toString()) // if we want to print only num value we push by condition if(curr)
     }

  return acc 
},[])
console.log(res1); // it filter an map done in one reduce case

/*
index : 0 cur : 1 acc : []
index : 1 cur : 2 acc : [ '1' ]
index : 2 cur :  acc : [ '1', '2' ]
index : 3 cur : 5 acc : [ '1', '2' ]
index : 4 cur : false acc : [ '1', '2', '5' ]
index : 5 cur : NaN acc : [ '1', '2', '5' ]
index : 6 cur : 10 acc : [ '1', '2', '5' ]


[ '1', '2', '5', '10' ] //after filete it also map the whole number and get result

 */

/* 
 if we want to print all data as it was  so we can only push curr

const ano= aNum.reduce((acc,curr)=>{
     acc.push(curr)
   return acc
},[])
console.log(ano);
[
  1,  2,     '',
  5,  false, NaN,
  10
] */



// NOW WE WILL SEE THE TIME CONSUME IN REDUCER --------------------


const prr =[]
for(let i=0; i < 5000000 ; i++){
  prr.push(i)
}

// now we will operate 2 method filter and map and calculate time 

console.time('map-filter');
  const ress = prr.filter((item) => item % 2 === 0).map((item) => item *2)

console.timeEnd('map-filter') 
/* 
map-filter: 181.333ms time consume 
*/


// now we will compare with reduc method to do same operation 

console.time('reduce-time')

prr.reduce((acc,curr)=>{

    if(curr % 2 === 0){
      acc.push(curr * 2)
    }

  return acc 
},[])

console.timeEnd('reduce-time')
  
/* 

map-filter: 305.831ms

reduce-time: 174.14ms

*/



const axios = require('axios')
const url ='https://jsonplaceholder.typicode.com/posts' 

/* 
async function getData(){
  const {data} =  await axios.get(url)
//console.log(data);
 const result = data.slice(0,10).map((item)=>{
  return {
  
    id:item.id,
    title:item.title
   }
 })
 return result
} 
*/
//getData().then((data) => console.log(data)).catch((e)=>console.log(e))
/* 
[
  {
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehe n
derit'
  },
  { id: 2, title: 'qui est esse' },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  },
  { id: 4, title: 'eum et est occaecati' },
  { id: 5, title: 'nesciunt quas odio' },
  { id: 6, title: 'dolorem eum magni eos aperiam quia' },
  { id: 7, title: 'magnam facilis autem' },
  { id: 8, title: 'dolorem dolore est ipsam' },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium'
  },
  { id: 10, title: 'optio molestias id quia eum' }
]
*/




// using reducer ------------------------------------------------------
/* async function getData(){
  const {data} =  await axios.get(url)

  const result = data.slice(0,10).reduce((acc,curr) =>{
        
    acc[curr.id] = {...curr}
    delete acc[curr.id].body
    return acc
  },{})

 return result
} 
getData().then((data) => console.log(data)).catch((e)=>console.log(e))

getData() */

/* 
{
  '1': {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  },
  '2': { userId: 1, id: 2, title: 'qui est esse' },
  '3': {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut'
  },
  '4': { userId: 1, id: 4, title: 'eum et est occaecati' },
  '5': { userId: 1, id: 5, title: 'nesciunt quas odio' },
  '6': { userId: 1, id: 6, title: 'dolorem eum magni eos aperiam quia' },        
  '7': { userId: 1, id: 7, title: 'magnam facilis autem' },
  '8': { userId: 1, id: 8, title: 'dolorem dolore est ipsam' },
  '9': {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium'
  },
  '10': { userId: 1, id: 10, title: 'optio molestias id quia eum' }
}

*/


let names=[
  'mango',
  'apple',
  'banana',
  'jamborea',
  'oragne',
  'dolorem',
  'accusantium'
]

const getNames = names.reduce((acc,curr)=>{
    const firstLett= curr[0].toUpperCase()
    if(firstLett in acc){
      acc[firstLett].push( curr)
    }else{
   acc[firstLett] =[curr]
    }
 
   return acc
},{})

console.log(getNames);
/* 
{
  M: [ 'mango' ],
  A: [ 'apple', 'accusantium' ],
  B: [ 'banana' ],
  J: [ 'jamborea' ],
  O: [ 'oragne' ],
  D: [ 'dolorem' ]
}
*/

Object.keys(getNames).forEach((gkey)=>{
  console.log('-----',gkey,'------');
    getNames[gkey].forEach(nam => console.log(nam))
    console.log('');
})

/* 
----- M ------
mango

----- A ------
apple
accusantium

----- B ------
banana

----- J ------
jamborea

----- O ------
oragne

----- D ------
dolorem
*/













const nativeLand=['i','love','my','country','she','is','so','beautifull']

/* function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

nativeLand.reduce(reducer); */

/* const respon =nativeLand.reduce((acc,curr,index)=>{

  console.log('index :',index, 'cur :',curr, 'acc :', acc );
  
       if(curr){ // when curr is true value / number then it push number to acc[]
        acc.push(curr.toString()) // if we want to print only num value we push by condition if(curr)
       }
  
    return acc 
  },[])
  console.log(respon);  */


/*
  const array = [5, 6, 7, 8, 9];
 
function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);  */

/* const prices=[33,44,55,66,77,88]

const sums = prices.reduce((preVal, currVal, currentIndex, prices) => {
  console.log(
    `accumulator: ${preVal}, currentValue: ${currVal}, index: ${currentIndex}, returns: ${preVal}`,
  );

  return preVal + currVal;
 }, 0); */
 
  