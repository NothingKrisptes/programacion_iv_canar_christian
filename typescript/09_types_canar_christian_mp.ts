type ID = string | number;
type Raza = string;
type Coordenadas = [number, number];
type Punto = {
    x: number;
    y: number;
}

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "mas-001";

type Ubicacion = Punto & {
    z: number;
}

interface Adoptante {
    readonly id: number;
    nombre: string;
    email: string;
    foto?: string;
}

interface Voluntario extends Adoptante {
    cargo: string;
}

const a: Adoptante = {
    id: 1,
    nombre: "Ana",
    email: "ana@gmail.com"
};

const a2: Adoptante = {
    id: 2,
    nombre: "Luis",
    email: "luis@gmail.com",
    foto: "foto.png"
};

console.log(a);
console.log(a2);

const veterinario: Voluntario = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@gmail.com",
    cargo: "veterinario del refugio"
};

console.log(veterinario);
