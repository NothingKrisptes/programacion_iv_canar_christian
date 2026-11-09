const val MAX_ADOPCIONES = 10
fun main(){
    var energia = 100
    println(energia)
    println("Autor: Christian Cañar")
    energia = 80
    println("Energia:")
    println(energia)
    println("Tipos de Variables en Kotlin")
    println("Tipo Int")
    var edad: Int = 14
    var adopciones: Int = 10
    println("edad (meses) : $edad")
    println("adopciones : $adopciones")
    println("Tipo Long")
    var donaciones: Long = 900000L
    println("Donaciones : $donaciones")
    println("Tipo Float")
    var peso: Float = 24.5f
    println("Peso (kg): $peso")
    println("Tipo Double")
    var distancia: Double = 1250.55
    println("Distancia al refugio (m): $distancia")
    println("Tipo Char un Caracter")
    var codigo: Char = 'F'
    println("Codigo : $codigo")
    println("Tipo String")
    var nombre: String = "Firulais"
    var raza: String = "Labrador"
    println("Nombre : $nombre, raza : $raza")
    println("Tipo Boolean")
    var disponible: Boolean = true
    println("disponible : $disponible")

    println("VAL CONST VAR")
    val veterinario = "Ana Gómez"
    var cuposDisponibles = 5
    println("Nombre del veterinario: $veterinario")
    println("Cupos disponibles: $cuposDisponibles")
    println("constante Limite: $MAX_ADOPCIONES")
}
