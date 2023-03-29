function getPrice(){
    var inputPrice = document.getElementById("price").value;
    console.log(inputPrice);
    document.getElementById("setPrice").value =inputPrice;
}


// function getPrice2(){
//     document.getElementById("price2").value = document.getElementById("priceEdit").value;
//
//     var inputPrice2 = document.getElementById("price2").value;
//     console.log("update" + inputPrice2);
//     document.getElementById("priceEdit").value =inputPrice2;
// }


var currencyInput = document.querySelector('input[type="currency"]')
var currency = 'AUD' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml

// format inital value
onBlur({target:currencyInput})

// bind event listeners
currencyInput.addEventListener('focus', onFocus)
currencyInput.addEventListener('blur', onBlur)

function localStringToNumber( s ){
    return Number(String(s).replace(/[^0-9.,-]+/g,""))
    getPrice();


}

function onFocus(e){
    var value = e.target.value;
    e.target.value = value ? localStringToNumber(value) : ''
    getPrice();


}

function onBlur(e){
    var value = e.target.value

    var options = {
        maximumFractionDigits : 2,
        currency              : currency,
        style                 : "currency",
        currencyDisplay       : "symbol"
    }
    e.target.value = (value || value === 0)
        ? localStringToNumber(value).toLocaleString(undefined, options)
        : ''
    getPrice();


}
getPrice();

