// duvidas ///
// linha 19 a funcao com o valor data. pq esta 'data' nao tem link com nada?
//linha 47 - explicacao detalhada do /^ letras e nums
// prevent default

const states = document.getElementById('estado');
const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
function createStateOptions() {      
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions)
    createOptions.innerText = stateOptions[index];
    createOptions.value = stateOptions[index].toLowerCase;
  }
}

    // copiado do Gabarito //

function validateData(data) {
  // indexOf - esta verificando se nas posicoes 2 e 5 do array/string contem '/' . Ja que o modelo de data eh DD/MM/AAAA
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2); // a propriedade substring pega a partir da posicao 0 as 2 posicoes (0 e 1)
    const month = data.substr(3, 2); // a propriedade substring pega a partir da posicao 3 as 2 posicoes (3 e 4)
    const year = data.substr(6, 4);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

//const submitButton = document.querySelector('.submit-button');
//submitButton.addEventListener('click', renderCurriculum);
//clearButton.addEventListener('click', clearFields);

window.onload = function () {
  createStateOptions();
}

