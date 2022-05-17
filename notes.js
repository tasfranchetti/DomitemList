/*
function buyProduct(productId) {
    //finding the product by product Id in the list of products
    const productAdded = productsList.find(item => item.id === productId);
    const productCheck = cart.find(item => item.id === productId);
    //check and update stock
    if (productAdded.stock === 0) {
        alert("Not available");
    }
    ///////////----------------
    else if (productAdded === productCheck){
        //decrease stock
        productAdded.stock -= 1;
        //show the cart
        showCart(cart);
    }
    ///////////----------------
    else { 
        //decrease stock
        productAdded.stock -= 1;
        //add product to cart
        cart.push(productAdded);
        //show the cart
        showCart(cart);
    }
}

function showCart(){
    
    productDisplayCart.innerHTML = "";

    cart.forEach(item => {
        
        //creating the elements
        let product = document.createElement("div");
        product.setAttribute("class", "productBox");

        let name = document.createElement("h4");
        name.innerText = item.name;

        let price = document.createElement("p");
        price.innerText = item.price;

        let imagen = document.createElement("img");
        imagen.className = "img-setup";
        imagen.setAttribute("src", item.img);

        let description = document.createElement("p");
        description.innerText = item.description;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.onclick = () => {removeProduct(item.id)}

        //the cart needs an additional field for quantity
        let quantity = document.createElement("p");
        let quantityBought = 1;
        quantity.innerText = `Amount: ${quantityBought}`; 

        //Push to HTML and check for duplicates
        productDisplayCart.appendChild(product);
        product.appendChild(imagen);
        product.appendChild(name);
        product.appendChild(description);
        product.appendChild(price);
        product.appendChild(quantity);
        product.appendChild(removeButton);
    });

    console.log(productsList);
    console.log(cart);  
}

function removeProduct(productId) {
    //find index position of the removed element and splice the array using that parameter
    const productRemoved = cart.findIndex(item => item.id === productId);
    cart.splice(productRemoved, 1);
    //reset the stock of such product in the original array
    const productRestored = productsList.find(item => item.id === productId);
    productRestored.stock += quantityBought;
    //show the cart
    showCart(cart);
}

*/