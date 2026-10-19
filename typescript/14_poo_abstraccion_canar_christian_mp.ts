abstract class Mascota {
    abstract hacerSonido(): void;
    descansar(): void {
        console.log("La mascota recupera energía");
    }
}

class Perro extends Mascota {
    hacerSonido(): void {
        console.log("El perro ladra: ¡Guau!");
    }
}

class Gato extends Mascota {
    hacerSonido(): void {
        console.log("El gato maúlla: ¡Miau!");
    }
}

const mascotas: Mascota[] = [
    new Perro(),
    new Gato()
];

mascotas.forEach(mascota => mascota.hacerSonido());
mascotas.forEach(mascota => mascota.descansar());
