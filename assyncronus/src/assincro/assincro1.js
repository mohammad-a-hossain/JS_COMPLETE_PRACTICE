
console.log('here is assyncronus programming running no 1') // syncronised

setTimeout(()=> {
  
    console.log('here assyncronus programming running no 2') //assynceonus 1
}, 0)

setTimeout(()=>{
    console.log('now assyncronus programming running no 3') //assynceonus 3
}, 5000)

console.log('an assyncronus programming running no 4') // syncronised


setTimeout(()=>{
    console.log('lastly assyncronus programming running no 5') //assynceonus 2
},2000)



