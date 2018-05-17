package catastrophe.umbilic

import kotlin.math.pow

object Parabolic {
    @JsName("v")
    fun v(a: Double, b: Double, c: Double, d: Double, x: Double, y: Double): Double {
        return (x.pow(2) * y) + y.pow(4) + (a * x.pow(2)) + (b * y.pow(2)) + (c * x) + (d * y)
    }
}