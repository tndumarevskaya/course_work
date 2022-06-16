function arrayFromLength (number) {
    return Array.from(new Array(number).keys()).map(k => k + 1);
}

function formatPrice(priceStr) {
    const price = parseInt(priceStr, 10);
    return price;
}


module.exports = {arrayFromLength, formatPrice};