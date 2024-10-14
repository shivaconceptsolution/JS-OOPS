function SI(p,r,t){
    this.p=p
    this.r=r
    this.t=t
    this.siInfo=function(){
        let si = (this.p*this.r*this.t)/100
        console.log(`si is :${si} `)
    }
}
let obj = new SI(12000,2,2) //constructor based object
obj.siInfo()

