// variables
// constantes
const PI: number= 3.1435;
const IVA: number=15;
const SERVICIO_API:string="apiService";
const ACTIVE: boolean = true;

console. log("PI:", PI);
console. log("IVA:", IVA);
console. log("SERVICIO_API:", SERVICIO_API);
console. log("PRODUCTO_ACTIVO:", ACTIVE);

// let

let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string="Pedro Perez";
let caducado: boolean=false;
console.log(alumno);
console.log(caducado);

let equipo:string[]=["PIKACHU","CHARMANDER","BULBASAUR"];
console.log(equipo);

let pokemonCapturado: string | null = null;
let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint = 98723982737392n;
// tipo symbol
let pokemon1: symbol = Symbol("Pikachu");
console.log(pokemon1.description);
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon2.description);
console.log(pokemon1 === pokemon2);

// tipo objeto
let pikachu: {
    nombre: string;
    nivel: number;
    vida: number;
    esLegendario: boolean;
} = {
    nombre: "Pikachu",
    nivel: 5,
    vida: 35,
    esLegendario: false
};
console.log(pikachu);