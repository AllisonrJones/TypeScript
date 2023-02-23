export{}
//TALLEST MOuNTAIN
interface Mountain{
    name:string;
    height:number;
}

let collection:Mountain[]= [
    {
        name:"Kilimanjaro",
       height: 19341 
    },
    {
        name:"Everest",
        height:29029
    },
    {
        name:"Denali",
        height:20310
    }

];

function findNameOfTallestMountain(Names: Mountain[]):string{
    let TallestMountain:Mountain=Names[0];
    Names.forEach((n:Mountain)=>{
        if(n.height>TallestMountain.height)
        {
            TallestMountain=n;
        }
       
    }); 
    return TallestMountain.name;
};

let TallMnt:string=findNameOfTallestMountain(collection);
console.log(TallMnt);

//PRODUCTS
interface Product{
    name:String;
    price:Number;
};
let products:Product[]=[
{    name:"shampoo",
    price: 6.99
},
{
name:"popcorn",
price:2.99
},
{
    name:"coca-cola",
    price:2.49
},
{
    name:"goat cheese",
    price: 4.99
}
];

function calcAverageProductPrice(prodcucts):number{
  let result= 0;
    products.forEach((i)=>{
    let sum=i.price[0]+i.price[1]+i.price[2]+i.price[3];
   result= sum/products.length;
   return result;
}
   )};
   
    
   
  

//INVENTORY

interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[]=[
   {
     product: {
        name:"motor",
        price: 10.00
    },
    quantity: 10,
    },
    {
   product: {
        name:"sensor",
        price: 12.50
    },
    quantity: 4,
    },
    {
    product: {
        name:"LED",
        price: 1.00
    },
    quantity: 20
}
]
function calcInventoryValue(InventoryItem):number{
InventoryItem.forEach((i)=>{
    i.price*i.quantity;
    i++;
});
let total=calcInventoryValue(products);
return total;
console.log(total);
}

