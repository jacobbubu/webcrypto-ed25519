import { version as nodeVersion } from 'node:process'

import { satisfies } from 'compare-versions'

import { C } from './common'

const wicgKeyAlgorithm: KeyAlgorithm = {
  name: C.wicgAlgorithm,
}

const nodeKeyAlgorithm: EcKeyAlgorithm = {
  name: C.nodeAlgorithm,
  namedCurve: C.nodeNamedCurve,
}

export const Ed25519Algorithm: KeyAlgorithm =
  satisfies(nodeVersion, '^16.17.0') || satisfies(nodeVersion, '^18.4.0')
    ? wicgKeyAlgorithm
    : nodeKeyAlgorithm

export function ponyfillEd25519(subtle = crypto.subtle): SubtleCrypto {
  return subtle
}

export function polyfillEd25519(): void {
  //
}
