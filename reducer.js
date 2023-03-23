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



const amazaon=['b an g la de ash'].reduce




const about= [3,4,5,6,7]

const newa1= about.reduce((acc,curr,index)=>{
    console.log(index,acc,curr)
    return acc + curr
})
console.log("--------------------------");
const newa= about.reduce((acc,curr,index)=>{
    console.log(index,acc,curr)
    return acc + curr
},5)



/*---------------------------------- flat array--------------------------------- */

const flatarr= ['text',[3,'south'],[33,55],['bang'],false]

   const flatRes= flatarr.flat()
 //console.log(flatRes);
 //[ 'text', 3, 'south', 33, 55, 'bang', false ]


  /* using reducer */
  const redFlat = flatarr.reduce((acc,curr)=>{

    return acc.concat(curr)


  },[])

console.log(redFlat);
//[ 'text', 3, 'south', 33, 55, 'bang', false ]





/* ------------------------------Frequency checker ---------------------------------- */


var arrstr = ["a", "b", "c", "d", "e", "f", "g","a","c", "h", "i", "j", "k", "l", "m", "n"];

const arrstrr = 'bangladesh i love your'
function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};


console.log(getFrequency(arrstrr));


/*------------ useing reducere -----------*/

 const redFreq= arrstr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr] ++
    }else{
        acc[curr] =1
    }

    return acc
 },{})

 console.log(redFreq);

//  {
//     a: 2,
//     b: 1,
//     c: 2,
//     d: 1,
//     e: 1,
//     f: 1,
//     g: 1,
//     h: 1,
//     i: 1,
//     j: 1,
//     k: 1,
//     l: 1,
//     m: 1,
//     n: 1
//   }




function myReduce(arr,logic,init){
        let acc = init
        let start= 0
        if(!init){
            acc= arr[0]
            start=1
        }
        for(let i=start ; i <arr.length; i++){
            acc= logic(acc,arr[i],i,arr)
        }
      return acc
}

const arr = [1,2,3,4,5]
 const sam= myReduce(arr,(acc,curr)=>{
   return acc + curr
 },0)

console.log(sam);



/* -------------flat map--------------- */

const stMap= [1,2,3,4,5]

    // const fltMpa= stMap.flatMap((x)=>[x * 3])
     //console.log(fltMpa);

    // [ 3, 6, 9, 12, 15 ]

// using reducer---

     const fltMpa= stMap.reduce((acc,curr)=>{
         return  acc.concat(curr * 3)
     },[])

 console.log(fltMpa); //[ 3, 6, 9, 12, 15 ]




/* ----------INSTEAD OF MAP() AND FILTER()-------------- */

 const nmbs= [2,3,4,5,6]

   //map by reduce
   const resMap = nmbs.reduce((acc,curr)=>{
     acc.push(curr * 2)
     return acc
   },[])

  console.log(resMap); // [ 4, 6, 8, 10, 12 ]
 // filter by reducer
  const filRed= nmbs.reduce((acc,curr)=>{
    if(curr % 2 === 1){
        acc.push(curr)
    }
    return acc
  },[])
  console.log(filRed); //[ 3, 5 ]


  // bigdata time consume less 

  const bigData =[]
  for(let i=0; i < 1000000; i++){
     bigData.push(i)
  }

  //chaining map and filter 
  console.time('reduce');
  bigData.reduce((acc,curr)=>{
    if(curr % 2 === 1){
        acc.push(curr * 2)
    }
    return acc
  },[])
  console.timeEnd('reduce');

  console.time('mapfil')
  bigData.map((v)=> v % 2 == 1).filter((f)=> f * 2)
  console.timeEnd('mapfil')


//   reduce: 30.972ms
// mapfil: 65.363ms


/* -------------Function compose-------------------------------------- */
const m = 5
const addNums= (m) => m + 10
const multNums= (m) => m * 3
const divNums = (m) => m/ 2


const resx=  divNums(multNums(addNums(5))) 
console.log(resx); //22.5

// pipe function
const pipe = (...funs) => (x) => funs.reduce((v,f)=> f(v),n) 
const resPipe = pipe(addNums,multNums,divNums)(n)
console.log(resPipe); //22.5


/* ------------markup list -------------------------------------------------------- */


const links=[
    {name:'facebook', url:'www.faceboook.com'},
    {name:'instagram', url:'www.instagram.com'},
    {name:'twitter',url:'www.twitter.ocm'}
]

let templete= `<ul>{{links}}</ul>`

const markuplist= links.reduce((acc,curr)=>{
    acc += `<li><a href='${curr.url}'> ${curr.name}</a></li>`
    return acc
},'')

templete = templete.replace('{{links}}', markuplist)
console.log(templete);
//
// <ul>
// <li><a href='www.faceboook.com'> facebook</a></li>
// <li><a href='www.instagram.com'> instagram</a></li>
// <li><a href='www.twitter.ocm'> twitter</a></li>
// </ul>




/* ---------combining data from differnt sources-------------- */

const courses=[
    {
        id:'c1',
        name:'computer programming',
        title:'hello programmers',
        price:333
    },
    {
        id:'j1',
        name:'javascritpt programming',
        title:'hello programmers',
        price:322
    },
    {
        id:'r1',
        name:'react programming',
        title:'hello programmers',
        price:444
    },
    {
        id:'p1',
        name:'pytho programming',
        title:'hello programmers',
        price:622
    },

]
const discount={
    c1: '15%',
    j1: '20%',
    r1:'30%'
}
 const updateCourseInfo= courses.reduce((acc,curr)=>{
    if(discount[curr.id]){
        curr.discount= discount[curr.id]

    }else{
        curr.discount= 0
    }
    acc.push(curr)
    return acc
 },[])

 console.log(updateCourseInfo);

//  [
//     {
//       id: 'c1',
//       name: 'computer programming',
//       title: 'hello programmers',
//       price: 333,
//       discount: '15%'
//     },
//     {
//       id: 'j1',
//       name: 'javascritpt programming',
//       title: 'hello programmers',
//       price: 322,
//       discount: '20%'
//     },
//     {
//       id: 'r1',
//       name: 'react programming',
//       title: 'hello programmers',
//       price: 444,
//       discount: '30%'
//     },
//     {
//       id: 'p1',
//       name: 'pytho programming',
//       title: 'hello programmers',
//       price: 622,
//       discount: 0
//     }
//   ]
 



// after the arrobj.js
// see the link https://www.programiz.com/javascript/library/array/reduce

// understand reduce by mojila
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//https://betterprogramming.pub/6-use-cases-for-reduce-in-javascript-49683842ebed



/* const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];  
let chkDup= [...new Set(names)]
console.log(chkDup); */