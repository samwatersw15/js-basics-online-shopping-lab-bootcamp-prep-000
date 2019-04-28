var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * Math.floor(100))
 let obj = {
   'itemName':item,
   'itemPrice':price
 }
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
 let a = cart.length
 if (a === 0) {
   return 'Your shopping cart is empty.'
 } 
 let cartArray = []
 for (let i = 0; i<cart.length; i++) {
   cartArray.push(` you have ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
 }
 let b = cartArray.length
 return 'In your cart,'.concat(cartArray.slice(0,b-1))+'and'.concat(cartArray.slice(b))+'.'
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
