// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

//Open Cart
cartIcon.addEventListener('click', () => {
    cart.classList.add('active')
})

// Close Cart
closeCart.addEventListener('click', () => {
    cart.classList.remove('active')
})

// Cart Working
if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

// Making Functio READY
function ready() {

    // Remove Items from cart
    let removeCartButtons = document.querySelector('.cart-remove')

    for (let i = 0;i < removeCartButtons.length; i++) {

        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    // Quantity change
    let quantityInputs = document.getElementsByClassName('cart-quantity')
     for (let i = 0;i < quantityInputs.length; i++) {

        let input = quantityInputs[i]
        input.addEventListener("change", quantityChanged)
     }
}

// Quantity change Function
function quantityChanged() {
    
    let input = event.target
    if (NaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}


// Remove Items from cart Function
function removeCartItem() {

    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal()
}

//Update Total
function updateTotal() {

    let cartContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = cartContent.getElementsByClassName('cart-box')
    let total = 0

    for (let i = 0;i < cartBoxes.length; i++) {

        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        total = total + (price * quantity)

        document.getElementsByClassName('total-price')[0].innerText = "$", + total
    }
}
