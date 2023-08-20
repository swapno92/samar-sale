function getCardTitle(id) {
    const cardTitleElement = document.getElementById(id);
    const cardTitleText = cardTitleElement.innerText;
    return cardTitleText
}

function setCardTitle(cardTitle) {
    serialNo += 1;

    const cardTitles = document.getElementById('card-titles');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td">${serialNo}. </td>
    <td>${cardTitle}</td>
    `
    cardTitles.appendChild(tr);
}

function getPrice(id) {
    const cardPriceElement = document.getElementById(id);
    const cardPriceString = cardPriceElement.innerText;
    const cardPrice = parseFloat(cardPriceString);
    return cardPrice;
}

function setTotalPrice(currentTotalPrice) {
    const previousTotalPriceElement = document.getElementById('total-price');
    previousTotalPriceElement.innerText = currentTotalPrice.toFixed(2);
}

function getConditionThenDisableBtn(currentTotalPrice) {
    // apply button
    const btnApply = document.getElementById('btn-apply');
    if (currentTotalPrice >= 200) {
        btnApply.removeAttribute('disabled');
    }
    else {
        btnApply.setAttribute('disabled', true)
    }

    // purchase button
    const btnPurchase = document.getElementById('btn-purchase');
    if (currentTotalPrice > 0) {
        btnPurchase.removeAttribute('disabled')
    }
    else {
        btnPurchase.setAttribute('disabled', true)
    }
}

function getCouponCode() {
    const couponElement = document.getElementById('coupon');
    const couponString = couponElement.innerText;
    return couponString;
}
function getInputCoupon() {
    const inputCouponElement = document.getElementById('input-coupon');
    const inputCouponString = inputCouponElement.value;
    return inputCouponString;
}

function setDiscountAmount() {
    const totalBalance = getPrice('total-price')
    const discount = (20/100) * totalBalance;
    
    const previousDiscountBalance = document.getElementById('discount');
    previousDiscountBalance.innerText = discount.toFixed(2);
}

function setTotal(){
    const totalBalance = getPrice('total-price')
    const discount = getPrice('discount')
    const total = totalBalance - discount;

    const previousTotal = document.getElementById('total')
    previousTotal.innerText = total.toFixed(2);

}