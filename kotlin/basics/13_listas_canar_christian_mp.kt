fun calcularTotal(costos: List<Int>): Int{
    var total = 0
    for (costo in costos){
        total+=costo
        if (costo>150){
            println("Vacuna costosa")
        }
    }
    return total
}

fun main(){
    val mascotas = listOf("Firulais", "Mishi", "Copito")
    var iteracion: Int = 1
    for (mascota in mascotas){
        println("Mascota $iteracion : $mascota")
        iteracion++
    }
    val costos = listOf(100,150,200,80,120)
    val total = calcularTotal(costos)
    println("Costo total de vacunas de Christian Cañar: $total")
}
