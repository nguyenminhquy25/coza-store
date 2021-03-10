var cart = JSON.parse(localStorage.getItem("cart")) || [];
var sub_total = document.getElementsByClassName("sub-total")[0];
var total = document.getElementsByClassName("total")[0];
var cart_body = document.getElementsByClassName("cart-body")[0];

if(cart_body) {
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].product_quantity > 0) {
            var tr_tag = document.createElement("tr");
            var th_tag_1 = document.createElement("th");
            var th_tag_2 = document.createElement("th");
            var th_tag_3 = document.createElement("th");
            var th_tag_4 = document.createElement("th");
            var img_tag = document.createElement("img");
            img_tag.src = cart[i].product_image;
            img_tag.alt = cart[i].product_alt
            var span_tag = document.createElement("span");
            span_tag.innerHTML = cart[i].product_name;
            var quantity_div = document.createElement("div");
            var change_quantity_1 = document.createElement("div");
            var change_quantity_2 = document.createElement("div");
            var product_quantity = document.createElement("div");
            quantity_div.classList.add("quantity-div");
            change_quantity_1.classList.add("change-quantity");
            change_quantity_1.classList.add("sub-quantity");
            change_quantity_2.classList.add("change-quantity");
            change_quantity_2.classList.add("add-quantity")
            product_quantity.classList.add("product-quantity");
            change_quantity_1.innerHTML = "-";
            change_quantity_2.innerHTML = "+";
            product_quantity.innerHTML = cart[i].product_quantity;
            th_tag_4.innerHTML = "$ " + (cart[i].product_price * cart[i].product_quantity).toFixed(2);
            th_tag_1.appendChild(img_tag);
            th_tag_1.appendChild(span_tag);
            th_tag_2.innerHTML = "$ " + cart[i].product_price;
            quantity_div.appendChild(change_quantity_1);
            quantity_div.appendChild(product_quantity);
            quantity_div.appendChild(change_quantity_2);
            th_tag_3.appendChild(quantity_div);
            tr_tag.appendChild(th_tag_1);
            tr_tag.appendChild(th_tag_2);
            tr_tag.appendChild(th_tag_3);
            tr_tag.appendChild(th_tag_4);
            cart_body.appendChild(tr_tag);
        } 
    }
}

var sub_quantities = document.getElementsByClassName("sub-quantity");
var add_quantities = document.getElementsByClassName("add-quantity");
var product_quantities = document.getElementsByClassName("product-quantity");

for(let i = 0; i < sub_quantities.length; i++) {
    sub_quantities[i].addEventListener("click", () => {
        var quantity = parseInt(product_quantities[i].innerHTML);
        quantity = (quantity == 0 ? 0 : quantity - 1); 
        product_quantities[i].innerHTML = quantity;
    });
}
for(let i = 0; i < add_quantities.length; i++) {
    add_quantities[i].addEventListener("click", () => {
        var quantity = parseInt(product_quantities[i].innerHTML);
        product_quantities[i].innerHTML = ++quantity;
    });
}

var sub_total = document.getElementsByClassName("sub-total")[0];
var total = document.getElementsByClassName("total")[0];

if(total) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var sum = 0;
    for(let i = 0; i < cart.length; i++) {
        sum += cart[i].product_price * cart[i].product_quantity;
    }
    sub_total.innerHTML = sum.toFixed(2);
    total.innerHTML = sum.toFixed(2);
}

var update_cart = document.getElementsByClassName("update-cart")[0];
if(update_cart) {
    update_cart.addEventListener("click", () => {
        var table = document.getElementsByClassName("cart-table")[0];
        var new_product_quantity = table.getElementsByClassName("product-quantity");
        var cart = JSON.parse(localStorage.getItem("cart"));
        var new_cart = [];
        for(let i = 0; i < new_product_quantity.length; i++) {
            cart[i].product_quantity = parseInt(new_product_quantity[i].innerHTML);
            if(cart[i].product_quantity > 0) {
                new_cart.push(cart[i]);
            }
        }
        localStorage.setItem("cart", JSON.stringify(new_cart));
        window.location.reload();
    });
}

var purchase_close = document.getElementsByClassName("purchase-close")[0];

if(purchase_close) {
    purchase_close.addEventListener("click", () => {
        localStorage.setItem("cart", JSON.stringify([]));
        window.location.reload();
    });
}



