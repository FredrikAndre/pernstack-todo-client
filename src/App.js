import './App.css'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </>
  )
}

export default App
