let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🛒 UPDATE CART UI
function updateCart(){

localStorage.setItem("cart", JSON.stringify(cart));

let countEl = document.getElementById("cart-count");
if(countEl){
countEl.innerText = cart.length;
}

let items = document.getElementById("cart-items");
if(!items) return;

items.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

// 🔥 Ensure qty exists
if(!item.qty){
item.qty = 1;
}

// ✅ item total
let itemTotal = item.price * item.qty;
total += itemTotal;

// 🧾 UI
items.innerHTML += `
<div class="cart-item">
<span>${item.name} x${item.qty}</span>
<span>₹${itemTotal}</span>
<button onclick="removeItem(${index})">X</button>
</div>
`;

});

// 💰 Total update
let totalEl = document.getElementById("cart-total");
if(totalEl){
totalEl.innerText = total;
}

}

// ➕ ADD TO CART (SMART)
function addToCart(name,price){

let found = cart.find(item => item.name === name);

if(found){
found.qty += 1;
}else{
cart.push({name,price,qty:1});
}

updateCart();

}

// ❌ REMOVE ITEM
function removeItem(index){

cart.splice(index,1);
updateCart();

}

// 🧭 TOGGLE CART
function toggleCart(){

let drawer = document.getElementById("cart-drawer");
if(drawer){
drawer.classList.toggle("open");
}

}

// 🚀 INIT
updateCart();
