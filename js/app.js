
function productPrice(product, option) {
    const productCostText = document.getElementById(product + '-cost')
    if (product == "memory") {
        if (option == 8) {
            productCostText.innerText = 0
        }
        else if (option == 16) {

            productCostText.innerText = 180
        }
    } else if (product == "storage") {
        if (option == 256) {
            productCostText.innerText = 0
        } else if (option == 512) {
            productCostText.innerText = 100
        } else if (option == 1) {
            productCostText.innerText = 180
        }

    } else if (product == "delivery") {

        if (option == 'free') {
            productCostText.innerText = 0
        }
        else if (option == "charge") {
            productCostText.innerText = 20
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


    if (promoText == "stevekaku") {
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