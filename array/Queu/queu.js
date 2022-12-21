const MAXSIZE= [5]

class Queue {
   constructor(){
       this.front= 0
       this.rear =0
       this.queue= new Array(MAXSIZE)
   }

   enqueue(item){
        if(this.rear == MAXSIZE){
            console.log('queu is full')
            return false
        }
        this.queue[this.rear++] = item 
          
        return item

   }

   dequeue(){
        if(this.front === this.rear){
            console.log('queu is empty')
            return false
        }
        const item = this.queue[this.front]

        for(let i= this.front; i< this.rear -1; i++){
            this.queue[i] = this.queue[i + 1]
         
        }
            delete this.queue[--this.rear]
            return item
   }

    showQueue(){
        if(this.front === this.rear){
            console.log('queu is empty')
            return false
        }

        for(let i= this.front; i < this.rear; i++){
                 console.log(`display `, this.queue[i])  
        }
    }
    next(){
        if(this.front === this.rear){
            console.log('empty list')
            return 
        }
        return this.queue[this.front]

    }

}
module.exports = Queue