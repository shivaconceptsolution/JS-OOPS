class Student{
    constructor() //without parameter/default
    {
        this.rno=1
        this.sname='xyz'
        this.branch='cs'
        this.fees=12000
       
    }
    displayStudent(){
        console.log(`rno is ${this.rno} 
            name is ${this.sname} 
            branch is ${this.branch} 
            and fees is ${this.fees}`)
    }

}
let obj = new Student()
obj.displayStudent()