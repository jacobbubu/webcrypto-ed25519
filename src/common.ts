export const C = {
  wicgAlgorithm: 'Ed25519',
  nodeAlgorithm: 'NODE-ED25519',
  nodeNamedCurve: 'NODE-ED25519',
  kty: 'OKP',
  crv: 'Ed25519',
  oid: '2B6570'.toLowerCase(),
} as const

export function isEd25519Algorithm(a: AlgorithmIdentifier | KeyAlgorithm): boolean {
  return (
    a === C.wicgAlgorithm ||
    a === C.nodeAlgorithm ||
    (a as KeyAlgorithm).name === C.wicgAlgorithm ||
    ((a as EcKeyAlgorithm).name === C.nodeAlgorithm &&
      (a as EcKeyAlgorithm).namedCurve === C.nodeNamedCurve)
  )
}
