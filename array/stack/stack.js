

const MAXSIZE=[20]

class Stack{
    constructor(){
        this.list = new Array(MAXSIZE)
        this.top=-1
    }

    push(item){

        if(this.item >= MAXSIZE){
            return 'stack overflow'
        }
        item = this.list[++this.top]
        return item
    }
    pop(){
        if(this.isEmpty()){
            return 'stack underflow'
        }
        let item = this.list[this.top]
         delete this.list[this.top]
         this.top--
         return item
    }
    peek(){
        if(this.isEmpty()){
            return 'stack underflow'
        }
        return this.list[this.top]
    }
    isEmpty(){
        return this.top < 0
    }

}
module.exports= Stack