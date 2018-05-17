package catastrophe

import kotlin.math.pow

object Butterfly {
    @JsName("v")
    fun v(a: Double, b: Double, c: Double, d: Double, x: Double): Double {
        return x.pow(6) + (a * x.pow(4)) + (b * x.pow(3)) + (c * x.pow(2)) + (d * x)
    }
}