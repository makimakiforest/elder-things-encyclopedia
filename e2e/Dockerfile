FROM maven:3-openjdk-11-slim

RUN apt-get update && apt-get install -q -y \
    curl \
    zip \
    apt-transport-https \
    gnupg2 \
    ca-certificates

WORKDIR /app
COPY . .

RUN curl -s "https://get.sdkman.io" | bash

RUN /bin/bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && sdk env install"

RUN curl -SsL https://github.com/getgauge/gauge/releases/download/v1.5.6/gauge-1.5.6-linux.x86_64.zip -o gauge.zip && \
    unzip gauge.zip -d /usr/local/bin && \
    rm gauge.zip && \
    gauge install java && \
    gauge install screenshot && \
    gauge install html-report && \
    gauge install spectacle && \
    gauge install xml-report


ENV PATH=$HOME/.gauge:$PATH

RUN mvn compile

ENV gauge_classpath=/app/target/classes

CMD ["tail", "-f", "/dev/null"]