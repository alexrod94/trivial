let jugadores = [
    {
        nombre: 1,
        ciencia: false,
        historia: false,
        literatura: false,
        ocio: false,
        ganador: false
    }, {
        nombre: 2,
        ciencia: false,
        historia: false,
        literatura: false,
        ocio: false,
        ganador: false
    }
]

let ciencia = [{
id: 0,
pregunta: "",
respuesta: ""
}, {
    id: 1,
    pregunta: "",
    respuesta: ""
    }, {
    id: 2,
    pregunta: "",
    respuesta: ""
    }
]

let historia = [{
    id: 0,
    pregunta: "",
    respuesta: ""
    }, {
        id: 1,
        pregunta: "",
        respuesta: ""
        }, {
        id: 2,
        pregunta: "",
        respuesta: ""
        }
    ]

let literatura = [{
    id: 0,
    pregunta: "",
    respuesta: ""
    }, {
        id: 1,
        pregunta: "",
        respuesta: ""
        }, {
        id: 2,
        pregunta: "",
        respuesta: ""
        }
    ]

let ocio = [{
    id: 0,
    pregunta: "",
    respuesta: ""
    }, {
        id: 1,
        pregunta: "",
        respuesta: ""
        }, {
        id: 2,
        pregunta: "",
        respuesta: ""
        }
    ]

let categorias = [
    {
    id: 0,
    nombre: ciencia
    },
    {
    id: 1,
    nombre: historia
    },
    {
    id: 2,
    nombre: literatura
    }, {
    id: 3,
    nombre: ocio
    }
]

while (jugador[0].ganador === false && jugador[1].ganador === false) {
let currentPlayer = 1;
let contadorCiencia = 0;
let contadorHistoria = 0;
let contadorLiteratura = 0;
let contadorOcio = 0;
let catRandom = Math.floor(Math.random() * 3.9)
if (currentPlayer === 1) {

} else if (currentPlayer === 2) {

}
if (jugador[0].ciencia === true && jugador[0].historia === true && jugador[0].literatura === true && jugador[0].ocio === true) {
    jugador[0].ganador = true;
}
if (jugador[1].ciencia === true && jugador[1].historia === true && jugador[1].literatura === true && jugador[1].ocio === true) {
    jugador[1].ganador = true;
}
}