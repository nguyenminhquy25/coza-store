var product_like_buttons = document.getElementsByClassName("product-like");
var product_images = document.getElementsByClassName("product-image");
var product_names = document.getElementsByClassName("product-name");
var product_prices = document.getElementsByClassName("product-price");

for(let i = 0; i < product_like_buttons.length; i++) {
    product_like_buttons[i].addEventListener("click", () => {
        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        for(let j = 0; j < cart.length; j++) {
            if(cart[j].product_alt == product_images[i].getAttribute("alt")) {
                cart[j].product_quantity++;
                localStorage.setItem("cart", JSON.stringify(cart));
                return;
            }
        }
        cart.push({
            product_image: product_images[i].getAttribute("src"),
            product_alt: product_images[i].getAttribute("alt"),
            product_price: parseFloat(product_prices[i].innerHTML.slice(7)),
            product_quantity: 1,
            product_name: product_names[i].innerHTML
        });
        localStorage.setItem("cart", JSON.stringify(cart));  
    });
}