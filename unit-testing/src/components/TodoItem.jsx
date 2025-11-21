import { useState } from "react"

export default function TodoItem({
  _id,
  text,
  isCompleted
}) {

  const [input, setInput] = useState(() => {
      return isCompleted
  })

  const handleChange = () => {
    //const target = e.target
    const isChecked = isCompleted ? false : true

    setInput(isChecked)
  }
  
  return (
    <>
    <li className="py-4">
      <div className="flex items-center">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          checked={input} //false
          onChange={handleChange}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label htmlFor="todo1" className="ml-3 block text-gray-900">
          <span className="text-lg font-medium">{text}</span>
          <span className="text-sm font-light text-gray-500">
            Due on 4/1/23
          </span>
        </label>
      </div>
    </li>
    </>  
  )
}


