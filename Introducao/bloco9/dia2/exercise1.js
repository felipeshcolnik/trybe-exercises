const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const param = {headers: { Accept: 'application/json'} };
  fetch('https://icanhazdadjoke.com/', param)
    .then((response) => {
      response.json()
        .then((data) => {
          const joke = data.result[0].joke;
          appendJoke(joke);
        });
    });
};

window.onload = () => fetchJoke();