let edadTitle = document.querySelector('#edad');
//  Valor en el HTML
let input = document.querySelector('#input');

const readEdad = () =>{
    // Quiero hacer referencia al valor value dentro del input
    const inputValue = input.value;
    // En esta constante se guardan el valor
        const respuesta = inputValue >=18 ? 'Eres mayor de edad' : 'Eres menor de edad'
    // Aqui imprime la edad
    edad.textContent = respuesta;
}

// textContent hace que aparezca en mi misma página