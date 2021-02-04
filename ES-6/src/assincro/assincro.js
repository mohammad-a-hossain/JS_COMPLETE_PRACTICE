/* console.log('this is first log here')


console.log('this is last log here')

setTimeout(()=>{
console.log('i have called after 10 sec')
},10000)

setTimeout(()=>{
    console.log('i have calles after 5 sec')
},5000)


setTimeout(()=>{
    console.log('i have called after  0 sec')
})
 */
/* 
function sayName(name){
    let result
    setTimeout(() => {
        console.log('do print my name after 3 sec '+ name)
    }, 3000);
    return result
}
let pr = sayName('suhel')
console.log(pr) */





/* --------------HTTP REQUEST----------------------------------------------------- */

// const xhr= new XMLHttpRequest()

// xhr.open('get','http://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//            // console.log(xhr.response)
//            let users = JSON.parse(xhr.response)
//            console.log(users)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

// making a function for request

/* 
function getRequest(url, callback){
    const xhr =new XMLHttpRequest()
    xhr.open('get',url)
    xhr.onreadystatechange=function(e){
        if(xhr.readyState === 4){
            if(xhr.status ===200){
                let response =JSON.parse(xhr.response)
                callback(null, response)
            }else{
                callback(xhr.status,null)
            }
        }
    }
    xhr.send()
} */

function getRequest(url, callback){
    const xhr= new XMLHttpRequest()
    xhr.open('get',url)
    xhr.onreadystatechange =function(e){
        if(xhr.readyState === 4){
            if(xhr.status===200){
                let response = JSON.parse(xhr.response)
                callback(null, response)// here first error is null 
            }else{
                callback(xhr.status, null)// here no response so null is set,-- xhr.status is error
            }
        }
    }
    xhr.send()
}

/* getRequest('https://jsonplaceholder.typicode.com/users', (err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})  */

/* getRequest('https://jsonplaceholder.typicode.com/posts', (err,res)=>{
    if(err){
        console.log(err)
    }else{
        res.forEach(r => {
            console.log(r.id, r.title)
        });
    }
})
 */


 // P R O M I S E
/* 
 let pro = new Promise((resolve, reject)=>{
     setTimeout(resolve,5000,'hi promise')
 })
 //console.log(pro)
 let prop = new Promise((resolve, reject)=>{
    setTimeout(resolve,3000,'promise')
})
//console.log(prop)
prop.then((v)=>{
    console.log(v)
}) */

/* function ani_Versary(isTrue){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isTrue){
                resolve('happy aniversary')
            }else{
                reject( new Error('no aniversary now'))
            }
        },2000);
    })
          

}

ani_Versary(false)
            .then((reslv)=>{
                console.log(reslv)
            })
            .catch((err)=>{
                console.log(err)
            }) */



  //-----------------------------          // F E T C H api------------------------------------------------

       /*    const BASE_URL= 'https://jsonplaceholder.typicode.com'

     fetch(`${BASE_URL}/users/1`)
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             return Promise.resolve('do something')
         })
         .then(str=>{
             console.log(str)
             return Promise.resolve('here is another promise')
         })
         .then(another=>{console.log(another)
                return Promise.resolve('aaron is next promise') })
                .then(aaron=>{
                    console.log(aaron)
                })
         .catch(e=>{
             console.log(e)
         }) */



         // P R O M I S E  functionality

      /*    const delay = s => new Promise(resolve =>{
             setTimeout(resolve, s*1000)
         })
         delay(2).then(()=>console.log("something"))
         delay(10).then(()=>console.log("something here 10sec")) */

         // Promise.resolve() at first it automatic resoved the value

         // promise.all() it will print all value at a time 

         // Promise.race() it will print the first value from the time array which is resolved first






         /* ---------------------------------ASYNC ------AWAIT------------------------- */
      // a function is defined to resloved

           /*    async function aaron(){
                    return Promise.resolve('a resolved')
                  }
                       //console.log(aaron())
 */
                /*        
                       let p1= new Promise(resolve =>{
                                 setTimeout(resolve,5000,'aaron suhel')

                                
                       })

                      async function print(){
                         let v = await p1 
                          console.log('print something')
                         console.log(v)
                       
                       }
                       print()
 */

 // another example of async with fetch


/* 
   async  function myAsync(){
          let res = await fetch('https://jsonplaceholder.typicode.com/users')
          let data= await res.json()
          //console.log(data)
           let names= data.map(r => r.name)
              console.log(names) 
              let email = data.map(e => e.email)
              console.log(email)
         
     }
       myAsync()
         */

         
   async  function myAsync(){
       try{
        let res = await fetch('https://jsonplaceholder.typicode.com/user')
            let data= await res.json()
            //console.log(data)
            let names= data.map(r => r.name)
                console.log(names) 
                let email = data.map(e => e.email)
                console.log(email)
        
       }catch(e){
            console.log(e.message)
       }
   
}
 myAsync()
  