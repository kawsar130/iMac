const memory8GbCost = 0;
const memory16GbCost = 180;
const storage256GbCost = 0;
const storage512GbCost = 100;
const storage1TbCost = 180;
const deliveryPrimeCost = 0;
const deliveryUrgentCost = 20;

const priceTotal = document.getElementById('price-total');
const priceTotalFooter = document.getElementById('price-total-footer');

let priceTotalAmount;

document.getElementById('customize-config').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const elementId = clickedElement.id;
    const priceBase = parseFloat(document.getElementById('price-base').innerText);
    const priceMemory = document.getElementById('price-memory');
    const priceStorage = document.getElementById('price-storage');
    const priceDelivery = document.getElementById('price-delivery');

    // console.log(clickedElementId);
    if (elementId.indexOf('memory') != -1) {
        const memoryCostForCustomize = getMemoryCost(elementId);
        priceMemory.innerText = memoryCostForCustomize;
    }

    if (elementId.indexOf('storage') != -1) {
        const storageCostForCustomize = getStorageCost(elementId);
        priceStorage.innerText = storageCostForCustomize;

    }

    if (elementId.indexOf('delivery') != -1) {
        const deliveryCost = getDeliveryCost(elementId);
        priceDelivery.innerText = deliveryCost;
    }

    priceTotalAmount = priceBase + parseFloat(priceMemory.innerText) + parseFloat(priceStorage.innerText) + parseFloat(priceDelivery.innerText);
    priceTotal.innerText = priceTotalAmount;
    priceTotalFooter.innerText = priceTotalAmount;
});

document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const promoInputField = document.getElementById('promo-input');
    const promoCode = promoInputField.value;
    if (promoCode == 'stevekaku') {
        // const discountAmount = priceTotalAmount * 2;
        console.log(priceTotalAmount);
    }
    promoInputField.value = '';
});


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
        return storage1TbCost;
    }

    else if (id == 'storage-512gb') {
        return storage512GbCost;
    }

    else {
        return storage256GbCost;
    }
}

function getDeliveryCost(id) {
    if (id == 'delivery-urgent') {
        return deliveryUrgentCost;
    }
    else {
        return deliveryPrimeCost;
    }
}