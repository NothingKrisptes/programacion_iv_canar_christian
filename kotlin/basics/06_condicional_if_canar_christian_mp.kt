fun main(){
    println("Condicional If")
    println("Condicional If Simple o un camino")
    var energia = 80
    if (energia>=50){
        println("Firulais puede salir a pasear")
    }

    println("Condicional if-else o dos caminos")
    energia = 30
    if(energia>=50){
        println("Firulais puede salir a pasear")
    }else{
        println("Energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70
    if (energia>=100){
        println("Firulais puede salir a pasear")
    }else if (energia>=50){
        println("Energia suficiente")
    }else{
        println("Energia insuficiente")
    }

    println("Condicional enlazada")
    energia = 70
    val vacunado = true
    if (energia>=100){
        println("Firulais puede salir a pasear")
        if (vacunado){
            println("Puede ir al parque")
        }
    }else if (energia>=50){
        println("Energia suficiente")
        if (vacunado){
            println("Puede ir al parque")
        }
    }else{
        println("Energia insuficiente")
    }
}
