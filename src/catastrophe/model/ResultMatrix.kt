package catastrophe.model

//val Matrix<T> = arrayOf(arrayOf<T>(), arrayOf<T>()

class ResultMatrix<T> (private val t: T) {
    var value: Pair<Array<T>, Array<T>> = Pair(arrayOf(), arrayOf())

    fun createInstance(): ResultMatrix<T> {
        return ResultMatrix(t)
    }
}

val testMatrix = ResultMatrix(jsTypeOf(String))