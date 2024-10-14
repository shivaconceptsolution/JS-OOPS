class A{
   fun()
   {
    console.log("Father Property")
   }
}

class ASon extends A
{
  fun1()
  {
    console.log("Son Property")
  }
}
class ASon1 extends A
{
    fun2()
    {
        console.log("ASon1 Property")
    }
}
let obj = new ASon1()
obj.fun()
obj.fun1()
obj.fun2()