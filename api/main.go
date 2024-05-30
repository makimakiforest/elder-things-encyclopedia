package main

import (
	"context"
	"elder-things-encyclopedia/middleware"
	"os"
	"os/signal"
	"time"

	"elder-things-encyclopedia/logger"
	"elder-things-encyclopedia/rest"

	"github.com/labstack/echo/v4"
	e_middleware "github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	middleware.InitLogging(e, logger.Logger)

	e.HideBanner = true
	e.HidePort = true

	e.Use(e_middleware.CORS())
	e.Use(e_middleware.RemoveTrailingSlash())

	e.GET("/system/ping", rest.System)

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	go func() {
		logger.Logger.Info("Starting server on :10080")
		if err := e.Start(":10080"); err != nil {
			e.Logger.Fatal("shutting down the server")
		}
	}()

	<-ctx.Done()
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()
	if err := e.Shutdown(ctx); err != nil {
		e.Logger.Fatal(err)
	}
}
