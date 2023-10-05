const shoppingList = [
    {
        id: 1,
        name: "HP laptop",
        price: 480000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStsflt0vOhuh9CmQRcJEVLry4JoT3x6Ft41KXOuau&s"
    },
    {
        id: 2,
        name: "Ausu laptop",
        price: 500000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbFIX2SnCUMpd8QrJ1LipXwixtJbTswlwYjMsDpe4&s",
    },
    {
        id: 3,
        name:"Lenovo laptop",
        price: 780000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Lih9AsP6zSuIrKVJx5yL7rwEVkgjIWd2o7cVOo70-Q&s"
    },
    {
        id: 4,
        name: "Dell laptop",
        price: 9080000,
        quantity: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxehXm8r9CmvdtwafGNZFVNuts_xBoCMG_GYqzHxzu&s"
    },
];

//select shopping cart container
const shoppingContainer = document.getElementById('checkoutContainer')
console.log(shoppingContainer)

function displayProduct(shoppingList) {
    //loop through shopping cart items
for (const product of shoppingList) {
    const productContainer = document.createElement('div')
    productContainer.setAttribute('class', 'card')

    //create product image
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image)
    productImage.setAttribute("alt", product.image)

//add product image to product container
   productContainer.appendChild(productImage);

   //add productContainer to shopping container
   shoppingContainer.appendChild(productContainer)

   //create product info container
    const productInfo = document.createElement('div')
    productInfo.setAttribute('class', 'productInfo')
    const topCon = document.createElement('div')
    topCon.setAttribute('class', 'topCon');

    //create product name and delete button
    const productName = document.createElement('h3')
    productName.innerHTML = product.name
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "delete"
    deleteBtn.classList.add(`delete-${product.id}`)
    deleteBtn.addEventListener("click", function(e){
        deleteItem(product.id)
    })

    //add product name and delete Button to topCon
    topCon.appendChild(productName)
    topCon.appendChild(deleteBtn)

    //add topCon to product info container
    productInfo.appendChild(topCon)

    //add product info container to product container
    productContainer.appendChild(productInfo)

    //cerate product price
    const productPrice = document.createElement('p')
    productPrice.setAttribute('class', 'price')
    productPrice.innerHTML = `price: ${product.price}`;

    //add product price to product info container
    productInfo. appendChild(productPrice);

    //create button container
    const btnContainer = document.createElement('div')
    btnContainer.setAttribute('class', 'btnCon')

    //craete increment and decrement button
    const increment = document.createElement('button')
    increment.innerHTML = "+"
    increment.classList.add("incrementBtn")
   
    const decrement = document.createElement('button')
    decrement.innerHTML = "-"

    //create quantity display
    const quantity = document.createElement('p')
    quantity.innerHTML = product.quantity
    increment.addEventListener("click", function(e){
        if (product.quantity <3) {
            product.quantity += 1
        quantity.innerHTML = product.quantity
        productPrice.innerHTML = `price: ${product.price * product.quantity}`;

        }
        })
    decrement.addEventListener("click",function(e){
       if (product.quantity >=1) {
        product.quantity -=1
        quantity.innerHTML = product.quantity
        productPrice.innerHTML = `price: ${product.price * product.quantity}`;

       }
    } )

    //add increment, decrement and quantity to btn container
    btnContainer.appendChild(increment)
    btnContainer.appendChild(quantity)
    btnContainer.appendChild(decrement)

    //add btn container to product info container
    productInfo.appendChild(btnContainer)

    //add product container to shopping container
    shoppingContainer.appendChild(productContainer)
}
}
displayProduct(shoppingList)
let newShoppingList = shoppingList
function deleteItem(id) {
    if (!confirm("Are you sure you want to delete?(Yes or No)")) {
       return  
    }
    shoppingContainer.innerHTML = ""
    newShoppingList = newShoppingList.filter((item) => item.id !== id)
   displayProduct(newShoppingList)
   
}
