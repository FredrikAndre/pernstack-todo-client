import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  const [show, setShow] = useState(false)

  const editText = async (id) => {
    try {
      const body = { description }

      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      handleClose()
      window.location = '/'
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='warning' onClick={handleShow}>
        Edit Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit this todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type='text'
            defaultValue={todo.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={() => editText(todo.todo_id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditTodo
