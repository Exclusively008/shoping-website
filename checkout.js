// 👇 ADD THIS PART (UPAR E)

let summary = document.getElementById("order-summary");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";
let total = 0;

cart.forEach(item=>{
html += `<p>${item.name} x${item.qty} - ₹${item.price * item.qty}</p>`;
total += item.price * item.qty;
});

summary.innerHTML = html + `<h3>Total: ₹${total}</h3>`;

// 👇 TOMAR OLD CODE (unchanged)

document.getElementById("order-form").addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let address = document.getElementById("address").value;
let phone = document.getElementById("phone").value;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

db.collection("orders").add({
name:name,
address:address,
phone:phone,
cart:cart,
date: new Date().toLocaleString()
})
.then(()=>{

localStorage.removeItem("cart");

alert("Order Placed Successfully 🎉");

window.location.href = "index.html";

});

});
