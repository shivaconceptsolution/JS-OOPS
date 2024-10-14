class Student{
    acceptInfo(rno,name){
        this.rno=rno
        this.name=name
    }
    displayInfo()
    {
        console.log(`rno is ${this.rno}, name is ${this.name}`)
    }
}

let obj = new Student()
obj.acceptInfo(1001,"stu1")
obj.displayInfo()
let obj1 = new Student()
obj1.acceptInfo(1002,"stu2")
obj1.displayInfo()