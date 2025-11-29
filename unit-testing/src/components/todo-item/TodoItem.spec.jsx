import { it, expect, beforeEach } from 'vitest'
import ReactDOM from 'react-dom/client'
import TodoItem from './TodoItem'
import { act } from 'react'
import { cleanup, getByText, render } from '@testing-library/react'



it('Should display todo text', async() => {

    const container = document.createElement('div')

    document.body.appendChild(container)

    const root = ReactDOM.createRoot(container)
    
    await act(() => {
        root.render(<TodoItem text="test-1"/>) // render component to React Root element
    })
    const textElement = document.querySelector('label[for=todo1] span') // get textElement

    expect(textElement.textContent).toEqual("test-1")

    //expect(true).toBe(true)
})

it('Should display todo text',() => {
    render(<TodoItem text="test1"/>)

    //const textElement = document.querySelector('label[for=todo1] span') // get textElement

    const textElement = screen.queryByText('test1')

    // getByText(document, 'test1') // find by element text content

    expect(textElement).toBeInTheDocument(); 
})

it('Should be checked when is completed', () => {
    render(<TodoItem isCompleted={true} />)

    const checkbox = screen.queryByRole('checkbox', { name: 'todo1' })

    expect(checkbox).toBeChecked()

})