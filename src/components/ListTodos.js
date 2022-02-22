import { useState, useEffect } from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      })
      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.log(err.message)
    }
  }

  async function getTodos() {
    const res = await fetch('http://localhost:5000/todos')
    const todoArray = await res.json()
    setTodos(todoArray)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <h1 className='mt-5 mb-3'>List of Todos</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ todo_id, description }) => {
            return (
              <tr key={todo_id}>
                <th scope='row'>{todo_id}</th>
                <td>{description}</td>
                <td>
                  <EditTodo todo={{ todo_id, description }} />
                </td>
                <td>
                  <button
                    onClick={() => deleteTodo(todo_id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos
