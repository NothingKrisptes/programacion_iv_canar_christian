fun abrirRefugio(){
    println("Abriendo el refugio de mascotas")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Christian Cañar abrió el refugio")
}

fun alimentar(mascota: String,raciones: Int,gramos: Int){
    println("Alimentando a $mascota")
    val total = raciones*gramos
    println("alimento total: $total")
}

fun calcularDescuento(precio: Double): Double{
    var descuento: Double = 0.0
    if (precio>=100){
        descuento=precio*0.15
    }
    return descuento
}

fun calcularRacionTotal(raciones: Array<Int>): Int{
    var total: Int = 0
    for (racion in raciones){
        total+=racion
        if(racion>100){
            println("Ración abundante $racion")
        }
    }
    return total
}

fun main(){
    abrirRefugio()
    abrirRefugio()
    alimentar("Firulais", 5,4)
    alimentar("Mishi", 4,7)
    val descuentoAdoptante = calcularDescuento(123.5)
    println("EL adoptante Christian Cañar tiene este descuento: $descuentoAdoptante")
    val raciones=arrayOf(30,50,80,10,60)
    val totalRaciones = calcularRacionTotal(raciones)
    println("Ración total: $totalRaciones")
}
