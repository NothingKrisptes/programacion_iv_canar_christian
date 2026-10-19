class Mascota {
    public nombre: string;
    public edad: number;
    public energia: number;
    constructor(
        nombre: string,
        edad: number,
        energia: number,
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.energia = energia;
    }
    jugar(): void {
        this.energia -= 5;
        console.log(`${this.nombre} está jugando`);
    }
    alimentar(): void {
        this.energia += 10;
        console.log(`${this.nombre} ha sido alimentado`);
    }
}

const firulais = new Mascota("Firulais", 2, 80);
const mishi = new Mascota("Mishi", 3, 90);

firulais.jugar();
console.log(mishi.energia);
mishi.alimentar();
mishi.alimentar();
console.log(mishi.energia);
mishi.jugar();
mishi.jugar();
console.log(mishi.energia);
