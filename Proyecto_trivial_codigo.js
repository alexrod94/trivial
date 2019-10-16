let jugadores = [
    {
        nombre: 1,
        ciencia: false,
        historia: false,
        literatura: false,
        deporte: false,
        ganador: false
    }, {
        nombre: 2,
        ciencia: false,
        historia: false,
        literatura: false,
        deporte: false,
        ganador: false
    }
]
let ciencia = [{
id: 0,
pregunta: "Quién inventó el telescopio reflector?",
respuesta: "Isaac Newton"
}, {
    id: 1,
    pregunta: "¿Quién descubrió la Penicilina?",
    respuesta: "Alexander Fleming"
    }, {
    id: 2,
    pregunta: "¿Cuál misión espacial logró el primer descenso en la luna de la historia?",
    respuesta: "Apolo 11"
    }
]

let historia = [{
    id: 0,
    pregunta: "¿Qué ciudad española era conocida como 'Lucentum' por los romanos?",
    respuesta: "Alicante"
    }, {
        id: 1,
        pregunta: "¿En qué año viajó el primer hombre a la Luna?",
        respuesta: "1969"
        }, {
        id: 2,
        pregunta: "¿Qué motivó la rebelión que dio lugar a la Guerra de la Independencia de EEUU?",
        respuesta: "Impuesto"
        }
    ]

let literatura = [{
    id: 0,
    pregunta: "¿Quién escribió 'La Ilíada'",
    respuesta: "Homero"
    }, {
        id: 1,
        pregunta: "¿Cual es el autor de 'El arte de la guerra'?",
        respuesta: "Sun Tzu"
        }, {
        id: 2,
        pregunta: "¿Quién es el autor de la 'Divina comedia'?",
        respuesta: "Dante Alighieri"
        }
    ]

let deporte = [{
    id: 0,
    pregunta: "¿Qué selección de fútbol ganó el Mundial de Brasil de 2014?",
    respuesta: "Alemania"
    }, {
        id: 1,
        pregunta: "¿Quien es el mejor ajedrecista noruego de la historia?",
        respuesta: "Magnus Carlsen"
        }, {
        id: 2,
        pregunta: " ¿Cuántos rounds hay en un combate de boxeo olímpico?",
        respuesta: "3"
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
    nombre: deporte
    }
]

while (jugador[0].ganador === false && jugador[1].ganador === false) {
let currentPlayer = 1;
let contadorCiencia = 0;
let contadorHistoria = 0;
let contadorLiteratura = 0;
let contadorDeporte = 0;
let catRandom = Math.floor(Math.random() * 3.9)
if (currentPlayer === 1) {

} else if (currentPlayer === 2) {

}
if (jugador[0].ciencia === true && jugador[0].historia === true && jugador[0].literatura === true && jugador[0].deporte === true) {
    jugador[0].ganador = true;
}
if (jugador[1].ciencia === true && jugador[1].historia === true && jugador[1].literatura === true && jugador[1].deporte === true) {
    jugador[1].ganador = true;
}
}