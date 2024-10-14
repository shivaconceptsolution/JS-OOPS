class Rect{
   #a
   #b
   constructor(a,b){
    this.#a=a;
    this.#b=b;
   }
  get getA()  //read
   {
      return this.#a
   }
   get getB()
   {
    return this.#b;
   }
  
   set setA(a)  //write
   {
      if(a<0){
         console.log('number should be positive')
      }
      else{
       this.#a=a
      }
   }
    add()
   {
    console.log(this.#a+this.#b)
   }
}

let obj = new Rect(1000,-2)
obj.setA=-2  //to set the value
console.log(obj.getA) // to get the value
obj.add()