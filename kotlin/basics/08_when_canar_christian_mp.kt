fun main(){
    val seccion = 2
    when(seccion){
        1 -> println("Sección: Perros")
        2 -> println("Sección: Gatos")
        3 -> println("Sección: Conejos")
        else -> println("Sección No Disponible")
    }

    println("Incluya el día (1-7):")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5->println("Día de adopciones")
        6,7->println("Día de descanso")
        else->println("Día inválido")
    }

    println("Ingrese la energía de la mascota:")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39->println("Energía baja")
        in 40..79->println("Energía media")
        in 80..100->println("Energía alta")
        else->println("Energía inválida")
    }

    val presupuesto = 80
    val hayCupos = true
    val costoAdopcion = 40
    /*
        Trabajo con condicionales y comentarios
        con when
    */
    when{
        presupuesto>=costoAdopcion&&hayCupos->{
            val restante = presupuesto-costoAdopcion
            println("Adopción Autorizada")
            println("Presupuesto Restante $restante")
        }
        presupuesto<costoAdopcion && hayCupos->{
            println("Presupuesto Insuficiente")
        }
        !hayCupos->{
            println("No hay cupos disponibles")
        }
    }
}
