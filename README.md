# localqr

Generate QR codes for any address on your local server. Can use either the local network IP or ngrok.

This project started as a clone of [ngrok-qr](https://github.com/patmigliaccio/ngrok-qr)

## Usage

```bash
npx localqr [local|ngrok] [port=3000] [resource]

# Example: localqr ngrok 3000 /users/1234/posts
# Or: localqr (defaults to local ip, port=3000, root resource)
```

The order of arguments doesn't matter -- `npx localqr /space/place 5050 ngrok` works just as well.

If you're not an `npx` fan, you can also install it globally:


```bash
yarn global add localqr
# or
npm i -g localqr
```
