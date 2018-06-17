package catastrophe.statistics

import kotlin.js.Math

// Source: https://rosettacode.org/wiki/Cumulative_standard_deviation#Kotlin
class CumulativeStandardDeviation {
    private var n = 0
    private var sum = 0.0
    private var sum2 = 0.0

    fun getNextSigma(x: Double): Double {
        n++
        sum += x
        sum2 += x * x
        return Math.sqrt(sum2 / n - sum * sum / n / n)
    }
}