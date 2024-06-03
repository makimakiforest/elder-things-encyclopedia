FROM maven:3.8.6-openjdk-11-slim

RUN apt-get update && apt-get install -y \
    curl \
    unzip

RUN apt-get update && apt-get install -y \
    curl \
    && curl -sSL https://downloads.gauge.org/stable | sh \
    && gauge install java

WORKDIR /usr/src/app

COPY pom.xml .

RUN mvn dependency:resolve

COPY src ./src

RUN mvn package

CMD tail -f /dev/null
