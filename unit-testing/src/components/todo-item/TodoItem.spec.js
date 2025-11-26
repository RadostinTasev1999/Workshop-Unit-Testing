import { it, expect } from 'vitest'
import ReactDOM from 'react-dom/client'
import TodoItem from './TodoItem'
import { act } from 'react'

// it('Should be true',() => {
//     expect(true).toBe(true)
// })


it('Should display todo text', async() => {
    const container = document.createElement('div'); // create container

    document.body.appendChild(container) // add container to document body

    const root = ReactDOM.createRoot(container) // create root element

    await act(() => {
        root.render(<TodoItem text="test-1"/>) // render component to React Root element
    })
    const textElement = document.querySelector('label[for=todo1] span') // get textElement

    expect(textElement.textContent).toEqual("test-1")

    //expect(true).toBe(true)
})