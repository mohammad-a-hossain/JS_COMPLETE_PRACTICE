

function addNumner(a,b){
   let result = a+b
    setTimeout(() => {
       console.log(result)
    }, 3000)
    return result
}
let add = addNumner(100,100) // stored in a var
console.log(add)


//*****           assyncronus functions() should not store in a variable                         */



function myName(name){
    let result
    setTimeout(() => {
        result= name
        console.log('i called but....')
    }, 5000)
    return result
}
let output= myName('suhel')// stored in a var thats why it output undefined
console.log(output)





console.log('hi this is a task')

setTimeout(()=>
{
    console.log('hi this is b task')

},0)


console.log('hi this is c task')
