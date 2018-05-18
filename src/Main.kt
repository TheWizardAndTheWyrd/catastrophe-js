import kotlin.dom.*
import kotlin.math.pow

import catastrophe.*
import catastrophe.model.ResultMatrix
import catastrophe.model.testMatrix
import catastrophe.umbilic.*
import kotlin.browser.document

@JsName("demoValues")
fun main(args: Array<String>) {
    // Let's calculate some individual catastrophe values:
    val foldResult = Fold.v(1.00, 1.01)
    println("Fold catastrophe V=$foldResult")

    val cuspResult = Cusp.v(1.00, 1.00, 1.01)
    println("Cusp catastrophe V=$cuspResult")

    val swallowtailResult = Swallowtail.v(1.00, 1.00, 1.00, 1.01)
    println("Swallowtail catastrophe V=$swallowtailResult")

    val butterflyResult = Butterfly.v(1.00, 1.00, 1.00, 1.00, 1.01)
    println("Butterfly catastrophe V=$butterflyResult")

    val hyperbolicResult = Hyperbolic.v(1.00, 1.00, 1.00, 1.00, 1.01)
    println("Hyperbolic catastrophe V=$hyperbolicResult")

    val ellipticResult = Elliptic.v(1.00, 1.00, 1.00, 1.00, 1.01)
    println("Elliptic catastrophe V=$ellipticResult")

    val parabolicResult = Parabolic.v(1.00, 1.00, 1.00, 1.00, 1.01, 1.00)
    println("Parabolic catastrophe V=$parabolicResult")

    // Let's experiment with our ResultMatrix
    val resultMatrix = testMatrix.createInstance()
    println("Result matrix value: ${resultMatrix.value}")

    // Let's modify the result matrix:
    resultMatrix.value.first[0] = "Hello"
    resultMatrix.value.second[0] = "World!"

    println("Result matrix value: ${resultMatrix.value}")

    // Let's add our results to the DOM:
    val outputContainer = document.getElementById("outputContainer")!!
    outputContainer.appendElement("p", { appendText("Fold = $foldResult") })
    outputContainer.appendElement("p", { appendText("Cusp = $cuspResult") })
    outputContainer.appendElement("p", { appendText("Swallowtail = $swallowtailResult") })
    outputContainer.appendElement("p", { appendText("Butterfly = $butterflyResult") })
    outputContainer.appendElement("p", { appendText("Hyperbolic = $hyperbolicResult") })
    outputContainer.appendElement("p", { appendText("Elliptic = $ellipticResult") })
    outputContainer.appendElement("p", { appendText("Parabolic = $parabolicResult") })
    outputContainer.appendElement("p", { appendText("First Result Matrix value = ${resultMatrix.value}") })

    // Let's do some real work with a Cusp Catastrophe.  Cf. https://en.wikipedia.org/wiki/Catastrophe_theory#/media/File:Cusp_catastrophe.svg

    // Let's do a high stress dog test
    // a < 0
    var stressBaseX: Double = 0.02
    val stressBaseA: Double = calcA(stressBaseX)
    val stressBaseB: Double = calcB(stressBaseX)

    val stressResult0 = Cusp.v(stressBaseA, stressBaseB, stressBaseX)
    println("stressResult0: $stressResult0")
    outputContainer.appendElement("p", { appendText("Cusp Stress Result 0 = $stressResult0") })

    // Create a ResultMatrix
    val resultAB = ResultMatrix(0.00)
    val resultX = arrayOf<Double>()

    for (i in 0 .. 10) {
        stressBaseX += 0.01
        val a = calcA(stressBaseX)
        val b = calcB(stressBaseX)

        val temp = Cusp.v(a, b, stressBaseX)

        resultAB.value.first[i] = a
        resultAB.value.second[i] = b
        resultX[i] = temp
    }

    // Display some results
    for (i in 0 .. 10) {
        outputContainer.appendElement("p", { appendText("a=${resultAB.value.first[i]}, b=${resultAB.value.second[i]}, V=${resultX[i]}") })
        println("a=${resultAB.value.first[i]}, b=${resultAB.value.second[i]}, V=${resultX[i]}")
    }
}

private fun calcB(stressBaseX: Double) = -8 * stressBaseX.pow(3)

private fun calcA(stressBaseX: Double) = -6 * stressBaseX.pow(2)
