abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador recupera energia");
    }
}

class Rocky extends Boxeador{
    atacar(): void{
        console.log("Rocky lanza un gancho");
    }
}

class Apollo extends Boxeador{
    atacar(): void{
        console.log("Apollo lanza un upper");
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

boxeadores.forEach(boxeador=>boxeador.atacar());
boxeadores.forEach(boxeador=>boxeador.descansar());