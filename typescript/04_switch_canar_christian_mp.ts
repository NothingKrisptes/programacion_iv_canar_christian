type Mascota =
| "Firulais"
| "Mishi"
| "Copito"
| "Rocky"
| "Piolin"

let mascota: Mascota = "Rocky";

switch (mascota) {
    case "Firulais":
        console.log("Firulais es un perro labrador");
        break;
    case "Mishi":
        console.log("Mishi es una gata siamesa");
        break;
    case "Copito":
        console.log("Copito es un conejo blanco");
        break;
    case "Rocky":
        console.log("Rocky es un perro mestizo");
        break;
    case "Piolin":
        console.log("Piolin es un canario");
        break;
    default:
        console.log("Mascota desconocida");
}

type Perros = "Firulais" | "Rocky" | "Toby";

let perro: Perros = "Firulais";
let nivelEnergia: number = 100;
let tieneVacunas: boolean = true;

switch (perro) {
    case 'Firulais':
        if (nivelEnergia > 80 && tieneVacunas) {
            console.log("Firulais es un perro muy activo y listo para adopción");
        } else {
            console.log("Firulais aún no está listo para adopción");
        }
        break;
    case 'Rocky':
        if (nivelEnergia > 70 && tieneVacunas) {
            console.log("Rocky es un perro activo y listo para adopción");
        } else {
            console.log("Rocky aún no está listo para adopción");
        }
        break;
    case 'Toby':
        if (nivelEnergia > 90 && tieneVacunas) {
            console.log("Toby es un perro muy activo y listo para adopción");
        } else {
            console.log("Toby aún no está listo para adopción");
        }
        break;
    default:
        console.log("Perro desconocido");
}
