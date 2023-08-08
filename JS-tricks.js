// tricks coding with lws


// 1. swapping an array 

//let array = [1,2,3,4,5]

//     const temp = array[0]
//    array[0] = array[4]
//    array[4] = temp
 // console.log(array)

 // swapping by array destructuring 
 //let array = [1,2,3,4,5]
// [array[0], array[4]] = [array[4], array[0]]
// console.log( array);

//another way 
let a =4 ;
let b =5;
[a,b] = [b,a];
console.log(a,b);



// 2. destructuring as alias

const language={
    name:'javascript',
    founded:1995,
    founder:'Brendon eich'
}

const { name:lang, founded:established} = language
console.log(lang,established);




// 3. remove duplicate Elemen in a array using set 

let numArr= [1,22,3,4,5,6,75,4,3,2,1]
let strArr= ['abu', 'sabu','abu','labu']

console.log([... new Set(numArr)] )
console.log([... new Set(strArr)] )


//4. compare two array by value

const hasSameValue = (a,b) =>{
    return a.length === b.length && a.every((v,i) => v=== b[i])
}

 const res= hasSameValue([1,2,4],[1,2,'3'])
 console.log(res);//falsee

 // 5.comma operator
 let x=1
 x= (x++,x)
 console.log(x);


 //6. remove falsy value from an array
 let valuArry= [null,'apple',false, 333, undefined, 'sama', NaN, '33',0,'']
 let ress= valuArry.filter(Boolean)
 console.log(ress);


 //7. convert any value to boolean

 console.log(!!'suhel'); // true
 console.log(!! 0);
 console.log(!! undefined);
 console.log(!! null);




 //8.how to make flat array from multidimentional array 

 let smile= [ 'fa',['fi','fu'],[ [434, 44], null, undefined, true ],777]
let res2 = smile.flat(Infinity)
console.log(res2);


 // 9. how to replace a string in a sentence
 const qouto='India misfiring batters in the spotlight as West Indies eye series win' 

 const res4= qouto.replace(/India/g,"Bangladesh")
  console.log(res4);



  //10. what is output ?

//   [] + [] = ? black

//   {} + [] = ? Object Object

//   true + 5 = ? 6 // boolean true =1
  
  
  function anything(){ return 'Bangladesh' } 
  const res6= anything `usa` 
  console.log(res6);

  const m = 'constructor'
  console.log(m[m](88)); //m[m]= String(88)
   // 88

    
   console.log(0.1 + 0.2);//0.30000000000000004

   console.log(('objective').__proto__); // {}
   console.log(('objective').__proto__.__proto__); // [Object:null prototype] {}
   console.log(('saban').__proto__.__proto__.__proto__);  // null 





   const myFun= function(){
    return [].slice.call(arguments).sort()
   }

   console.log(myFun(2,4,5,7,8)) //[ 2, 4, 5, 7, 8 ]

   
   // 11 . how to count duplicate item in a array ?

   const listArr= ['a','c','5','d','x','a','c','3']

   //useing map fun
   function countDupl(data){
    const count={}

    data.map((d)=> {
      count[d] = (count[d] || 0) +1
    })

    return count
   }

   console.log(countDupl(listArr));
   //{ '3': 1, '5': 1, a: 2, c: 2, d: 1, x: 1 }




// 12. how to reverse a word or string

const str22= " i love Bangladesh"

function strReverse(data){

  const dataArry= data.split(' ') 

  const result = dataArry.map((d) =>{
    return d.split('').reverse().join('')
  })

  return result.join(' ')
}

console.log(strReverse(str22)); // i evol hsedalgnaB






// 13. set word length wise ascending order

const str1= 'java is not a javaScript language in programming'

function strToSort(data){

  const dataStrOne= data.split(" ")
  const resultt= dataStrOne.sort((a,b)=>{
     return  a.length - b.length
  })

  return resultt.join(" ")
}

console.log(strToSort(str1)); // a is in not java language javaScript programming

