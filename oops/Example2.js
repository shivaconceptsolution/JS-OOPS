function Student(firstname,lastname){
    this.firstname=firstname
    this.lastname=lastname
    this.displayInfo=function(){
        console.log(`firstname:${this.firstname} lastname is ${this.lastname}`)
    }
}
let obj = new Student("ravi","kumar") //constructor based object
obj.displayInfo()
let obj1 = new Student("ramesh","kumar")
obj1.displayInfo()
