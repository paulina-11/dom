// alert("Hola");

// document.write(`Holaaaaa`);

// getelements (muchos elementos)nos devuelve un arreglo de lo que tendra esa etiqueta en []
// const title = document.getElementsByTagName('h1');
// // Se necesita poner [] porque se refiere al arreglo del h1 dentro del HTML 
// title[0].innerHTML = 'Titulo cambiado desde Javascript';

// Id solo es por ID 
// const texto = document.getElementById ('text');
// texto.innerHTML = 'Este es un parrado desde Js';
// texto.style.background = 'blue';
// texto.style.color = 'white';

// console.log (texto);

// Desde query podemos leccionar objetos o etiquetas o clases, engloba todos los elementos

const texto = document.querySelector ('#texto');
texto.textContent='Estoy escribiendo desde Js'

// Obtiene las clases y las devuelve en arreglos
document.getElementsByClassName
// Obtiene las  ID y las devuelve en arreglos
document.getElementById
// Obtiene todos los elementos por nombre y las devuelve en arreglos
document.getElementsByName


// Crear elementos en HTML
// Agrega el div al body al final del body

const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);