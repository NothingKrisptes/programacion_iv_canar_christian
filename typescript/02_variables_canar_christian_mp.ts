// variables
// constantes
const PI: number = 3.1435;
const COSTO_ADOPCION: number = 15;
const SERVICIO_API: string = "apiAdopciones";
const ACTIVE: boolean = true;

console.log("PI:", PI);
console.log("COSTO_ADOPCION:", COSTO_ADOPCION);
console.log("SERVICIO_API:", SERVICIO_API);
console.log("MASCOTA_DISPONIBLE:", ACTIVE);

// let

let contador: number = 0;
console.log(contador);
contador = 5;
console.log(contador);
contador++;
console.log(contador);
contador += 5;
console.log(contador);
contador = contador + 3;
console.log(contador);
let adoptante: string = "Pedro Perez";
let adoptado: boolean = false;
console.log(adoptante);
console.log(adoptado);

let mascotas: string[] = ["FIRULAIS", "MISHI", "COPITO"];
console.log(mascotas);

let mascotaAdoptada: string | null = null;
let mascotaEnObservacion: string | undefined;

let donacionesAcumuladas: bigint = 98723982737392n;
// tipo symbol
let mascota1: symbol = Symbol("Firulais");
console.log(mascota1.description);
let mascota2: symbol = Symbol("Firulais");
console.log(mascota2.description);
console.log(mascota1 === mascota2);

// tipo objeto
let firulais: {
    nombre: string;
    edad: number;
    peso: number;
    esVacunado: boolean;
} = {
    nombre: "Firulais",
    edad: 2,
    peso: 12,
    esVacunado: true
};
console.log(firulais);
