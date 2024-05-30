FROM golang:1.22

RUN mkdir /api
WORKDIR /api

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

CMD ["go", "run", "main.go"]