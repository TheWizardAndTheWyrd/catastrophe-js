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
//    val foldResult = Fold.v(1.00, 1.01)
    // Assume we're tracking missed monthly dues payments for a Lode of 3 members over 1, 2, and 3 years.  In that time, one member misses on dues payment.
//    val foldResult = Fold.v(0.0092592592574074, 1 / 10.00) // a = standard deviation of missing one dues payment in x = 1st year of a decade.
//    val foldResult = Fold.v(0.065319726467686, 2 / 10.00) // a = standard deviation of missing one dues payment in x = 2nd year of decade.
    val foldResult = Fold.v(	0.054054054048649, 3 / 10.00) // a = standard deviation of missing one dues payment in x = 3rd year of decade.
    println("Fold catastrophe V=$foldResult")
    /*
    The above values for a can be derived from: https://docs.google.com/spreadsheets/d/1FHIyUMMWs_m_XpACUO0NDjuhKYbPCdxNITbg5cxQjr4/edit#gid=0
    The standard deviations can quickly be calculated here: http://www.calculator.net/standard-deviation-calculator.html

    We can see that although there was only one break in the Circle by way of 1/3 Dues miss for 1/12 months of 1/3 years,
    the value for V from Fold.v keeps trending past 0.  How can the tide be stemmed?  That likely requires adjusting the
    parameters used to calculate the value of V.

    In other words, we need to plot out what happens with one miss, and x =+ 0.01 for each month (is this the right
    expression for x?).

    Here's the lesson: nothing is free (like beer) in the Universe. But, gnosis is free (as in knowledge) to those that
    Know, Dare, Will, and keep Silence; especially concerning matters of their direct manipulation of Space-Time by way
    of Magick such that Catastrophes are either evoked or banished at will.
     */

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
