## What it does
This is a password validator that follows the security guidelines provided by [NIST](https://www.nist.gov/).

Passwords MUST

1. Have an 8 character minimum
2. Have a 64 character maximum
3. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

Type a password in the input, and click `Check` to confirm whether it meets the criteria listed above.

## Running the local server

### System Requirments

* node v8.10.0+
* npm v5.0.0+

### Run

```
yarn install
yarn start
yarn test
```

Server will be available at http://localhost:3000/ and the ./app directory will be mounted to '/'.
