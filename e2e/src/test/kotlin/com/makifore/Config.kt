package com.makifore

import com.sksamuel.hoplite.ConfigLoaderBuilder
import com.sksamuel.hoplite.addEnvironmentSource
import com.sksamuel.hoplite.addResourceSource

data class Selenide(
    val baseUrl: String,
    val headless: Boolean,
    val remote: String?
)

data class Config(
    val selenide: Selenide
)
