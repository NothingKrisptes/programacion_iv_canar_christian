fun main() {
    val mascotas = mutableListOf("Firulais", "Mishi", "Copito")

    var option: Int?
    do {
        println("\nRefugio de Mascotas - Christian Cañar")
        println("1. Agregar Mascota")
        println("2. Mostrar Mascotas")
        println("3. Modificar Mascota")
        println("4. Eliminar Mascota")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()?.toIntOrNull()

        when (option) {
            1 -> {
                print("Nombre de la nueva mascota: ")
                val nombre = readLine() ?: ""
                if (nombre.isNotBlank()) {
                    mascotas.add(nombre)
                    println("Mascota incluida")
                } else {
                    println("El nombre no puede estar vacío")
                }
            }
            2 -> {
                println("Mascotas:")
                for ((i, mascota) in mascotas.withIndex()) {
                    println("[$i] Mascota: $mascota")
                }
            }
            3 -> {
                println("Actualizar")
                print("Índice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in mascotas.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine() ?: ""
                    if (nuevoNombre.isNotBlank()) {
                        mascotas[indice] = nuevoNombre
                        println("Mascota Actualizada")
                    } else {
                        println("Nombre no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Índice a eliminar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in mascotas.indices) {
                    mascotas.removeAt(indice)
                    println("Mascota Eliminada")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}
