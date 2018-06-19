package catastrophe.statistics

import kotlin.js.Math

// Source: https://forum.rpg.net/archive/index.php/t-710190.html
//      "For XdY, the standard deviation is sqrt(X*(Y^2-1)/12)."
// TODO: why 12?
//
// Source: https://forum.rpg.net/showthread.php?26312-dice-averages-help
//      "The average of any XdY is X*(Y+1)/2."
//
// NOTE: we intentionally round towards negative infinity aka "round down" to
// emulate the feel of the world's most popular tabletop war game franchise.
class XdYStandardDeviation {

    private val commonDicePoolStandardDeviations: MutableMap<String, Double> = mutableMapOf()
    private val commonDicePoolStandardMeans: MutableMap<String, Int> = mutableMapOf()

    private val commonDicePoolDeviations: MutableMap<String, MutableMap<String, Double>> = mutableMapOf()

    // TODO: get Sigma for 6d3, 3d6, 1d20, 3d20, etc.
    fun getSigma(x: Double, y: Double): Double {

        return Math.sqrt(x * (Math.pow(y, 2.00) - 1) / 12 )
    }

    fun populateStandardDeviations() {

        // TODO: move strings to constants

        // 1d6
        commonDicePoolStandardDeviations["1d6"] = getSigma(1.00, 6.00)

        // 2d6
        commonDicePoolStandardDeviations["2d6"] = getSigma(2.00, 6.00)

        // 3d6
        commonDicePoolStandardDeviations["3d6"] = getSigma(3.00, 6.00)

        // 4d6
        commonDicePoolStandardDeviations["4d6"] = getSigma(4.00, 6.00)

        // 5d6
        commonDicePoolStandardDeviations["5d6"] = getSigma(5.00, 6.00)

        // 6d6
        commonDicePoolStandardDeviations["6d6"] = getSigma(6.00, 6.00)

        // 7d6
        commonDicePoolStandardDeviations["7d6"] = getSigma(7.00, 6.00)

        // 8d6
        commonDicePoolStandardDeviations["8d6"] = getSigma(8.00, 6.00)
    }

    fun printCommonDicePoolStandardDeviations() {
        commonDicePoolStandardDeviations.forEach {
            x -> println("${x.key} has a standard deviation of: ${x.value}")
        }
    }

    fun getMean(x: Double, y: Double): Int {

        return Math.floor(x * (y + 1) / 2)
    }

    fun populateStandardMeans() {

        // TODO: move strings to constants

        // 1d6
        commonDicePoolStandardMeans["1d6"] = getMean(1.00, 6.00)

        // 2d6
        commonDicePoolStandardMeans["2d6"] = getMean(2.00, 6.00)

        // 3d6
        commonDicePoolStandardMeans["3d6"] = getMean(3.00, 6.00)

        // 4d6
        commonDicePoolStandardMeans["4d6"] = getMean(4.00, 6.00)

        // 5d6
        commonDicePoolStandardMeans["5d6"] = getMean(4.00, 6.00)

        // 6d6
        commonDicePoolStandardMeans["6d6"] = getMean(4.00, 6.00)

        // 7d6
        commonDicePoolStandardMeans["7d6"] = getMean(4.00, 6.00)

        // 8d6
        commonDicePoolStandardMeans["8d6"] = getMean(4.00, 6.00)
    }

    fun printCommonDicePoolStandardMeans() {
        commonDicePoolStandardMeans.forEach {
            x -> println("${x.key} has an average roll of: ${x.value}")
        }
    }

    fun populateCommonDicePoolDeviations() {

        // TODO: move strings to constants

        // 1d6
        commonDicePoolDeviations["1d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["1d6"]!! * 1) + commonDicePoolStandardMeans["1d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["1d6"]!! * 2) + commonDicePoolStandardMeans["1d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["1d6"]!! * 3) + commonDicePoolStandardMeans["1d6"]!!))

        // 2d6
        commonDicePoolDeviations["2d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["2d6"]!! * 1) + commonDicePoolStandardMeans["2d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["2d6"]!! * 2) + commonDicePoolStandardMeans["2d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["2d6"]!! * 3) + commonDicePoolStandardMeans["2d6"]!!))
        // 3d6
        commonDicePoolDeviations["3d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["3d6"]!! * 1) + commonDicePoolStandardMeans["3d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["3d6"]!! * 2) + commonDicePoolStandardMeans["3d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["3d6"]!! * 3) + commonDicePoolStandardMeans["3d6"]!!))
        // 4d6
        commonDicePoolDeviations["4d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["4d6"]!! * 1) + commonDicePoolStandardMeans["4d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["4d6"]!! * 2) + commonDicePoolStandardMeans["4d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["4d6"]!! * 3) + commonDicePoolStandardMeans["4d6"]!!))
        // 5d6
        commonDicePoolDeviations["5d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["5d6"]!! * 1) + commonDicePoolStandardMeans["5d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["5d6"]!! * 2) + commonDicePoolStandardMeans["5d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["5d6"]!! * 3) + commonDicePoolStandardMeans["5d6"]!!))
        // 6d6
        commonDicePoolDeviations["6d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["6d6"]!! * 1) + commonDicePoolStandardMeans["6d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["6d6"]!! * 2) + commonDicePoolStandardMeans["6d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["6d6"]!! * 3) + commonDicePoolStandardMeans["6d6"]!!))
        // 7d6
        commonDicePoolDeviations["7d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["7d6"]!! * 1) + commonDicePoolStandardMeans["7d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["7d6"]!! * 2) + commonDicePoolStandardMeans["7d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["7d6"]!! * 3) + commonDicePoolStandardMeans["7d6"]!!))
        // 8d6
        commonDicePoolDeviations["8d6"] = mutableMapOf(
                "s1" to ((commonDicePoolStandardDeviations["8d6"]!! * 1) + commonDicePoolStandardMeans["8d6"]!!),
                "s2" to ((commonDicePoolStandardDeviations["8d6"]!! * 2) + commonDicePoolStandardMeans["8d6"]!!),
                "s3" to ((commonDicePoolStandardDeviations["8d6"]!! * 3) + commonDicePoolStandardMeans["8d6"]!!))
    }

    fun printCommonDicePoolDeviations() {

        try {
            for (p in commonDicePoolDeviations) {
                println("Dice: ${p.key} with a standard deviation of: ${commonDicePoolStandardDeviations[p.key]} and a mean roll of: ${commonDicePoolStandardMeans[p.key]} has the following sigma values:")

                for (v in p.value) {
                    println("${p.key} deviation: ${v.key} = ${v.value}")
                }
            }
        } catch (e: Exception) {
            println("Unable to print commonDicePoolDeviations: ${e.message} caused by: ${e.cause}")
        }
    }
}