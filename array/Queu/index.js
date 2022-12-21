const Queue= require('./queu')

const queue= new Queue()

queue.enqueue('first tast');
queue.enqueue('second tast');
queue.enqueue('third tast');
queue.enqueue('fourth tast');
queue.enqueue('fifth tast');
queue.enqueue('sixi tast');


/* 
 queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue() */
 
/* queue.enqueue('first tast');
queue.enqueue('second tast');
queue.enqueue('third tast');
 */


queue.showQueue()
console.log(queue.next())
console.log(queue)
