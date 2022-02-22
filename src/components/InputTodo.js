import { useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const res = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      console.log(body)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <h1 className='text-center my-5'>Input Todo</h1>
      <form onSubmit={onSubmitForm} className='d-flex'>
        <input
          type='text'
          placeholder='Add Todo'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success ml-2'>Add</button>
      </form>
    </>
  )
}

export default InputTodo
