# @jacobbubu/webcrypto-ed25519

[![Build Status](https://github.com/jacobbubu/webcrypto-ed25519/workflows/Build%20and%20Release/badge.svg)](https://github.com/jacobbubu/webcrypto-ed25519/actions?query=workflow%3A%22Build+and+Release%22)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/webcrypto-ed25519/badge.svg)](https://coveralls.io/github/jacobbubu/webcrypto-ed25519)
[![npm](https://img.shields.io/npm/v/@jacobbubu/webcrypto-ed25519.svg)](https://www.npmjs.com/package/@jacobbubu/webcrypto-ed25519/)

# Ed25519 Ponyfill & Polyfill for WebCrypto

`@yoursunny/webcrypto-ed25519` package adds [Ed25519](https://ed25519.cr.yp.to/) crypto algorithm to [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) in browsers.
The crypto implementation comes from [@noble/ed25519](https://www.npmjs.com/package/@noble/ed25519) library.

## Caution

This library should be considered suitable for research and experimentation.
Further code and security review is needed before utilization in a production application.

## Usage

```js
import { Ed25519Algorithm, polyfillEd25519, ponyfillEd25519 } from "@yoursunny/webcrypto-ed25519";

// ponyfill: crypto.subtle remains unchanged; call methods on the returned SubtleCrypto instance.
const subtlePonyfill = ponyfillEd25519();
subtlePonyfill.generateKey(Ed25519Algorithm, true, ["sign", "verify"]);

// polyfill: crypto.subtle is patched to support Ed25519 and NODE-ED25519 algorithms.
polyfillEd25519();
crypto.subtle.generateKey(Ed25519Algorithm, true, ["sign", "verify"]);
```

## Algorithm Identifier

The ponyfill and polyfill for browser recognize two forms of algorithm identifier:

* `{ name: "Ed25519" }`, as specified in [Secure Curves in the Web Cryptography API](https://wicg.github.io/webcrypto-secure-curves/) draft and implemented in Node.js 18.4.0 and later.
* `{ name: "NODE-ED25519", namedCurve: "NODE-ED25519" }`, as implemented in Node.js 18.3.0 and earlier.

This package does not provide any ponyfill or polyfill for Node.js.
The exported `Ed25519Algorithm` variable gives a suitable algorithm identifier for the current Node.js version, which helps you writing code to support Node.js before and after 18.4.0.

## Features

* `subtle.generateKey`
* `subtle.exportKey`
  * format: `"jwk"` or `"spki"`
* `subtle.importKey`
  * format: `"jwk"` or `"spki"`
* `subtle.sign`
* `subtle.verify`

All other methods and non-Ed25519 keys are passed to the original `SubtleCrypto` implementation.
