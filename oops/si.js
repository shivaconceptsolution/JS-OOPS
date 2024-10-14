let si={
    calcinput:function(p,r,t){
      this.p=p;
      this.r=r;
      this.t=t
    },
    calcsi:function(){
        let res = (this.p*this.r*this.t)/100
        return `result is ${res}`
    }
}
si.calcinput(120000,2,2)
let obj = si.calcsi()
console.log(obj)

