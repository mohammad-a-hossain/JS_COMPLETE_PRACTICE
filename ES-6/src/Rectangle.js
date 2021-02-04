
import Shape from './shape'
class Ractengle extends Shape{
 
     constructor(width, height){
             super()
         this.width =width
         this.height=height
     }
     
     calCulate(){
         return this.width * this.height
     }
 }

 export default Ractengle 