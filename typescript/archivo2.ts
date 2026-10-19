class Guerrero {
	atacar(): void{
		console.log("El guerrero realiza un ataque básico");
	}
}

class Goku extends Guerrero {
	kamehameha(): void{
		console.log("Goku lanza un poderoso Kamehameha");
	}
}

class Vegeta extends Guerrero {
	finalFlash(): void{
		console.log("Vegeta utiliza su poderoso Final Flash");
	}
}

const goku = new Goku();
goku.atacar();
goku.kamehameha();
const vegeta = new Vegeta();
vegeta.atacar();
vegeta.finalFlash();
