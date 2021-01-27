const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
const degreeCelsius = getMarsTemperature(); // Felipe's code
console.log(degreeCelsius);

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
console.log((degreeCelsius) => (degreeCelsius * 9/5) + 32);
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
console.log(temperatureInFahrenheit);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
console.log(greet);

// definição da função sendMarsTemperature...
const temperature = toFahrenheit(degreeCelsius); // Felipe's code

const sendMarsTemperature = (temperature, greeting) => {
  
  setTimeout((temperatureInFahrenheit, greet), messageDelay()); 
}
sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo