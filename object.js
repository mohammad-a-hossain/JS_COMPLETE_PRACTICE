// how to create an object------------------------ object literal and constructor---------------
var name={
    one:'suhel',
    two:'aaron'
}

console.log( typeof name)
console.log(name)

// how to assign an object-----------------------

name.three= 'manha'
console.log(name)

// how to create object----------------------------

var obj1= new Object()
obj1.a=10
console.log(obj1)

var obj2 =new Object()
obj2.b=100
console.log(obj2)
//----------------------------------------------------------------

// how to access to array by .DOT Notation----------------------------------------------

console.log(name.one)

// how to access to array by array Notation------------------------------------------------


var show ='two'
console.log(obj1['a'])
console.log(name[show])

// how to delete a property---------------------------------------------------------------------------

delete name.three
console.log(name) // here three property 'manha' id deleted


// ---------------------------object compare  ---------------------- for printing a 

    var aaron={
        a :'milk',
        b :'pamper',
        c :'candy'
    }
    var manha ={
        a :'milk',
        b :'pamper',
        c :'candy'
    }
  
        console.log(aaron === manha)// answer false because value of property memory location  are not same 
        if(aaron.a=== manha.a){
            console.log(true) // answer  true 
        }
        if(aaron.a=== manha.b){
            console.log(true)
        }else{                          // answer false
            console.log(false) 
        }
     //--------------JSON STRINGYFY---------------------
     //console.log(JSON.stringify(aaron))
     //console.log(JSON.stringify(manha))

     if(JSON.stringify(aaron)=== JSON.stringify(manha)){
         console.log(true)
     }else(                                 // answer  true 
         console.log(false)
     )


     // ----- OBJECT TRAVeARSE -------------------------------------- iterate------------------

     var azoa={
         x : 40,
         y : 50,
         z : 60
     }
     console.log('y' in azoa) // "IN" means y is inside azoa object? 
     console.log('o' in azoa)


     //--iterate---------------------------------
     for(var i in azoa){
         console.log(i) // x y z key will be printed
     }
     console.log(Object.keys(aaron))// this is a type of method to finding object keys

      for( var i in azoa){
         console.log(azoa[i]) // 40 50 60 ----------this will print the key values
     }

      console.log(Object.values(manha)) // this is a type of method to finding object values


    for(var i in azoa){
        console.log( i + ':-' + azoa[i])
    } 


    //--------method---------------------Object.values(manha)---Object.keys(aaron)-----entries-----+------------

    console.log(Object.entries(azoa))  // result like [ [ 'x', 40 ], [ 'y', 50 ], [ 'z', 60 ] ]

    //---------object assign ----------copying object---------------------------

    var azoa1 = Object.assign({}, azoa)

    

     azoa1.x =100 // new value assigned for azoa1
     azoa1.y =100
     azoa1.z =100


     console.log(azoa1)

    console.log(azoa)
                