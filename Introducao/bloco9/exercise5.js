const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};
const Celsius = getMarsTemperature(); // Felipe's code
// console.log(Celsius);

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// console.log(toFahrenheit(Celsius));
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// console.log(temperatureInFahrenheit(toFahrenheit(Celsius)));
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const gretting = (greet(toFahrenheit(Celsius)));

// definição da função sendMarsTemperature...
const temperature = toFahrenheit(Celsius); // Felipe's code

const sendMarsTemperature = (greeting) => {
  setTimeout(greeting, messageDelay()); 
}  

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo