package com.makifore.web

import com.thoughtworks.gauge.Step
import com.codeborne.selenide.Condition.*
import com.codeborne.selenide.Selenide.*

class Page {
    @Step("キャラクター一覧画面を開く")
    fun openCharacterPage() {
        open("http://localhost:10070/")
    }

    @Step("キャラクター一覧画面が表示されること")
    fun displayCharacterPage() {
        `$`(".character-page").shouldBe(exist)
    }

    @Step("ヘッダーに<title>と表示されること")
    fun displayHeaderTitle (title: String) {
        `$`(".header-title").shouldHave(exactText(title))
    }
}