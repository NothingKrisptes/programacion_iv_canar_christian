let personaje = prompt("Ingrese personaje (Luke Skywalker, Darth Vader, Leia Organa, Han Solo, Yoda):");
let edad = Number(prompt("Ingrese edad del personaje:"));
let fuerza = Number(prompt("Ingrese nivel de fuerza del personaje (1-100):"));

if (personaje === "Luke" || personaje === "Vader" || personaje === "Organa" || personaje === "Solo" || personaje === "Yoda") {
    if (edad >= 0 && fuerza >= 100) {
        if (fuerza >= 0 && fuerza <= 100) {
            console.log(`Personaje: ${personaje}, Edad: ${edad}, Fuerza: ${fuerza}`);
        } else{
            console.log("Nivel de fuerza inválido. Por favor, ingrese un valor entre 0 y 100.");
        }
    } else {
        console.log("Edad o fuerza inválida. Por favor, ingrese valores válidos.");
    }
} else {
    console.log("Personaje desconocido. Por favor, ingrese un personaje válido.");
}
        
