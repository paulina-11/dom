/*Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista. */


const $btn = document.querySelector('#btn');
// linkea con el html
const $list = document.querySelector('#list');

$btn.addEventListener('click', () =>{
    // Evento click y quiero hacer lo de abajo
    const listItem = document.createElement('li');
    // li
    listItem.textContent ='Nuevo elemento';
    // rellena el li
    $list.appendChild(listItem);
    // aqui los agrega en la lista como un hijo
});

// creteElemen me crea un elemento html en este caso un li de lista
//  listItem.textContent ='Nuevo elemento' agrega contenido
// $list.appendChild(); el elemento que se creo necesito que lo agregues a la lista
// para agregar numeros agregar con un contador declarador afuera de la funcion y despues hacer el contenedor++ 