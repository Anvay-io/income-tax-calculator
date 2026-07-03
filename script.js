const income = document.querySelector('#income');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
const amount = Number(income.value);

let TotalTax = 0;
if(amount <= 1200000) TotalTax=0;
else if(amount<=1600000) {
    TotalTax = (amount-1200000)*0.15;
}
else if(amount<=2000000) {
    TotalTax= (amount-1600000)*0.20 + 60000;
}
else if(amount<=2400000) {
    TotalTax= (amount-2000000)*0.25 + 140000;
}
else {
    TotalTax = (amount-2400000)*0.30 + 240000;
}
const result = document.getElementById('result');
result.textContent = `Income Tax: ₹${TotalTax.toLocaleString("en-IN")}`;

income.value = "";
income.focus();

})