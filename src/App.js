import './App.css';
import  {useState} from 'react';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

 const addTodo = (event) => {
   event.preventDefault()
  setTodos([...todos, input])
  setInput([''])
 }
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <p>All your todos here</p>
      <form>
      <div className="input_field">
      <input placeholder="add your todo" value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>ADD</button>
      </div>

      
      </form>

     
     
      {todos.map(todo => {
        return (
          
         <Todo text={todo} 
         
         />
       
        )
        })}
     
    </div>
  );
}

export default App;
