package catastrophe.umbilic

import kotlin.math.pow

object Elliptic {
    @JsName("v")
    fun v(a: Double, b: Double, c: Double, x: Double, y: Double): Double {
        return (x.pow(3) / 3) - (x * y.pow(2)) + (a * (x.pow(2) + y.pow(2))) + (b * x) + (c * y)
    }
}