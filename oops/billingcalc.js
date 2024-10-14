class Bill{
    Accept(price,qty,itemname){
        this.price=price
        this.qty=qty
        this.itemname=itemname
    }
    TotalBill()
    {
        this.total = this.price*this.qty
    }
    DisplayBill()
    {
        console.log(`itemname ${this.itemname} qty is ${this.qty} bill amount is ${this.total}`)
    }
}

class BillNew extends Bill{
   
    TotalBill()
    {
        super.TotalBill()
        super.DisplayBill()
        this.total = this.price*this.qty
        this.total+=this.total*0.18 
    }
 
}

let obj = new Bill()
obj.Accept(800,4,'pendrive')
obj.TotalBill()
obj.DisplayBill()
let obj1 = new BillNew()
obj1.Accept(1200,4,'pendrive')
obj1.TotalBill()
obj1.DisplayBill()    
    