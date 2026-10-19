class Mascota {
    comer(): void {
        console.log("La mascota está comiendo");
    }
}

class Perro extends Mascota {
    ladrar(): void {
        console.log("El perro ladra con alegría");
    }
}

class Gato extends Mascota {
    maullar(): void {
        console.log("El gato maúlla suavemente");
    }
}

const perro = new Perro();
perro.comer();
perro.ladrar();
const gato = new Gato();
gato.comer();
gato.maullar();
