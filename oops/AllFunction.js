class Operation
{
      Add()  // without parameter, without return type
      {
        this.a=10
        this.b=20
        console.log(this.a+this.b)

      }
      
      Sub()  // without parameter, with return type
      {
        this.a=10
        this.b=20
        return this.a-this.b

      }
      Multi(a,b)  // with parameter, without return type
      {
        this.a=10
        this.b=20
        console.log(this.a*this.b)

      }


      Div(a,b)  // with parameter, with return type
      {
        this.a=10
        this.b=20
        return this.a/this.b

      }


}

let obj = new Operation()
obj.Add()
let c = obj.Sub()
console.log(c)
obj.Multi(10,2)
let d = obj.Div(10,2)
console.log(d)
