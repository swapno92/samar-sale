let serialNo = 0;

function getAccessoriesOneInformation() {
    const cardTitle = getCardTitle('k-accessories-one');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('accessories-one-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getAccessoriesTwoInformation() {
    const cardTitle = getCardTitle('k-accessories-two');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('accessories-two-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getCookerInformation() {
    const cardTitle = getCardTitle('cooker');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('cooker-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getCapInformation() {
    const cardTitle = getCardTitle('cap');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('cap-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getJerseyInformation() {
    const cardTitle = getCardTitle('jersey');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('jersey-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getCatesInformation() {
    const cardTitle = getCardTitle('cates');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('cates-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getChairInformation() {
    const cardTitle = getCardTitle('chair');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('chair-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function childrenChair() {
    const cardTitle = getCardTitle('childrenChair');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('children-chair-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function getSofaInformation() {
    const cardTitle = getCardTitle('sofa');
    setCardTitle(cardTitle);
    const cardPrice = getPrice('sofa-price');
    const previousTotalPrice = getPrice("total-price");
    const currentTotalPrice = previousTotalPrice + cardPrice;
    setTotalPrice(currentTotalPrice);
    getConditionThenDisableBtn(currentTotalPrice)
}

function goHome() {
    location.reload();
}

function getDiscount(){
    const coupon = getCardTitle('coupon');
    const inputCoupon = getInputCoupon();
    if(coupon === inputCoupon){
        setDiscountAmount()
        setTotal() 
    }
}