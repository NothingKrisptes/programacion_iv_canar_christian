abstract class Saiyajin {
	abstract transformarse(): void;
	detectarKi(): void{
		console.log("Detectando el nivel de energia del enemigo...");
	}
}

class Goku extends Saiyajin {
	transformarse(): void{
		console.log("Goku se transforma en Super Sayajin Blue");
	}
}

class Vegeta extends Saiyajin {
	transformarse(): void{
		console.log("Vegeta alcanza el Ultra Ego");
	}
}

const transformaciones: Saiyajin []=[
	new Goku(),
	new Vegeta()
]

transformaciones.forEach(saiyajin=>saiyajin.transformacion());
transformaciones.forEach(saiyajin=>saiyajin.detectarKi());
