class Rectangle
{
     #width
     #height
     constructor(width,height){
        this.#width=width
        this.#height=height
     }
     getArea()
     {
        return this.#width*this.#height;
     }
}

let obj = new Rectangle(10,2)
let res = obj.getArea()
res.#width=20000
console.log(res)