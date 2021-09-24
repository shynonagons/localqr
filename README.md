# localqr

Generate QR codes for any address on your local server. Can use either the local network IP or ngrok.

This project started as a clone of [ngrok-qr](https://github.com/patmigliaccio/ngrok-qr)

## Installation

```bash
yarn global add localqr
```

## Usage

```bash
localqr [local|ngrok] [port=3000] [resource]

# Example: localqr ngrok 3000 /users/1234/posts
# Or: localqr (defaults to local ip, port=3000, root resource)
```

The order of arguments doesn't matter -- `localqr /space/place 5050 ngrok` works just as well.
