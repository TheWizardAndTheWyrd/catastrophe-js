package catastrophe

import kotlin.math.pow

object Swallowtail {
    @JsName("v")
    fun v(a: Double, b: Double, c: Double, x: Double): Double {
        return x.pow(5) + (a * x.pow(3)) + (b * x.pow(2)) + (c * x)
    }
}