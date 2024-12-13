let bill = document.querySelector('#bill');
let discount = document.querySelector('#discount');
let totalElement = document.querySelector('#total');
// console.log(bill, discount, total);

function calculate() {
    let result = discount.value / 100 * bill.value;
    
    let total = parseInt(bill.value)+result;
    totalElement.innerText = total;
}
