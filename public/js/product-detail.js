var add_to_cart = document.getElementsByClassName("add-to-cart")[0];
var cart = JSON.parse(localStorage.getItem("cart")) || [];

if(add_to_cart) {
    add_to_cart.addEventListener("click", () => {   
        var product_detail_name = document.getElementsByClassName("product-detail-name")[0].innerHTML;
        var product_detail_image = document.getElementsByClassName("product-detail-img")[0].getAttribute("src");
        var product_detail_alt = document.getElementsByClassName("product-detail-img")[0].getAttribute("alt");
        var product_detail_price = document.getElementsByClassName("product-detail-price")[0].innerHTML.slice(2);
        var product_detail_quantity = document.getElementsByClassName("product-detail-quantity")[0].innerHTML;
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].product_alt == product_detail_alt) {
                cart[i].product_quantity += parseInt(product_detail_quantity);
                localStorage.setItem("cart", JSON.stringify(cart));
                return;
            }
        }
        cart.push({
            product_alt: product_detail_alt,
            product_image: product_detail_image,
            product_name: product_detail_name,
            product_price: parseFloat(product_detail_price),
            product_quantity: parseInt(product_detail_quantity)
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    });
}
