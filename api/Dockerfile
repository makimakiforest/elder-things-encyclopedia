FROM golang:1.25

WORKDIR /api

COPY go.mod .
COPY go.sum .

RUN go mod download

RUN go install github.com/cosmtrek/air@v1.50.0

COPY . .


CMD ["air", "-c", ".air.toml"]