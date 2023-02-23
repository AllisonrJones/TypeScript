"use strict";
exports.__esModule = true;
var collection = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(Names) {
    var TallestMountain = Names[0];
    Names.forEach(function (n) {
        if (n.height > TallestMountain.height) {
            TallestMountain = n;
        }
    });
    return TallestMountain.name;
}
;
var TallMnt = findNameOfTallestMountain(collection);
console.log(TallMnt);
;
var products = [
    { name: "shampoo",
        price: 6.99
    },
    {
        name: "popcorn",
        price: 2.99
    },
    {
        name: "coca-cola",
        price: 2.49
    },
    {
        name: "goat cheese",
        price: 4.99
    }
];
function calcAverageProductPrice(prodcucts) {
    var result = 0;
    products.forEach(function (i) {
        var sum = i.price[0] + i.price[1] + i.price[2] + i.price[3];
        result = sum / products.length;
        return result;
    });
}
;
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(InventoryItem) {
    InventoryItem.forEach(function (i) {
        i.price * i.quantity;
        i++;
    });
    var total = calcInventoryValue(products);
    return total;
    console.log(total);
}
