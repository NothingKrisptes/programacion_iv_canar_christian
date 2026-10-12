let mascota = prompt("Ingrese mascota (Firulais, Mishi, Copito, Rocky, Piolin):");
let edad = Number(prompt("Ingrese edad de la mascota (en meses):"));
let energia = Number(prompt("Ingrese nivel de energía de la mascota (1-100):"));

if (mascota === "Firulais" || mascota === "Mishi" || mascota === "Copito" || mascota === "Rocky" || mascota === "Piolin") {
    if (edad >= 0 && !isNaN(energia)) {
        if (energia >= 0 && energia <= 100) {
            console.log(`Mascota: ${mascota}, Edad: ${edad} meses, Energía: ${energia}`);
        } else {
            console.log("Nivel de energía inválido. Por favor, ingrese un valor entre 0 y 100.");
        }
    } else {
        console.log("Edad o energía inválida. Por favor, ingrese valores válidos.");
    }
} else {
    console.log("Mascota desconocida. Por favor, ingrese una mascota válida.");
}
