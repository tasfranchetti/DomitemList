//Setting up the values
const productsList = [ 
    {id:1, stock:10, img:"https://placekitten.com/400/300", name:"Example", description:"This is an example", price:"400"},
]

let productDisplay = document.querySelector('#productDisplay');
const form = document.querySelector('#addProduct form');
//must specify "form" and not use the ID from the form

//Product constructor
class Product {
    constructor(stock, img, name, description, price){
        this.id = productsList.length + 1;
        this.stock = stock;
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

//Event listener
form.addEventListener('submit', addProduct);
productDisplay.addEventListener('click', removeProduct);

//Functions
retreiveStorage()

function productListCreator(name, id, price, img, description, stock){

    let product = document.createElement("div");
    product.setAttribute("class", "max-w-sm rounded overflow-hidden shadow-lg");
    let textSection = document.createElement("div");
    product.setAttribute("class", "px-6 py-4");
    let productName = document.createElement("h4");
    productName.innerText = name; 
    product.setAttribute("class", "font-bold text-xl mb-2");
    let productId = document.createElement("p");
    productId.innerText = `ID: ${id}`;
    product.setAttribute("class", "text-gray-700 text-base");
    let productPrice = document.createElement("p");
    productPrice.innerText = `$${price}`;
    product.setAttribute("class", "text-gray-700 text-base");
    let productImg = document.createElement("img");
    productImg.className = "w-full";
    productImg.setAttribute("src", img);
    let productDescription = document.createElement("p");
    productDescription.innerText = description;
    product.setAttribute("class", "text-gray-700 text-base");
    let productStock = document.createElement("p");
    productStock.innerText = `Stock: ${stock}`;
    product.setAttribute("class", "text-gray-700 text-base");
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";  
    removeButton.setAttribute("id", "removeItem"); 

    //Push to HTML
    product.appendChild(productImg);
    product.appendChild(textSection);
    textSection.appendChild(productName);
    textSection.appendChild(productDescription);
    textSection.appendChild(productPrice);
    textSection.appendChild(productStock);
    textSection.appendChild(productId);
    textSection.appendChild(removeButton);
    productDisplay.appendChild(product);
}

function addProduct(evt){
    evt.preventDefault();

    let name = document.querySelector('#input-name').value;
    let description = document.querySelector('#input-description').value;
    let price = parseInt(document.querySelector('#input-price').value);
    let stock = parseInt(document.querySelector('#input-stock').value);
    let img = document.querySelector('#input-img').value;
   
    //Error handler
    (!name || !description || !img || !price || !stock) ? alert('All fields must be complete to proceed. Check that price and stock are both complete with numeric input only') : productsList.push(new Product(stock, img, name, description, price)); 

    productDisplay.innerHTML = "";

    updateStorage(productsList);
    retreiveStorage();

    form.reset();
    
    
}

function removeProduct(evt){
    let removedProduct = evt.target.parentElement;
    let removedProductName = evt.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText;

    confirm(`Are you sure you want to delete the product ${removedProductName}?`) && productDisplay.removeChild(removedProduct);

    const index = productsList.findIndex(product => {
        return product.name === removedProductName;
    });
    productsList.splice(index, 1);
    console.log(productsList);
    
    updateStorage(productsList);
    retreiveStorage();
}

//Storage
const store = (key, value) => {localStorage.setItem(key, value)}

function updateStorage(productsList){
    localStorage.removeItem("storedProducts");
    store("storedProducts", JSON.stringify(productsList));
}

function retreiveStorage() {
    let storedProductsList = JSON.parse(localStorage.getItem("storedProducts"));
    console.log(productsList)
    console.log(storedProductsList)

    productDisplay.innerHTML = "";

    if ((storedProductsList === null) || (storedProductsList.length === 0)) {
        for (const product of productsList) {
            productListCreator(product.name, product.id, product.price, product.img, product.description, product.stock);
        } 
    } else {
        for (const product of storedProductsList) {
            productListCreator(product.name, product.id, product.price, product.img, product.description, product.stock);
        } 
    }

}

//localStorage.clear() 