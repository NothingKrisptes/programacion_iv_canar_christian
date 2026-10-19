interface ParticipanteTorneo{
    nombre: string,
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void;
}

class Goku implements ParticipanteTorneo {
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnica(): void {
        console.log("Goku utiliza el Kamehameha");
    }
    transformarse(): void {
        console.log("Goku se emputa y se transforma");
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder = 8500;
    presentarTecnica(): void {
        console.log("Vegeta utiliza el Final Flash");
    }
    transformarse(): void {
        console.log("Vegeta no quiere quedarse atras y se transforma")
    }
}

const goku = new Goku();
const vegeta = new Vegeta();

goku.presentarTecnica();
vegeta.presentarTecnica();