fun main(){
    val raciones = arrayOf(30,50,80,100,60)
    println(raciones[0])
    println(raciones[2])
    println(raciones[4])
    raciones[4]=150
    println(raciones[4])
    for (racion in raciones){
        println("Racion")
        val racionDoble = racion*2
        println("Racion Doble $racionDoble")
        if (racionDoble>=150){
            val racionReducida = racionDoble - 70
            println("Racion Reducida: $racionReducida")
        }
    }
}
