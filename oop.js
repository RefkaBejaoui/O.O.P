// Create an object class for the product to store the properties for id, name and price of the product.
class Product {
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price ;
    }
}
// Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem extends Product{
    constructor(id,name,price, quantity) {
        super(id,name,price)
        this.quantity = quantity
    }
    TotalPrice() {
        let tP = this.quantity*this.price
        console.log(`the total price of ${this.name} is : ${this.quantity}*${this.price} = ${tP}`)
        // To the preceding object class, add the method to calculate the total price of the item.
    }
}

// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 

    class ShoppingCart {
        constructor() {
            this.items = [];
        }
// Add the methods : Get the total of items inside the cart
TotalItems(){
    console.log(Array.from(this.items).length)
    let length = constructor ([object1,object2,object3]).length
   console.log(`the total of items inside the cart is : ${length}`)
}
// method Add items
AddItems(newObject){
    this.newObject= newObject
}
// Remove items method
RemoveObject(Object){
    this.Object = Object
    //console.log(object1.name)
    console.log(delete this.Object)
}
}

// Create products
const object1 = new ShoppingCartItem(1,"spoon",1000,12)
const object2 = new ShoppingCartItem(2,"fork",2000,25)
const object3 = new ShoppingCartItem(3,"knife",3000,30)

// Create a shopping cart
const Arr = new ShoppingCart ([object1,object2,object3])

// object2.TotalPrice()
// console.log(object1)

// // Display the cart
// Arr.TotalItems()
console.log(Arr)

// // Add items to the cart
const object4 = new ShoppingCartItem(4,"plate",5400,10)
Arr.AddItems(object4)
console.log(Arr)
// // Remove an item from the cart
Arr.RemoveObject(object1.spoon)

// console.log(Arr.plate)
console.log(Arr)
 Arr.TotalItems()
 //object1.TotalPrice()





