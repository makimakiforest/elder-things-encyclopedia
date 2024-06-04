FROM maven:3-openjdk-11-slim

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y curl zip

# Gaugeをインストール
RUN curl -SsL https://downloads.gauge.org/stable | sh

# GaugeとJavaをインストール
RUN gauge install java && \
    gauge install html-report && \
    gauge install screenshot

# SDKMANをインストール
RUN curl -s "https://get.sdkman.io" | bash

# SDKMANを初期化
RUN /bin/bash -c "source $HOME/.sdkman/bin/sdkman-init.sh"

# 作業ディレクトリを設定
WORKDIR /app

# プロジェクトのファイルをコピー
COPY . .

RUN mvn compile

# テストを実行するためのコマンドを設定
CMD ["mvn", "clean", "test", "-Dtags=!WIP"]