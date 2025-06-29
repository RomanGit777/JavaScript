// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    const currencyObj = currencyValues.find(item => item.currency === exchangeCurrency);
    if (!currencyObj){
        console.log('Валюта не знайдена');
        return null;
    }
    const result = sumUAH / currencyObj.value;
    console.log(result);
    return result;
}