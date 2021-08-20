
function productPrice(product, option) {
    const productCostText = document.getElementById(product + '-cost')
    let memoryPrice = 0;
    let storagePrice = 0;
    let deliveryCharge = 0;
    if (product == "memory") {
        if (option == 8) {

            memoryPrice = productCostText.innerText = 0
        } else if (option == 16) {
            memoryPrice = 0
            memoryPrice = productCostText.innerText = 180
        }
    } else if (product == "storage") {
        if (option == 256) {
            storagePrice = productCostText.innerText = 0
        } else if (option == 512) {
            storagePrice = productCostText.innerText = 100
        } else if (option == 1) {
            storagePrice = productCostText.innerText = 180
        }

    } else if (product == "delivery") {

        if (option == 'free') {
            deliveryCharge = productCostText.innerText = 0
        }
        else if (option == "charge") {
            deliveryCharge = productCostText.innerText = 20
        }
    }

    totalCalculation()


}

//getting product price
function getPrice(product) {
    const productPrice = document.getElementById(product + '-cost')

    const productNumber = parseInt(productPrice.innerText)

    return productNumber

}


// total price calculation
function totalCalculation() {
    const totalValueText = document.getElementById('total-price')
    const checkOut = document.getElementById('check-outValue')
    const bestPrice = getPrice('best')
    const memoryPrice = getPrice('memory')
    const storagePrice = getPrice('storage')
    const deliveryPrice = getPrice('delivery')

    let calculatedValue = bestPrice + memoryPrice + storagePrice + deliveryPrice

    totalValueText.innerText = calculatedValue
    checkOut.innerText = calculatedValue
}

// Using Promo Code
function promoCode() {
    let promoInput = document.getElementById("promo-code")
    let promoText = promoInput.value

    let checkOut = document.getElementById('check-outValue')
    let checkOutValue = parseInt(checkOut.innerText)

    let promoUse = 0
    if (promoText = "stevekaku") {
        promoUse = checkOutValue * 0.2
        checkOut.innerText = checkOutValue - promoUse
        promoInput.value = " "
    }
}



document.getElementById('8GB-Memory').addEventListener('click', function () {
    productPrice('memory', 8)
})

document.getElementById('16GB-Memory').addEventListener('click', function () {

    productPrice('memory', 16)

})

document.getElementById('256GB-storage').addEventListener('click', function () {

    productPrice('storage', 256)

})

document.getElementById('512GB-storage').addEventListener('click', function () {

    productPrice('storage', 512)

})

document.getElementById('1TB-storage').addEventListener('click', function () {

    productPrice('storage', 1)

})

document.getElementById('free').addEventListener('click', function () {

    productPrice('delivery', "free")

})

document.getElementById('charge').addEventListener('click', function () {

    productPrice('delivery', "charge")

})

document.getElementById('promo-apply').addEventListener('click', function () {
    promoCode()
})