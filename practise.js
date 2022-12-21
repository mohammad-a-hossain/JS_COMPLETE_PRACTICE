// simple project

let letter= ['a', 'b','c','d','e','f','g','h','i']

for(let i=0; i< letter.length;i ++){
    let rand= Math.floor(Math.random() * 10 +1)
     letter[i] = rand > 4 ? 'x':'Y'
}
//console.log(letter)



// array can take multiple data type
let array= [3,'W',getten(), true,{'e':33},[10,10]]
function getten(){return 10}
//console.log(array)
//[ 3, 'W', 10, true, { e: 33 }, [ 10, 10 ] ]



// array of object
const sum= (a,b)=> a+b;
const sub=(a,b)=> a-b;
const div=(a,b)=> a/b;
const mult=(a,b)=>a*b;
let funs=[sum,sub,div,mult]
 let a= 20, b= 5
for(let i=0; i< funs.length; i++){
    let result = funs[i](a,b)
  //  console.log(`[${funs[i].name}] result=${result}`)
}


// two dimensional arrray

let number=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
//console.log(number[0]) // it will show first row
for(let i=0; i< number.length; i++){
    for(let j=0; j< number[i].length; j++){
       // console.log([number[i][j]])
    }
    
}


// matrix add and subs

const matrixA=[
    [1,2,3],
    [2,2,2],
    [3,4,5],
]
const matrixB=[
    [1,2,3],
    [2,2,2],
    [3,4,5,6],
]
const  matrixAdd=(matA,matB)=>{
        const res=[]
        for(let i=0; i <matA.length; i++){
            const row=[]
            for(let j=0; j< matA[i].length; j++){
                row.push(matA[i][j]- matB[i][j])
            }
             res.push(row)
        }
        return res   

}
const resp= matrixAdd(matrixA,matrixB)
//console.log(resp)


// insetin an element
const arrp= [1,2,3]
const arrp1=[2,3,4]
  //  arrp[arrp.length] = 5
console.log(arrp)
//arrp.push(4)
console.log(arrp)

// adding two array
//arrp.push(...arrp1)
//console.log(arrp)
Array.prototype.push.apply(arrp,arrp1)
//console.log(arrp)

// adding start at
Array.prototype.unshift.apply(arrp,arrp1)
//console.log(arrp)


// SPLICE

const arrx= [1,2,3,4]
//arrx.splice(2,0,22)
arrx.splice(1,1) // delete value 2 in index 2
arrx.splice(2,0,300)
//console.log(arrx)


// update array element

const letters= [
   {id:1, name:'a'}, 
    {id:2, name:'b'},
    {id:3, name:'c'},
    {id:4, name:'d'},
   {id:5, name:'e'},
    {id:6, name:'f'},
    {id:7, name:'g'},
    {id:8, name:'h'},
    {id:9, name:'i'},
]
const fId= 5
const updatename ='k' 
for(let i=0; i < letters.length; i++){
    if(fId === letters[i].id){
        letters[i].name = updatename
        break
    }
}
//console.log(letters)
/* 
[
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'k' },
  { id: 6, name: 'f' },
  { id: 7, name: 'g' },
  { id: 8, name: 'h' },
  { id: 9, name: 'i' }
]

*/


//deleting array

const lettersOne= [
    {id:1, name:'a'}, 
     {id:2, name:'b'},
     {id:3, name:'c'},
     {id:4, name:'d'},
    {id:5, name:'e'},
     {id:6, name:'f'},
     {id:7, name:'g'},
     {id:8, name:'h'},
]

lettersOne.shift()
lettersOne.pop()
console.log(lettersOne)
lettersOne.length= lettersOne.length -1


lettersOne.splice(0,2)
console.log(lettersOne)

let lettersThree= [
    {id:1, name:'a'}, 
     {id:2, name:'b'},
     {id:3, name:'c'},
     {id:4, name:'d'},
    {id:5, name:'e'},
     {id:6, name:'f'},
     {id:7, name:'g'},
     {id:8, name:'h'},
]
const deletespecificId = 5
for(let i=0; i<lettersThree.length; i++){
    if(lettersThree[i] === deletespecificId ){
        lettersThree.splice(i, 1)
    }
}

let lettersFour= [
   'a','b','c','d'
]
const tobeDeleted= 'c'
lettersFour= lettersFour.filter((item)=> item !== tobeDeleted)
//console.log(lettersFour)


let x= [1,2,3]
let y=x
x.length=0
console.log(x==y)   
console.log(x,y)

console.log('befreset'+ lettersFour)
while(lettersFour.length) lettersFour.pop()
//console.log('reset'+ lettersFour)


// concate 

const ppp= ['x','y', 'z']
const qqq= ['a','b','c']

const req= [...ppp,...qqq]

const hes= ppp.concat(qqq)

const ano= [].concat(ppp,qqq)

console.log(req)

console.log(hes)

console.log(ano)
const ano1=ano.slice(1,2)
const ano2=ano.slice(0,3)
const ano3= ano.slice(2,4)
console.log(ano1)
console.log(ano2)
console.log(ano3)

// stack

