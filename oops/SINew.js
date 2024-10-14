class SINew
{
    accept(p,r,t)
    {
        this.p=p
        this.r=r
        this.t=t
    }
    display()
    {
        let res = (this.p*this.r*this.t)/100
        console.log(res)
    }
}
let obj = new SINew()
obj.accept(12000,2,2)
obj.display()