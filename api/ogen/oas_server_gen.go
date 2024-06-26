// Code generated by ogen, DO NOT EDIT.

package api

import (
	"context"
)

// Handler handles operations described by OpenAPI v3 specification.
type Handler interface {
	// CharactersGet implements GET /characters operation.
	//
	// Get a list of characters.
	//
	// GET /characters
	CharactersGet(ctx context.Context) (*CharactersGetOK, error)
	// SystemPingGet implements GET /system/ping operation.
	//
	// System ping.
	//
	// GET /system/ping
	SystemPingGet(ctx context.Context) (SystemPingGetOK, error)
	// NewError creates *ErrRespStatusCode from error returned by handler.
	//
	// Used for common default response.
	NewError(ctx context.Context, err error) *ErrRespStatusCode
}

// Server implements http server based on OpenAPI v3 specification and
// calls Handler to handle requests.
type Server struct {
	h Handler
	baseServer
}

// NewServer creates new Server.
func NewServer(h Handler, opts ...ServerOption) (*Server, error) {
	s, err := newServerConfig(opts...).baseServer()
	if err != nil {
		return nil, err
	}
	return &Server{
		h:          h,
		baseServer: s,
	}, nil
}
