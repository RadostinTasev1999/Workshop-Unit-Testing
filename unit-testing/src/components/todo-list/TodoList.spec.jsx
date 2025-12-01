import { it } from 'vitest'
import { render } from '@testing-library/react'
import TodoList from './TodoList'

it('Should check todo when clicked',() => {
    render(<TodoList />)
})