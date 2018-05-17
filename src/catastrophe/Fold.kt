package catastrophe

import kotlin.math.pow

object Fold {
    @JsName("v")
    fun v(a: Double, x: Double): Double {
        return x.pow(3) + (a * x)
    }
}