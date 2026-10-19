// Encapsulamiento
class Refugio {
    private cupos: number = 100;

    registrarAdopcion(cantidad: number): void {
        if (cantidad > 0) {
            this.cupos = Math.max(0, this.cupos - cantidad);
        }
    }
    consultarCupos(): number {
        return this.cupos;
    }
}

const huellitas = new Refugio();
huellitas.registrarAdopcion(50);
console.log(huellitas.consultarCupos());
huellitas.registrarAdopcion(25);
console.log(huellitas.consultarCupos());
