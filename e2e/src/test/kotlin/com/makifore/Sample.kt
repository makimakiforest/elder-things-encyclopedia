import com.thoughtworks.gauge.Step

class StepImplementation {

    @Step("Hello world")
    fun helloWorld() {
        println("Hello world")
    }
}