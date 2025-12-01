import { cleanup } from '@testing-library/react'
import { beforeAll } from 'vitest'
import ReactDOM from 'react-dom/client'
import '@testing-library/jest-dom/vitest'

beforeAll(() => {
    cleanup();
});