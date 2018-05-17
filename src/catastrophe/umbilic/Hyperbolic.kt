package catastrophe.umbilic

import kotlin.math.pow

object Hyperbolic {
    @JsName("v")
    fun v(a: Double, b: Double, c: Double, x: Double, y: Double): Double {
        return x.pow(3) + y.pow(3) + (a * x * y) + (b * x) + (c * y)
    }
}