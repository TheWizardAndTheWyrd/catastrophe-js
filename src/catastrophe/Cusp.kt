package catastrophe

import kotlin.math.pow

object Cusp {
    @JsName("v")
    fun v(a: Double, b: Double, x: Double): Double {
        return x.pow(4) + (a * x.pow(2)) + (b * x)
    }
}