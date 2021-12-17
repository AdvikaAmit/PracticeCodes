class Product
{
    private productId:number=0;
    private productName:string="";
    private unitPrice:number=0;
    private qty:number=0;

    constructor(productId:number)
    {
        this.productId = productId;
    }

    public get ProductId():number
    {
        return this.productId;
    }

    // public set ProductId(value:number)
    // {
    //     this.productId = value;
    // }

    public get ProductName():string
    {
        return this.productName;
    }

    public set ProductName(value:string)
    {
        this.productName = value;
    }

    public get UnitPrice():number
    {
        return this.unitPrice;
    }

    public set UnitPrice(value:number)
    {
        this.unitPrice = value;
    }

    public get Quantity():number
    {
        return this.qty;
    }

    public set Quantity(value:number)
    {
        this.qty = value;
    }    
}


let prdObj:Product = new Product(101);

prdObj.ProductName="Prod1";
prdObj.UnitPrice=1000;
prdObj.Quantity=1;

console.log("Product Id:" + prdObj.ProductId + ", Product Name : " + prdObj.ProductName + ", Qty :" + prdObj.Quantity + ", Price :" + prdObj.UnitPrice);


