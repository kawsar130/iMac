const memory8GbCost = 0;
const memory16GbCost = 180;
const storage256GbCost = 0;
const storage512GbCost = 100;
const storage1TbCost = 180;
const deliveryPrimeCost = 0;
const deliveryUrgentCost = 20;

document.getElementById('customize-config').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const clickedElementId = clickedElement.id;
    const priceBase = parseFloat(document.getElementById('price-base').innerText);
    const priceMemory = document.getElementById('price-memory');
    const priceStorage = document.getElementById('price-storage');
    const priceDelivery = document.getElementById('price-delivery');
    const priceTotal = document.getElementById('price-total');
    
    // console.log(clickedElementId);
    if (clickedElementId.indexOf('memory') != -1) {
        const memoryCostForCustomize = getMemoryCost(clickedElementId);
        priceMemory.innerText = memoryCostForCustomize;
    }

    if (clickedElementId.indexOf('storage') != -1) {
        const storageCostForCustomize = getStorageCost(clickedElementId);
        priceStorage.innerText = storageCostForCustomize;
    }

    if (clickedElementId.indexOf('delivery') != -1) {
        const deliveryCost = getDeliveryCost(clickedElementId);
        priceDelivery.innerText = deliveryCost;
    }

    priceTotal.innerText = priceBase + parseFloat(priceMemory.innerText) + parseFloat(priceStorage.innerText) + parseFloat(priceDelivery.innerText);
});


function getMemoryCost(id) {
    if (id == 'memory-16gb') {
        return memory16GbCost;
    }
    else {
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