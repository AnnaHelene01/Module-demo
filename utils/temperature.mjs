import { round } from "./utils.mjs";

export function farenheitToCelcius(f) {
    // *C ? *F -32 / 1.8000
    if (f < -459.67) console.error(`${f}°F is too cold`); //alt option Q for °
    return round((f - 32.00) / 1.8000);
}


export function celciusToFarenheit(c) {
   // *F ? *C * 1.8000 + 32.00
   if (c < -273.15) console.error(`${c}°C is too cold`);
   return round(c * 1.8000 + 32);
}






//console.log(`-40°C = ${celciusToFarenheit(-40)}°F`); //-42
//console.log(`0°C = ${celciusToFarenheit(0)}°F`); //32
//console.log(`37°C = ${celciusToFarenheit(37)}°F`); // 98.6
//console.log(`100°C = ${celciusToFarenheit(0)}°F`); // 212

//console.log(`-40°C = ${farenheitToCelcius(-40)}°F`); // -40
//console.log(`32°C = ${farenheitToCelcius(32)}°F`); // 0
//console.log(`98.6°C = ${farenheitToCelcius(98.6)}°F`); // 37
//console.log(`212°C = ${farenheitToCelcius(212)}°F`); // 100