// how to insert a data at the last index-----------------------------------------------------

//const numB=[1,2,3,4,5]
//const numA=[7,3]
//numB[numB.length] =6

//console.log(numB)

//numB.push(numA)
//console.log(numB)

//another way to insert data
//numB.push(...numA)
//console.log(numB)

//another way

//Array.prototype.push.apply(numB,numA)
//console.log(numB)

// how to insert a data at the begining index-----------------------------------------------------
/* 
const numA=['a','b','c']
numA.unshift('p')
console.log(numA)

const numB= [3,5,6]
 */
////numA.unshift(...numB)
//console.log(numA)

/* Array.prototype.unshift.apply(numB,numA)
console.log(numB)//

numB.splice(0,0,1) // inserting index data 

console.log(numB)
numB.splice(1,1) // deleting a index data
 console.log(numB)
 */
 // how to insert a child array in a  array
/* 
 const day=['sat','sun','mon']
 const day2=['tue','thurs','wedneday']
 const day3=['friday']
 */
 //day.splice(3,0,day2)
 //console.log(day)

 //day.splice(4,0,day3)
 //console.log(day)

 /* day.splice(3,0,...day2)
 console.log(day)
 day.splice(7,0,...day3)
 console.log(day) */

 /// updating index value--------------------------------------------------------------------------------------------
/* 
 const color=[
    {id:1, name:'red'},
    {id:2, name:'green'},
    {id:3, name:'blue'},
    {id:4, name:'white'},
    {id:5, name:'purple'}

 ]

 const aId= 4
 const updateColorName ='pink'

 for(let i=1; i< color.length; i++){
     if(aId === color[i].id){
         color[i].name= updateColorName
          break
     }
 }
console.log(color) */

// deleting index item data-------------------------------------------------------------------------------------------

/* const numberArr =[1,23,4,3,4,5,6,8,97,65,543,32,3,45]
console.log(numberArr)
// deleting first data from the array
numberArr.shift()
 */
// another way to delete last item
//numberArr.pop()
/* 

numberArr.length = numberArr.length -1

numberArr.splice(7,1)
console.log(numberArr)
numberArr.splice(0,2)
console.log(numberArr)
 */
// another way to delete the index item specific value
/* 
const toDelete= 6 // th item 534
for(let i= 0; i < numberArr.length; i++){
    if(toDelete=== numberArr[i]){
        numberArr.splice(6,1)
    }
}
console.log(numberArr) */


//another way to delete a value
/* let numberArr1 =[1,23,4,3,4,5,6,8,97,65,543,32,3,45]

delete numberArr1[1] //1 index is 4
console.log(numberArr1)

//a way to delete whol array or reset 

while(numberArr1.length) numberArr1.pop()
console.log(numberArr1) */

// array concating------------------------------------------------------------------
/* 
 const arr4 =[1,2,3,4]
 const arr5=[5,6,7,8]
 const arr6= arr4.concat(arr5)
 console.log(arr6)
const arr7= [...arr4,...arr5]
console.log(arr7)

const arr8= [].concat(arr4,arr5)

const arr9=[].concat(arr4,arr5, 9,10,11)

console.log(arr8)
console.log(arr9) */

// array slice -----------------------------------------------------------------------------
const arr = ['a','b','c','d','e','f']
 const test= arr.slice(1,5)
 console.log(arr, test)
 const tes1=arr.slice(-3) // it will creat last three item of the array
 console.log(tes1)
