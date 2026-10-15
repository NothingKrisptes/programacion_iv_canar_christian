class Guerrero {
	atacar():void{
		console.log("Ataque básico");
	}
}

class Goku extends Guerrero {
	override atacar(): void {
		console.log("Goku lanza su poderoso kamehameha");
	}
}

class Vegeta extends Guerrero {
	override atacar(): void{
		console.log("Vegeta utiliza su Final Flash");
	}
}

const guerreros: Guerrero []=[
	new Goku(),
	new Vegeta()
]
guerreros.forEach(guerrero=>guerrero.atacar());
