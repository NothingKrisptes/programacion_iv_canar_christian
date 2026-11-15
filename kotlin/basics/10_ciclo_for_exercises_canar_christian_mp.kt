data class Mascota(
    val nombre: String,
    val energia: Int
)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Adopciones")
    for (mascota in 1..6) {
        val costoOriginal = mascota * 25
        var descuento = 0.0
        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Mascota: $mascota")
        println("Costo Original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo Final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto Total de Adopciones %.1f dólares".format(presupuestoTotal))

    println("\n--- Estado de las Mascotas ---")
    val mascotas = arrayOf(
        Mascota("Firulais", 30),
        Mascota("Mishi", 65),
        Mascota("Copito", 95),
        Mascota("Rocky", 130),
        Mascota("Luna", 45),
        Mascota("Toby", 86),
        Mascota("Nala", 68)
    )

    val energiaPaseo = 50
    for (mascota in mascotas) {
        println("Mascota: ${mascota.nombre}")
        println("Energia: ${mascota.energia}")
        when {
            mascota.energia < 50 -> {
                println("Estado: EN REPOSO")
                println("No puede salir a pasear")
            }
            mascota.energia < 80 -> {
                println("Estado: ACTIVO")
            }
            mascota.energia < 120 -> {
                println("Estado: MUY ACTIVO")
            }
            else -> {
                println("Estado: ALTA ENERGÍA")
            }
        }
        if (mascota.energia >= energiaPaseo) {
            val restante = mascota.energia - energiaPaseo
            println("Paseo autorizado")
            println("Energia restante $restante")
        }
    }
}
