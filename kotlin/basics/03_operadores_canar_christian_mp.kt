fun main(){
    println("Operadores")
    println("Operadores Aritmeticos")
    var costoAdopcion: Double = 10.50
    var costoVacuna: Double = 5.50
    var suma: Double = costoAdopcion + costoVacuna

    println("Suma + : $costoAdopcion + $costoVacuna = ${costoAdopcion+costoVacuna}")
    println("Suma + : $costoAdopcion + $costoVacuna = ${suma}")
    println("Resta - : $costoAdopcion - $costoVacuna = ${costoAdopcion-costoVacuna}")
    println("Multiplicación * : $costoAdopcion * $costoVacuna = ${costoAdopcion*costoVacuna}")
    println("Division / : $costoAdopcion / $costoVacuna = ${costoAdopcion/costoVacuna}")
    println("Residuo % : $costoAdopcion % $costoVacuna = ${costoAdopcion%costoVacuna}")

    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 *,/,%")
    println("3 +,-")
    val croquetas = 10+3*5+5
    println("Croquetas $croquetas")
    val racion = 15/5*5
    println("Racion $racion")
    val presupuesto = 100+20/4*3-10%3
    println("Presupuesto $presupuesto")

    println("Operadores de Comparación")
    println("Igual a == ${10==10}")
    println("Igual a == ${10==11}")
    println("Diferente de != ${5!=10}")
    println("Diferente de != ${10!=10}")
    println("Mayor que > ${5>10}")
    println("Mayor que > ${15>10}")
    println("Menor que < ${5<10}")
    println("Menor que < ${15<10}")
    println("Mayor o igual que >= ${5>=10}")
    println("Mayor o igual que >= ${15>=10}")
    println("Mayor o igual que >= ${10>=10}")
    println("Menor o igual que <= ${15<=10}")
    println("Menor o igual que <= ${10<=10}")
    println("Menor o igual que <= ${5<=10}")

}
