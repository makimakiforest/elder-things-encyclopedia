package makifore

import com.thoughtworks.gauge.Step
import junit.framework.Assert

class StepImplementation {
    @Step("test step")
    fun sampleStep() {
        Assert.assertTrue(true)
    }
}