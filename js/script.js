const memory8GbCost = 0;
const memory16GbCost = 180;
const storage256GbCost = 0;
const storage512GbCost = 100;
const storage1TbCost = 180;
const deliveryPrimeCost = 0;
const deliveryUrgentCost = 20;
// initializing total price and grand total as global variable
const priceTotal = document.getElementById('price-total');
const priceTotalFooter = document.getElementById('price-total-footer');

let priceTotalAmount;
// event handling of user customization option with bubble vai
document.getElementById('customize-config').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const elementId = clickedElement.id;
    const priceBase = parseFloat(document.getElementById('price-base').innerText);
    const priceMemory = document.getElementById('price-memory');
    const priceStorage = document.getElementById('price-storage');
    const priceDelivery = document.getElementById('price-delivery');

    // analyzing memory customization
    if (elementId.indexOf('memory') != -1) {
        const memoryCostForCustomize = getMemoryCost(elementId);
        priceMemory.innerText = memoryCostForCustomize;
    }

    // analyzing storage customization
    if (elementId.indexOf('storage') != -1) {
        const storageCostForCustomize = getStorageCost(elementId);
        priceStorage.innerText = storageCostForCustomize;

    }

    // analyzing delivery customization
    if (elementId.indexOf('delivery') != -1) {
        const deliveryCost = getDeliveryCost(elementId);
        priceDelivery.innerText = deliveryCost;
    }

    // summation of total amount
    priceTotalAmount = priceBase + parseFloat(priceMemory.innerText) + parseFloat(priceStorage.innerText) + parseFloat(priceDelivery.innerText);
    updateGrandTotal(priceTotalAmount);
});

document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const promoInputField = document.getElementById('promo-input');
    const promoCode = promoInputField.value;
    if (promoCode == 'stevekaku') {
        const totalPriceAmount = parseFloat(priceTotal.innerText);
        const discountedPrice = totalPriceAmount * 0.80;
        priceTotalFooter.innerText = discountedPrice;
    }
    promoInputField.value = '';
});

// Grand total update function
function updateGrandTotal(amount) {
    priceTotal.innerText = amount;
    priceTotalFooter.innerText = amount;
}


function getMemoryCost(id) {
    if (id == 'memory-16gb') {
        document.getElementById('memory-16gb').style.backgroundColor = 'darkRed';
        document.getElementById('memory-16gb').style.color = 'white';
        document.getElementById('memory-8gb').style.backgroundColor = 'inherit';
        document.getElementById('memory-8gb').style.color = 'inherit';
        return memory16GbCost;
    }
    else {
        document.getElementById('memory-8gb').style.backgroundColor = 'darkRed';
        document.getElementById('memory-8gb').style.color = 'white';
        document.getElementById('memory-16gb').style.backgroundColor = 'inherit';
        document.getElementById('memory-16gb').style.color = 'inherit';
        return memory8GbCost;
    }
}

function getStorageCost(id) {
    if (id == 'storage-1tb') {
        document.getElementById('storage-1tb').style.backgroundColor = 'darkRed';
        document.getElementById('storage-1tb').style.color = 'white';
        document.getElementById('storage-512gb').style.backgroundColor = 'inherit';
        document.getElementById('storage-512gb').style.color = 'inherit';
        document.getElementById('storage-256gb').style.backgroundColor = 'inherit';
        document.getElementById('storage-256gb').style.color = 'inherit';
        return storage1TbCost;
    }

    else if (id == 'storage-512gb') {
        document.getElementById('storage-1tb').style.backgroundColor = 'inherit';
        document.getElementById('storage-1tb').style.color = 'inherit';
        document.getElementById('storage-512gb').style.backgroundColor = 'darkRed';
        document.getElementById('storage-512gb').style.color = 'white';
        document.getElementById('storage-256gb').style.backgroundColor = 'inherit';
        document.getElementById('storage-256gb').style.color = 'inherit';
        return storage512GbCost;
    }

    else {
        document.getElementById('storage-1tb').style.backgroundColor = 'inherit';
        document.getElementById('storage-1tb').style.color = 'inherit';
        document.getElementById('storage-512gb').style.backgroundColor = 'inherit';
        document.getElementById('storage-512gb').style.color = 'inherit';
        document.getElementById('storage-256gb').style.backgroundColor = 'darkRed';
        document.getElementById('storage-256gb').style.color = 'white';
        return storage256GbCost;
    }
}

function getDeliveryCost(id) {
    if (id == 'delivery-urgent') {
        document.getElementById('delivery-urgent').style.backgroundColor = 'darkRed';
        document.getElementById('delivery-urgent').style.color = 'white';
        document.getElementById('delivery-prime').style.backgroundColor = 'inherit';
        document.getElementById('delivery-prime').style.color = 'inherit';
        return deliveryUrgentCost;
    }
    else {
        document.getElementById('delivery-urgent').style.backgroundColor = 'inherit';
        document.getElementById('delivery-urgent').style.color = 'inherit';
        document.getElementById('delivery-prime').style.backgroundColor = 'darkRed';
        document.getElementById('delivery-prime').style.color = 'white';
        return deliveryPrimeCost;
    }
}