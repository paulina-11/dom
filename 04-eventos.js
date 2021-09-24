// Hacer referencia al elemento en html con $
const $btn = document.querySelector('#btn');
// Escuchador de evento 
// Evento que se dispara cada que de click quiero que haga algo
// Nada entre los parentesis porque es anonima
$btn.addEventListener('mouseover',() =>{
    console.log('Me presionaste');
    // Aqui se declara lo que queremos decir o hacer
});

// De la lista quitar el on y solo el prefijo



const $inpText = document.querySelector('#text');
// keydown, () son dos parametros dentro de la funcion anonima va todo lo que se ejecuta en el
$inpText.addEventListener('keydown',(e) =>{
    console.log(e.target.value);
    
    // recibe el evento con el e y despues el target y despues al value
    // e para saber que esta escribiendo
    // Aqui se declara lo que queremos decir o hacer
});