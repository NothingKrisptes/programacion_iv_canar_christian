let espacioRefugio = 10;
let espacioRefugioMaximo = 30;
while (espacioRefugio < espacioRefugioMaximo) {
    console.log(`Espacio ocupado en el refugio: ${espacioRefugio}`);
    espacioRefugio += 5;
}

let diaAdopcion = 1;
while (diaAdopcion <= 10) {
    console.log("Día de la jornada de adopción: ", diaAdopcion);
    diaAdopcion++;
}

let visitasAdoptantes = 0;
let adopcionesExitosas = 0;
while (visitasAdoptantes < 10) {
    visitasAdoptantes++;
    let adopto = Math.random() < 0.5;
    if (adopto) {
        adopcionesExitosas++;
        console.log(`Visita ${visitasAdoptantes}: ¡Adopción exitosa! Total de adopciones: ${adopcionesExitosas}`);
    } else {
        console.log(`Visita ${visitasAdoptantes}: No adoptó. Total de adopciones: ${adopcionesExitosas}`);
    }
}

let jornadas = 0;
do {
    jornadas++;
    console.log(`Jornada de adopción número: ${jornadas}`);
} while (jornadas < 5);

interface MascotaRefugio {
    nombre: string;
    tipo: string;
    diasEnRefugio: number;
}
const mascotasRegistradas: MascotaRefugio[] = [
    { nombre: "Firulais", tipo: "Perro", diasEnRefugio: 180 },
    { nombre: "Mishi", tipo: "Gato", diasEnRefugio: 100 },
    { nombre: "Copito", tipo: "Conejo", diasEnRefugio: 120 },
    { nombre: "Rocky", tipo: "Perro", diasEnRefugio: 90 },
    { nombre: "Piolin", tipo: "Ave", diasEnRefugio: 30 },
];

let indice = 0;
while (indice < mascotasRegistradas.length) {
    const mascota = mascotasRegistradas[indice];
    if (!mascota) {
        break;
    }
    if (mascota.tipo === "Gato") {
        indice++;
        continue;
    }
    if (mascota.diasEnRefugio < 100) {
        break;
    }
    console.log(`Mascota: ${mascota.nombre}, Tipo: ${mascota.tipo}, Días en refugio: ${mascota.diasEnRefugio}`);
    indice++;
}
