function celsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));