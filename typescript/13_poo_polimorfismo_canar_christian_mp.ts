class Mascota {
    hacerSonido(): void {
        console.log("Sonido básico de mascota");
    }
}

class Perro extends Mascota {
    override hacerSonido(): void {
        console.log("El perro ladra: ¡Guau!");
    }
}

class Gato extends Mascota {
    override hacerSonido(): void {
        console.log("El gato maúlla: ¡Miau!");
    }
}

const mascotas: Mascota[] = [
    new Perro(),
    new Gato()
];
console.log(mascotas);
mascotas.forEach(mascota => mascota.hacerSonido());
