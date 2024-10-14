let student={
    rno:1001,
    name:"stu1",
    branch:"cs",
    fees:45000,
    stuinfo:function(){
        return `rno is ${this.rno} name is ${this.name}`
    }
}

let obj = Object.create(student)
console.log(obj.stuinfo())

