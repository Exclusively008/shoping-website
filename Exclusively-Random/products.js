const products = [
{
name:"small chocolate bouquet with stickers (no retuen policy)",
price:179,
image:"images/b1.jpeg",
rating:4.5
},
{
name:"chocolate and polarid picturs with flower bouquet (no return policy)",
price:289,
image:"images/b2.jpeg",
rating:4.2
},
{
name:"chocolate flowers and customized polaroid picture bouquet (no return policy)",
price:289,
image:"images/b3.jpeg",
rating:4.6
},
{
name:"Bouquet with polarid pictue,flower,chocolate & many more(no return policy)",
price:699,
image:"images/b4.jpeg",
rating:4.8
},
{
name:"wollen sunflowers bouquet",
price:569,
image:"images/b5.jpeg",
rating:4.9
},
{
name:"chocolate & flowers bouquet(no return policy)",
price:169,
image:"images/b6.jpeg",
rating:4.6
},
{
name:"chocolate, stickers & flowers boquet(no return policy)",
price:239,
image:"images/b7.jpeg",
rating:4.3
},
{
name:"small bouquet gift (no return policy)",
price:149,
image:"images/b8.jpeg",
rating:4.0
},
{
name:"cusomized chocolate bouquet",
price:269,
image:"images/b9.jpeg",
rating:4.8
},
{
name:"customized flower bouquet with polarid pictures",
price:299,
image:"images/b10.jpeg",
rating:4.8
},
{
name:"new collection!!  Crochet colour themed gift hampers(no return policy)",
price:299,
image:"images/b11.jpeg",
rating:4.8
}
];

const container = document.getElementById("products");

products.forEach(product => {

container.innerHTML += `
<div class="card">

<div class="wishlist" onclick="toggleWishlist(this,'${product.name}',${product.price})">
🤍
</div>

<div class="card-image">
<img src="${product.image}">
</div>

<h3>${product.name}</h3>

<div class="rating">
⭐ ${product.rating}
</div>

<p>₹${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

<button class="view-btn"
onclick="openModal('${product.name}',${product.price},'${product.image}')">
Quick View
</button>

</div>
`;

});


// 🔍 SEARCH SYSTEM (must be after render)
document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card =>{

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});