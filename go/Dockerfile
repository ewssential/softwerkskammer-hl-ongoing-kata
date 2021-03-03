FROM golang:1.15.0-buster
WORKDIR /app/go
COPY . .
RUN go get -v golang.org/x/tools/gopls
RUN go get -v github.com/ramya-rao-a/go-outline