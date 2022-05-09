console.dir(localStorage)

//Setting up the values
const productsList = [ 
    {id:1, stock:3, img:"https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1328&q=80", name:"Coffee", description:"Lorem ipsun", price:"$800"},
    {id:2, stock:2, img:"https://images.unsplash.com/photo-1634612831148-03a8550e1d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80", name:"Sugar", description:"Lorem ipsum", price:"$200"},
    {id:3, stock:1, img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:"Tea", description:"Lorem ipsum", price:"$700"},
    {id:4, stock:2, img:"https://images.unsplash.com/photo-1523642456391-c597480dbdb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name:"Yerba", description:"Lorem ipsum", price:"$750"}
]
const cart = [];

const productDisplay = document.querySelector("#productDisplay");

const productDisplayCart = document.querySelector("#productDisplayCart");

let quantityBought = 1;

//Event listener
document.addEventListener('DOMContentLoaded', () => {
    productListDisplay();
})

//Functions

function productListDisplay(){
    for(let item of productsList){
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

        let buyButton = document.createElement("button");
        buyButton.innerText = "Buy";
        buyButton.onclick = () => { buyProduct(item.id)}     

        //Push to HTML
        productDisplay.appendChild(product);
        product.appendChild(imagen);
        product.appendChild(name);
        product.appendChild(description);
        product.appendChild(price);
        product.appendChild(buyButton);
    }
    console.log(productDisplay)   
}

function buyProduct(productId) {
    //finding the product by product Id
    const productAdded = productsList.find(item => item.id === productId);
    //check and update stock
    if (productAdded.stock <= 0) {
        alert("Not available")
    } else { 
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
        removeButton.onclick = () => { removeProduct(item.id)}
        //the cart needs an additional field for quantity
        let quantity = document.createElement("p");
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
}

function removeProduct(productId) {
    //find index position of the removed element and splice the array using that parameter
    const productRemoved = cart.findIndex(item => item.id === productId);
    cart.splice(productRemoved, 1);
    //reset the stock of such product in the original array
    const productRestored = productsList.find(item => item.id === productId);
    productRestored.stock += 1;
    //show the cart
    showCart(cart);
}




    