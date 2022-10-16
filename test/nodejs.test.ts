import { webcrypto } from 'node:crypto'

import { Ed25519Algorithm } from '../src'
import { testSubtleCrypto } from './body'

describe('nodejs', () => {
  it('subtle', async () => {
    await testSubtleCrypto((webcrypto as any).subtle, Ed25519Algorithm)
  })
})
