data class Collar (
    val bateria: Int,
    val activo: Boolean
)

fun main(){
    for (i in 1..5){
        println("Visitando jaula $i")
    }

    for (i in 10 downTo(5)){
        println("Visitando jaula $i")
    }

    for (i in 1..20 step 2){
        println("Visitando jaula $i")
    }

    for (i in 1..10){
        val resultado = 3 * i
        println("3 * $i = $resultado")
        println("3 * $i = ${i*3}")
    }
}
