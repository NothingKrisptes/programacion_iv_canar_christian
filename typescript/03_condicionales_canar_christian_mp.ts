// Condicionales
let edadMeses: number = 5;
if (edadMeses < 6) {
    console.log("El cachorro aún es muy pequeño para ser adoptado");
}

// Condicionales dobles o dos caminos
if (edadMeses >= 12) {
    console.log("El perro ya es adulto");
} else {
    console.log("El perro todavía no es adulto");
}

// Condicionales multiples o varios caminos
if (edadMeses >= 12) {
    console.log("El perro es adulto y puede ser adoptado de inmediato");
} else if (edadMeses >= 3) {
    console.log("El cachorro ya puede ser adoptado");
} else {
    console.log("El cachorro es demasiado pequeño para ser adoptado");
}

// Condicional anidado
if (edadMeses >= 12) {
    console.log("El perro es adulto y puede ser adoptado de inmediato");
} else {
    if (edadMeses >= 3) {
        console.log("El cachorro ya puede ser adoptado");
    } else {
        console.log("El cachorro es demasiado pequeño para ser adoptado");
    }
}

edadMeses = 10;
let vacunas: number = 4;
// Condicional if con operadores logicos
if (edadMeses >= 3 && edadMeses < 12 && vacunas >= 3) {
    console.log("El cachorro está listo para ser adoptado");
} else if (edadMeses >= 12) {
    console.log("El perro es adulto y puede ser adoptado");
} else {
    console.log("El cachorro aún no cumple los requisitos de adopción");
}

edadMeses = 2;
vacunas = 4;
// Condicional if con operador logico OR
if (edadMeses >= 3 || vacunas >= 3) {
    console.log("El cachorro puede pasar a revisión de adopción");
} else if (edadMeses >= 12) {
    console.log("El perro es adulto y puede ser adoptado");
} else {
    console.log("El cachorro no puede pasar a revisión de adopción");
}

/*
    Desarrolla un programa en TypeScript que determine si un adoptante puede adoptar una mascota en el refugio.
    Para ingresar al proceso, debe tener al menos 18 años, contar con al menos 2 referencias personales y no estar vetado.
    Si cumple estos requisitos, verifica mediante condicionales anidados que la mascota tenga edad mínima de 3 meses,
    salud mayor a 0 y sea de tipo Perro, Gato o Conejo.
    Finalmente, clasifica a la mascota como Prioritaria (edad ≥ 96 meses, energía ≥ 90 y salud ≥ 100),
    Especial (edad ≥ 60 y energía ≥ 75 o sociabilidad ≥ 80) o Regular (edad ≥ 3, energía ≥ 50 y salud > 0).
    Utiliza if, else if, else y operadores &&, || y !, mostrando un mensaje cuando no se cumplan los requisitos.
*/
type TipoMascota = "Perro" | "Gato" | "Conejo" | "Ave";


interface Adoptante {
  nombre: string;
  edad: number;
  referencias: number;
  vetado: boolean;
}


interface Mascota {
  nombre: string;
  tipo: TipoMascota;
  edadMeses: number;
  salud: number;
  energia: number;
  sociabilidad: number;
}


const adoptanteActual: Adoptante = {
  nombre: "Ana",
  edad: 25,
  referencias: 2,
  vetado: false
};


const mascotaActual: Mascota = {
  nombre: "Firulais",
  tipo: "Perro",
  edadMeses: 100,
  salud: 120,
  energia: 95,
  sociabilidad: 78
};


// Primer IF: Validar adoptante
if (
  adoptanteActual.referencias >= 2 &&
  adoptanteActual.edad >= 18 &&
  !adoptanteActual.vetado
) {
  console.log("Adoptante autorizado");


  // Segundo IF: Validar mascota
  if (
    mascotaActual.edadMeses >= 3 &&
    mascotaActual.salud > 0 &&
    (
      mascotaActual.tipo === "Perro" ||
      mascotaActual.tipo === "Gato" ||
      mascotaActual.tipo === "Conejo"
    )
  ) {
    console.log("Mascota autorizada para adopción");


    // Tercer IF: Clasificar mascota
    if (
      mascotaActual.edadMeses >= 96 &&
      mascotaActual.energia >= 90 &&
      mascotaActual.salud >= 100
    ) {
      console.log("Categoría Prioritaria");


    } else if (
      mascotaActual.edadMeses >= 60 &&
      (
        mascotaActual.energia >= 75 ||
        mascotaActual.sociabilidad >= 80
      )
    ) {
      console.log("Categoría Especial");


    } else if (
      mascotaActual.edadMeses >= 3 &&
      mascotaActual.energia >= 50 &&
      mascotaActual.salud > 0
    ) {
      console.log("Categoría Regular");


    } else {
      console.log("Sin categoría asignada");
    }


  } else {
    console.log("La mascota no cumple los requisitos");
  }


} else {
  console.log("Adoptante no autorizado");
}
