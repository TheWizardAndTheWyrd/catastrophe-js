import kotlin.dom.*

import catastrophe.*
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

    // Let's add our results to the DOM:
    val outputContainer = document.getElementById("outputContainer")!!
    outputContainer.appendElement("p", { appendText("Fold = $foldResult") })
    outputContainer.appendElement("p", { appendText("Cusp = $cuspResult") })
    outputContainer.appendElement("p", { appendText("Swallowtail = $swallowtailResult") })
    outputContainer.appendElement("p", { appendText("Butterfly = $butterflyResult") })
    outputContainer.appendElement("p", { appendText("Hyperbolic = $hyperbolicResult") })
    outputContainer.appendElement("p", { appendText("Elliptic = $ellipticResult") })
    outputContainer.appendElement("p", { appendText("Parabolic = $parabolicResult") })
}
