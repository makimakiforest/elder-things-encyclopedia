package rest

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func System(c echo.Context) error {
	return c.String(http.StatusOK, "pong")
}
