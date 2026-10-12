// Ciclo for
for (let i = 2; i < 50; i += 5) {
    console.log(`Paseo de mascotas del refugio: ${i} minutos`);
}

for (let i = 40; i > 0; i -= 5) {
    console.log(`Paseo de mascotas del refugio: ${i} minutos`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log(`El paseo ha terminado en: ${i} minutos`);
        break;
    }
    if (i === 30) {
        console.log(`El paseo ha sido interrumpido en: ${i} minutos`);
        continue;
    }
    console.log(`Paseo de mascotas del refugio: ${i} minutos`);
}
