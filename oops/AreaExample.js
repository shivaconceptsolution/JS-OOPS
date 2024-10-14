class Circle{
    Accept(a){
        this.a=a
    }
    CircleArea()
    {
        this.area = 3.14*this.a*this.a
    }
    Display(s)
    {
        console.log(`area of ${s} is ${this.area}`)
    }
}
class Rectangle extends Circle
{
    Accept1(b){
      this.b=b
    }
    RectangleArea()
    {
        this.area = this.a*this.b
    }
}
class Triangle extends Rectangle
{
    TriangleArea()
    {
        this.area = (this.a*this.b)/2
    }
}

let obj = new Triangle()
obj.Accept(10)
obj.Accept1(2)
obj.TriangleArea()
obj.Display("Triangle")

let obj1 = new Circle()
obj1.Accept(10)
obj1.CircleArea()
obj1.Display("Circle")

let obj2 = new Rectangle()
obj2.Accept(10)
obj2.Accept1(2)
obj.RectangleArea()
obj.Display("Rectangle")