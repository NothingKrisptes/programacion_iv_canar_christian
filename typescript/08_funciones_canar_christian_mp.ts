// Funciones simples
function sumarDonaciones(donacion1: number, donacion2: number): number {
    return donacion1 + donacion2;
}

const totalDonaciones: number = sumarDonaciones(10, 20);
console.log(`Total de donaciones: ${totalDonaciones}`);

// Sin devolver un valor
function mostrarRefugio(nombre: string): void {
    console.log(`Refugio: ${nombre}`);
    const mascotas: string[] = ["Firulais", "Mishi", "Copito"];
    for (const mascota of mascotas) {
        console.log(`Mascota disponible: ${mascota}`);
    }
}

mostrarRefugio("Huellitas Felices");

// Funciones con parámetros opcionales
function registrarAdopcion(adoptante: string, mascota?: string): void {
    if (mascota) {
        console.log(`El adoptante ${adoptante} quiere adoptar a ${mascota}.`);
    } else {
        console.log(`El adoptante ${adoptante} aún no ha elegido mascota.`);
        mascota = "Por definir";
        console.log(`Mascota por defecto: ${mascota}`);
    }
}

registrarAdopcion("Ana", "Firulais");
registrarAdopcion("Luis");

// Funciones con parámetros por defecto
function registrarAdopcion2(adoptante: string, mascota: string = "Por definir"): void {
    console.log(`El adoptante ${adoptante} quiere adoptar a ${mascota}.`);
}
registrarAdopcion2("Carla", "Mishi");
registrarAdopcion2("Pedro");

// Funciones flecha
function calcularCostoAdopcion(costoBase: number): number {
    return costoBase * 2;
}
const calcularCostoAdopcionFlecha = (costoBase: number): number => costoBase * 2;

const costoOriginal: number = 50;
const costoFinal: number = calcularCostoAdopcion(costoOriginal);
console.log(`Costo original: ${costoOriginal}, Costo final: ${costoFinal}`);

const costoFinalFlecha: number = calcularCostoAdopcionFlecha(costoOriginal);
console.log(`Costo original: ${costoOriginal}, Costo final (flecha): ${costoFinalFlecha}`);

// FUNCIONES OVERLOADS
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "si" : "no";
    }
    return `"${valor}"`;
}

console.log(formatear(1233434.5));
console.log(formatear(true));
console.log(formatear("adoptado"));

// CLOSURES
function crearContador(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    };
}

const adopcionesPerros = crearContador();
const adopcionesGatos = crearContador(10);

adopcionesPerros.incrementar();
adopcionesPerros.incrementar();
adopcionesPerros.incrementar();
adopcionesGatos.incrementar();

console.log(adopcionesPerros.valor());
console.log(adopcionesGatos.valor());

adopcionesPerros.resetear();
console.log(adopcionesPerros.valor());
