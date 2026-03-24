let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlist-container");

function renderWishlist(){

container.innerHTML = "";

wishlist.forEach((item,index)=>{

container.innerHTML += `
<div class="card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

<button onclick="addToCart('${item.name}',${item.price})">
Add to Cart
</button>

</div>
`;

});

}

function removeItem(index){

wishlist.splice(index,1);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

renderWishlist();

}

function addToCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to Cart 🛒");

}

renderWishlist();