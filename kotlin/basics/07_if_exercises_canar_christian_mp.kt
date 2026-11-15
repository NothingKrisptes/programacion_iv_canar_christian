data class SolicitudAdopcion(
    val referencias: Int,
    val aprobada: Boolean
)
data class Mascota (
    val nombre: String,
    val energia: Int
)
data class ProcesoAdopcion (
    val puntaje: Int,
    val documentosCompletos: Boolean,
    val contratoFirmado: Boolean
)

fun main(){
    val solicitud = SolicitudAdopcion(80, true)
    if (solicitud.referencias >= 50 && solicitud.aprobada){
        println("El adoptante puede continuar el proceso")
    }

    val visitas = arrayOf(20,45,85,30,60)
    if (visitas[2]>70){
        println("¡Atención! Día con muchísimas visitas al refugio")
    }else{
        println("Visitas moderadas")
    }

    val evaluaciones = arrayOf(80,65,90)
    val suma = evaluaciones[0]+evaluaciones[1]+evaluaciones[2]
    val promedio = suma/3.0
    if (promedio >= 70){
        println("Hogar apto")
    }else{
        println("Hogar no apto")
    }

    val mascota = Mascota("Firulais",65)
    if (mascota.energia>=80){
        println("Estado optimo")
    }else if (mascota.energia >= 50){
        println("Estado normal")
    }else if (mascota.energia >= 20){
        println("Energia baja")
    }else{
        println("Estado critico")
    }

    val proceso = ProcesoAdopcion(120, false, false)
    if (proceso.puntaje>=100){
        if(proceso.documentosCompletos){
            if(proceso.contratoFirmado){
                println("Adopción Autorizada")
            }else{
                println("Falta firmar el contrato")
            }
        }else{
            println("Complete los documentos")
        }
    }else{
        println("Puntaje insuficiente")
    }

}
