// ❤️ WISHLIST
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(el,name,price){

let found = wishlist.find(item => item.name === name);

if(found){
wishlist = wishlist.filter(item => item.name !== name);
el.classList.remove("active");
el.innerText = "🤍";
}else{
wishlist.push({name,price});
el.classList.add("active");
el.innerText = "❤️";
}

localStorage.setItem("wishlist", JSON.stringify(wishlist));

}


// 🔥 MODAL
function openModal(name,price,image){

document.getElementById("product-modal").style.display="flex";

document.getElementById("modal-name").innerText=name;
document.getElementById("modal-price").innerText="₹"+price;
document.getElementById("modal-image").src=image;

document.getElementById("modal-add").onclick=function(){
addToCart(name,price);
};

}

function closeModal(){
document.getElementById("product-modal").style.display="none";
}
