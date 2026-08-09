// API URL — Sirf Yahan Change Karna Hoga!
const API_URL = 'http://localhost:8081';

// Typing Animation
const text = "Discover original handmade paintings crafted with passion and creativity.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

/* ADD TO CART — DATABASE MEIN SAVE HOGA */
function addToCart(name, price) {
    fetch(`${API_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            paintingName: name,
            price: price
        })
    })
        .then(res => res.json())
        .then(() => {
            alert(name + " added to cart 🛒");
        })
        .catch(err => {
            console.log('Error:', err);
            alert("Error! Console check karo!");
        });
}