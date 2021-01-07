
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
    

    window.onload = function() {
      createStateOptions();
    }