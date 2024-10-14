class A{
     
        Add(a,b){
        this.a=a 
        this.b=b
        console.log(this.a+this.b)
      }
      
}
let o = new A() //object  // o instance
o.Add(10,2)
let o1 = new A()
o1.Add(100,20)