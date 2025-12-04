import { it,expect, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import TodoList from './TodoList'

// it('Should check todo when clicked | Snapshot',() => {
//     render(<TodoList />)

//     expect(true).toBe(true)
// })

it('Should check todo when clicked | Snapshot', () => {

    /*
    Mocked result which we expect the fake requester to return
    */
    const mockResult = {
        'asd' :{
            _id: 'id1',
            text: 'text1',
            isCompleted: false  
        }
    }

    vi.mock('../../utils/requester.js',async (importOriginal) => {
        const request = await importOriginal()

        return {
            ...request,
            async get() {
                return mockResult
            }
        }
    })

    render(<TodoList />)

    vi.waitUntil()

    screen.debug()

    expect(true).toBe(true)
})