package com.makifore

import com.codeborne.selenide.Configuration
import com.codeborne.selenide.WebDriverRunner
import com.thoughtworks.gauge.AfterScenario
import com.thoughtworks.gauge.BeforeSuite

class ExecutionHooks {
    @BeforeSuite
    fun beforeSuite() {
        prepareSelenide()
    }

    @AfterScenario
    fun afterScenario() {
        WebDriverRunner.closeWebDriver()
    }

    private fun prepareSelenide() {
        Configuration.baseUrl = "localhost:10070"
        Configuration.headless = true
        Configuration.remote = null
    }
}