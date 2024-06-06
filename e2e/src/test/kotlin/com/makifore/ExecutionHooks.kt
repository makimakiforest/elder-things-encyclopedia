package com.makifore

import com.codeborne.selenide.Configuration
import com.thoughtworks.gauge.BeforeSpec
import com.codeborne.selenide.WebDriverRunner
import com.thoughtworks.gauge.AfterScenario
import com.thoughtworks.gauge.BeforeSuite
import com.thoughtworks.gauge.ExecutionContext

class ExecutionHooks {
    @AfterScenario
    fun afterScenario() {
        WebDriverRunner.closeWebDriver()
    }

    @BeforeSpec
    fun prepareApp(executionContext: ExecutionContext) {

    }
}