// working array crud operation for now then go to object operation 
const { uuid } = require('uuidv4');
//const { v4 } =require('uuidv4')
const students=[
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
        name:'abu',
        email:'abu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260',
        name:'kbu',
        email:'kbu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
        name:'rabu',
        email:'rabu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
        name:'labu',
        email:'labu@gmail.com',

    },
    {
        id:'1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
        name:'sabu',
        email:'sabu@gmail.com',

    }
]

//onsole.log(uuid());

// create a new student : interms of push 0(1) update 0(1) delete > splice o(n) filter 0(n)
students.push({
    id:uuid(),
    name:'jamal',
    email:'jamal@gmail.com'
})
//console.log(students);


// update a student 

const updateId='1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262'

const updateData={
    name:'jony',
    email:'jony@gmail.com'
}

// now find the index of which id will updated

const getIndexTo= students.findIndex((item)=> item.id=== updateId)

students[getIndexTo]={
    ...students[getIndexTo],
    ...updateData
}

//console.log(students);

/* result of update 

[
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260',
    name: 'kbu',
    email: 'kbu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  {
    id: '38d6b1a7-9984-4686-ad3b-8bd78da3b534',
    name: 'jamal',
    email: 'jamal@gmail.com'
  }
]

*/




// now delete operation 
const needDelteId=  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76260'

const dleteIndex= students.findIndex((item) =>item.id === needDelteId )

students.splice(dleteIndex,1)
//console.log(students);

/* 
result of delete 

[
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  }
]

*/




// array traverse >
// forEach , map , reduce, every, filter, some, find ,findIndex

// a way of traverse---------------------
/*
 for(let i=0; i < students.length; i++){
      console.log(students[i].name);
}  

abu
jony
labu
sabu
jamal
 */

// anotehre way traverse ================

/*   for(let i in students){
    console.log(students[i].email);
  }
  abu@gmail.com
jony@gmail.com
labu@gmail.com
sabu@gmail.com
jamal@gmail.com
 */

//anotehr way -------------------
/* for(let student of students){
    console.log(student);
} */






//  OBJECT OPERATION -------------------------------------------------------

/* * IN OBJECT KEY MUST BE UNIQUE  */

const users={
    
    '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
          name: 'abu',
          email: 'abu@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
          name: 'jony',
          email: 'jony@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
          name: 'labu',
          email: 'labu@gmail.com'
        },
        '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264':{
          id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
          name: 'sabu',
          email: 'sabu@gmail.com'
        },
        '5010cca5-03a0-4124-8425-25e6732f690b':{
          id: '5010cca5-03a0-4124-8425-25e6732f690b',
          name: 'jamal',
          email: 'jamal@gmail.com'
        },
      
      
}

// operation for object ---------------------------------------------



 // *1 create an object for user



 const user={
    id:uuid(),
    name:'aaron',
    email:'aaron@gmail.com'
 }
 
 users[user.id]=user // order of 1 O(1)
/* 
result -- a new data created 
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'sabu',
    email: 'sabu@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  'd9b0363e-2a2a-4a08-83e1-f18b3e461be1': {
    id: 'd9b0363e-2a2a-4a08-83e1-f18b3e461be1',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}
*/


// now update a data in obj timecomplexity=o(1)

const willupdateId= '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264'

const willupdateData={
    name:'manha',email:'manha@gmail.com'
}

users[willupdateId] ={
    ...users[willupdateId],
    ...willupdateData
} 

/* 
result of updata
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268',
    name: 'labu',
    email: 'labu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'manha',
    email: 'manha@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  'f026c41b-a91c-4465-8ada-69ce14b2ed76': {
    id: 'f026c41b-a91c-4465-8ada-69ce14b2ed76',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}

*/



// now delete operation 




const deleteIndexId= '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76268'

delete users[deleteIndexId] // complexity O(1)


/* 
result 
{
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76267',
    name: 'abu',
    email: 'abu@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76262',
    name: 'jony',
    email: 'jony@gmail.com'
  },
  '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264': {
    id: '1d28ae4c-c85b-4bb5-8c9b-ea34e8e76264',
    name: 'manha',
    email: 'manha@gmail.com'
  },
  '5010cca5-03a0-4124-8425-25e6732f690b': {
    id: '5010cca5-03a0-4124-8425-25e6732f690b',
    name: 'jamal',
    email: 'jamal@gmail.com'
  },
  '036f2263-db96-4ef5-83f1-28432ddb8046': {
    id: '036f2263-db96-4ef5-83f1-28432ddb8046',
    name: 'aaron',
    email: 'aaron@gmail.com'
  }
}
*/




// get a data

users['5010cca5-03a0-4124-8425-25e6732f690b']
console.log(users['5010cca5-03a0-4124-8425-25e6732f690b']);

/* 
 result 
{
  id: '5010cca5-03a0-4124-8425-25e6732f690b',
  name: 'jamal',
  email: 'jamal@gmail.com'
}

*/



// traversing an object 
/* for(let key in users){
    console.log(users[key].email);
}
abu@gmail.com
jony@gmail.com
manha@gmail.com
jamal@gmail.com
aaron@gmail.com
 */

for(let key in users){
    console.log(key);
}



console.log(users);
//console.log('leng',users.length);




