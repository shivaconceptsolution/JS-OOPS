class Addition{
    Accept(a,b){
        this.a=a
        this.b=b
    }
    AddLogic(){
        this.c = this.a+this.b
    }

    Display(){
        console.log(this.c)
    }

}

class Substraction extends Addition
{
    SubLogic()
    {
        this.c = this.a-this.b
    }
}

class Multiplication extends Addition
{
    MultiLogic()
    {
        this.c = this.a*this.b
    }
}
class Divison extends Addition
{
    DivLogic()
    {
        this.c = this.a/this.b
    }
}

let obj = new Divison()
obj.Accept(10,2)
obj.DivLogic()
obj.Display()

let obj1 = new Multiplication()
obj1.Accept(3,2)
obj1.MultiLogic()
obj1.Display()