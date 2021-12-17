class Customer
{
    public id:number=0;
    public name:string="";    

    constructor(id:number=0,name:string="",public city:string="")
    {
        this.id=id;
        this.name=name;
        this.city = city;
    }

    public showDetails():void
    {
      console.log(`Customer Details   :  Id:  ${this.id} , Name : ${this.name}, City : ${this.city}`);
      
    }
}

let c1:Customer = new Customer();
//c1.showDetails();

let c2:Customer = new Customer(11356);
//c2.showDetails();

let c3:Customer = new Customer(11356,"Amit Shinde");
//c3.showDetails();

let c4:Customer = new Customer(11356,"Amit Shinde","Pune");
c4.showDetails();