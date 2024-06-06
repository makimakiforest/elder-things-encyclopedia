// Code generated by ogen, DO NOT EDIT.

package api

import (
	"fmt"
	"io"
)

func (s *ErrRespStatusCode) Error() string {
	return fmt.Sprintf("code %d: %+v", s.StatusCode, s.Response)
}

type ErrResp struct {
	Message OptString `json:"message"`
}

// GetMessage returns the value of Message.
func (s *ErrResp) GetMessage() OptString {
	return s.Message
}

// SetMessage sets the value of Message.
func (s *ErrResp) SetMessage(val OptString) {
	s.Message = val
}

// ErrRespStatusCode wraps ErrResp with StatusCode.
type ErrRespStatusCode struct {
	StatusCode int
	Response   ErrResp
}

// GetStatusCode returns the value of StatusCode.
func (s *ErrRespStatusCode) GetStatusCode() int {
	return s.StatusCode
}

// GetResponse returns the value of Response.
func (s *ErrRespStatusCode) GetResponse() ErrResp {
	return s.Response
}

// SetStatusCode sets the value of StatusCode.
func (s *ErrRespStatusCode) SetStatusCode(val int) {
	s.StatusCode = val
}

// SetResponse sets the value of Response.
func (s *ErrRespStatusCode) SetResponse(val ErrResp) {
	s.Response = val
}

// NewOptString returns new OptString with value set to v.
func NewOptString(v string) OptString {
	return OptString{
		Value: v,
		Set:   true,
	}
}

// OptString is optional string.
type OptString struct {
	Value string
	Set   bool
}

// IsSet returns true if OptString was set.
func (o OptString) IsSet() bool { return o.Set }

// Reset unsets value.
func (o *OptString) Reset() {
	var v string
	o.Value = v
	o.Set = false
}

// SetTo sets value to v.
func (o *OptString) SetTo(v string) {
	o.Set = true
	o.Value = v
}

// Get returns value and boolean that denotes whether value was set.
func (o OptString) Get() (v string, ok bool) {
	if !o.Set {
		return v, false
	}
	return o.Value, true
}

// Or returns value if set, or given parameter if does not.
func (o OptString) Or(d string) string {
	if v, ok := o.Get(); ok {
		return v
	}
	return d
}

type SystemPingGetOK struct {
	Data io.Reader
}

// Read reads data from the Data reader.
//
// Kept to satisfy the io.Reader interface.
func (s SystemPingGetOK) Read(p []byte) (n int, err error) {
	if s.Data == nil {
		return 0, io.EOF
	}
	return s.Data.Read(p)
}
