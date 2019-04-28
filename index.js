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
   cartArray.push(` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
 }
 
 if (cartArray.length === 1) {
 return 'In your cart, you have'.concat(cartArray)+'.'
 } else {
   return 'In your cart, you have'.concat(cartArray.slice(0,cartArray.length-1))+', and'.concat(cartArray.slice(cartArray.length-1))+'.'
 }
}

function total() {
  // write your code here
  let total = 0
  for (let i = 0; i<cart.length; i++) {
    var thisPrice = cart[i]['itemPrice']
    total += thisPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i<cart.length; i++) {
    if (cart[i]['itemName'] == item) {
      return cart.splice(i,1)
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
