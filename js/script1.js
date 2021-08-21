const memory8GbCost = 0;
const memory16GbCost = 180;
const storage512GbCost = 100;
const storage1TbCost = 180;
const storage256GbCost = 0;
const deliveryPrimeCost = 0;
const deliveryUrgentCost = 20;

document.getElementById('customize-config').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const clickedElementId = clickedElement.id;
    const priceBase = parseFloat(document.getElementById('price-base').innerText);

    // console.log(clickedElementId);
    if (clickedElementId.indexOf('memory') != -1) {
        const memoryPrice = memoryUpdate(clickedElementId);
        const priceMemory = document.getElementById('price-memory');
        const priceTotal = document.getElementById('price-total');
        priceMemory.innerText = memoryPrice;
        priceTotal.innerText = priceBase + memoryPrice;
    }

    else if (clickedElementId.indexOf('storage') != -1) {
        storageUpdate();
    }

    else if (clickedElementId.indexOf('delivery') != -1) {
        deliveryUpdate();
    }
});

function memoryUpdate(id) {
    const getPriceMemory = document.getElementById('price-memory').innerText;
    if (id == 'memory-16gb') {
        return memory16GbCost;
    }
    else {
        return memory8GbCost;
    }
}