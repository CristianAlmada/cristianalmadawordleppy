let intentos= 6;
let palabra ='APPLE';

window.addEventListener('load, init')

const button = document.getElementById ("guess-button");
button.addEventListener('click', intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    return intento.toUpperCase();
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra){
        terminar("<h1>GANASTE!😁</h1>")
        return
    }        
}
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';
for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (intentos[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(intentos[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = intentos[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;
    if(intentos ==0){
        terminar('<h1>Perdiste!😖<h1/>')
    }
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
