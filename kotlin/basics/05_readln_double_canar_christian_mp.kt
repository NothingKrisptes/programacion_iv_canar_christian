fun main(){
    println("Reporte de adopción")
    println("¿Nombre del adoptante?")
    val nombre = readLine()
    println("Cantidad de mascotas:")
    val mascotas = readLine()!!.toInt()
    println("Costo por mascota:")
    val costo = readLine()!!.toDouble()
    println("Presupuesto disponible:")
    val presupuesto = readLine()!!.toDouble()
    val costoTotal = mascotas * costo
    val saldo = presupuesto - costoTotal
    println("Reporte")
    println("Adoptante: $nombre")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}
