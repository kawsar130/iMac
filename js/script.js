document.getElementById('memory').addEventListener('click', function(event) {
    const memoryQty = event.target;
    const priceBase = document.getElementById('price-base');
    const priceBaseAmount = parseFloat(priceBase.innerText);

    const priceMemory = document.getElementById('price-memory');
    const priceMemoryAmount = parseFloat(priceMemory.innerText);

    const priceTotal = document.getElementById('price-total');

    // console.log(memoryQty.id);
    if (memoryQty.id == 'memory-16gb') {
        let memoryPriceFor16Gb = 180;
        priceMemory.innerText = memoryPriceFor16Gb;
        priceTotal.innerText = priceBaseAmount + memoryPriceFor16Gb;
    }
    else {
        let memoryPriceFor8Gb = 0;
        priceMemory.innerText = memoryPriceFor8Gb;
        priceTotal.innerText = priceBaseAmount + memoryPriceFor8Gb;
    }
    
});