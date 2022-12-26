// reduce use case 

let nums= [4,5,6,7,8,44]

function sumFun(a,b){ return a+b}
const result3=nums.reduce(sumFun)
console.log(result3)


const avg = nums.reduce((acc,curr,index,arr)=>{
    acc += curr
    if(index === arr.length-1){
        return acc/arr.length
    }
    return acc
})
console.log(avg)


function assSum(acc,curr){
    return acc + curr 

}
const findTotalSum =nums.reduce(assSum,0)
console.log(findTotalSum)



const findAvg = nums.reduce((acc,curr,index,arr)=>{
    acc += curr
    if(index === arr.length-1){
        return acc/arr.length
    }
    return acc
})
console.log(findAvg)

// frequency counter
const lang = [
    'js', 'c', 'python', 'java', 'Go', 'dart', 'c', 'js','java'
]

const freq= lang.reduce((acc, curr)=>{
    if(acc[curr]){
        acc[curr]++
    }else{
        acc[curr]= 1
    }
    return acc
},{})
//console.log(freq)

const ar= lang.reduce((acc,curr)=>{
    acc.push(curr)
    return acc  
},[])

console.log(ar)


// M AK I NG OWN REDUCEER

function myReducer(arr,cb,init){
   let acc = init
       start = 0
       if(!init){
        start =1
       }
    for(let i=start; i<arr.length; i++){
        acc= cb(acc, arr[i],i, arr)
    }
    return acc
}

const sumnum= [1,2,3,4,5]
const findSun= myReducer(sumnum,(acc,curr)=>{
    return acc + curr 
})
console.log(findSun)



const letters1 = [
                    ['a','b'],
                    ['c','d'],
                    ['e','f'],
                    ['g','h'],
                    ['i','j']
                ]

const resultLeters = letters1.reduceRight((acc,curr)=>{
    console.log(`${acc}-${curr}`)
    return acc.concat(curr)
},[])
//console.log(resultLeters)



const products=[
    {id:1, name:'cloth',email:'abu@gmail.com',price:323},
    {id:2, name:'spray',email:'kabu@gmail.com',price:223},
    {id:3, name:'cloth',email:'labu@gmail.com',price:23},
    {id:4, name:'musk',email:'sabu@gmail.com',price:323},
    {id:5, name:'musk',email:'jabu@gmail.com',price:123},  
    {id:6, name:'cloth',email:'labu@gmail.com',price:23},
    {id:8, name:'musk',email:'jabu@gmail.com',price:123}
]

const invoice = products.reduce((acc,curr)=>{
  
            if(acc[curr.name]){
                acc[curr.name].quantity ++
                acc[curr.name].price += curr.price
            }else{
                acc[curr.name]={
                    price: curr.price,
                    quantity:1,
                  
                }
              
             
            }
    
            return acc
},{})

//console.log(invoice)



const matrix=[
    [1,2,3],
    [2,2,2],
    [3,4,5,6],
]
// horizontal adddition
const HotirzontalAdd= matrix.map((row)=>{
    return row.reduce((a,b)=> a+b) 
})
console.log('hori :'+ HotirzontalAdd)

// virticle addition
const VerticalAdd = matrix.reduce((acc,curr)=>{
   return acc.map((v,i )=>curr[i] + v) 
})
console.log('vert '+ VerticalAdd )

// flatt summetion
const flatAdd = matrix.reduce((acc,curr)=>{
    return  acc + curr.reduce((a,b)=> a+b)
},0)

console.log('flat' + flatAdd)


const aNumb= [1,2,3,4,5]

// reduce use in function compose 

const n=5
const add=(n)=>n+10           //5+10 = 15
const multy =(n)=> n * 5        /// 15*5 =75
const dive =(n)=> n/2      //    75/2 = 37.5

const compose = (...fun)=>{
    return (x)=>{
        return fun.reduce((v, f)=> f(v), x)
    }
}
const takeres= compose(add,multy,dive)(n)
console.log(takeres)
