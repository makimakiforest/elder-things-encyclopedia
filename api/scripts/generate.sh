#!/bin/sh

go get github.com/ogen-go/ogen/cmd/ogen
go run github.com/ogen-go/ogen/cmd/ogen --target ogen --clean openapi/spec/rest.yaml