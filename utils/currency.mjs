import { round } from "./utils.mjs";

/** Currency converter */
export async function currencyConverter(amount, from, to, out) {
     console.log(`Convert ${from} ${amount} into ${to} and put in ${out}`);

     const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
/*
     var request = new XMLHttpRequest();
     request.open('GET', requestURL);
     request.responseType = 'json';
     request.send();

     request.onload = function() {
     var response = request.response;
     console.log(response);
     }
*/
     fetch(requestURL)
     .then((response) => response.json())
     .then((data) => {
         let result = round(amount * data.result);
         out.innerText = `${from} ${amount} = ${to} ${result}`;
     });

};