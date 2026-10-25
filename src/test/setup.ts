import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// `globals: false` no Vitest: sem isto o DOM acumula entre testes.
afterEach(() => {
  cleanup()
})
