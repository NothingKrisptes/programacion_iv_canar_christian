fun main(){
    println("Inputs en terminal ReadLine")
    println("¿Como te llamas?")
    val nombre = readLine()
    println("Bienvenido al refugio de mascotas: $nombre")
    println("Croquetas de Firulais (gramos):")
    val croquetasFirulais = readLine()!!.toInt()
    println("Croquetas de Mishi (gramos):")
    val croquetasMishi = readLine()!!.toInt()
    val total = croquetasFirulais+croquetasMishi
    println("Total de croquetas: $total")
    println("Calculadora de Alimento")
    println("Alimento Inicial:")
    val alimentoInicial = readLine()!!.toInt()
    println("Alimento consumido:")
    val alimentoConsumido = readLine()!!.toInt()
    val alimentoRestante = alimentoInicial-alimentoConsumido
    println("Alimento restante: $alimentoRestante")
}
