
import ReactDOM from 'react-dom/client'
import TodoItem from './TodoItem'
import { it, expect, vi } from 'vitest'
import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
// import { screen } from '@testing-library/react'
// import { cleanup, getByText, render } from '@testing-library/react
// import { render } from '@testing-library/react'



// it('Should display todo text', async() => {

//     const container = document.createElement('div') // create container

//     document.body.appendChild(container) //

//     const root = ReactDOM.createRoot(container) // create a root to display React components inside a browser DOM node.
    
//     await act(() => {
//         root.render(<TodoItem text="test-1"/>) // render component to React Root element
//     })

//     // Using act ensures that all updates have been applied before we make assertions.
//     const textElement = document.querySelector('label[for=todo1] span') // get textElement

//     expect(textElement.textContent).toEqual("test-1")

//     //expect(true).toBe(true)
// })

// it('Should display todo text',async() => {

//     // await act(() => {
//     //     render(<TodoItem text="test1"/>)
//     // })

//     render(<TodoItem text="test-1" />)

//     const textElement = screen.queryByText('test-1') //  find by element text content

//     // getByText(document, 'test1') // find by element text content

//     expect(textElement).toBeInTheDocument(); 
// })

// it('Should be checked when is completed', () => {
//     render(<TodoItem isCompleted={true} />)

//     const checkbox = screen.queryByRole('checkbox', { name: 'todo1' })

//     expect(checkbox).toBeChecked()

// })


it('Should be checked when clicked',() => {
    const onToggle = vi.fn()

    render(
        <TodoItem 
            isCompleted={false}
            text="checkbox-1" 
            onToggle={onToggle}
            />)

    const checkbox = screen.getByRole('checkbox', { name: 'checkbox-1' })

    fireEvent.click(checkbox)
    
    expect(onToggle).toBeCalled();
    expect(onToggle).toBeCalledTimes(1);
    // screen.debug()
})