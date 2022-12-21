const Stack = require('./stack.js')

let stack = new Stack()

/* stack.push('C')
stack.push('A')
stack.push('N')
stack.push('A')
stack.push('D')
stack.push('A')

stack.peek()
console.log(stack.list.item) */

let text= 'BANGLADESH'
let textList=[]
for(let i=0; i< text.length; i++){
    textList.push(text[i])

}


console.log(textList)

console.log(stack.peek())



 let textReverse= [ ]

while(textList.length){
    textReverse += textList.pop()
}
console.log(textReverse) 