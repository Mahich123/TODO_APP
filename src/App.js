import './App.css';
import  { useState} from 'react';
import Todo from './Todo';
// import db from './firebase'
// import { collection, onSnapshot, query } from '@firebase/firestore';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  // const dbCollection = collection(db,'todos');
  // const q = query(dbCollection);
  // useEffect(() => {
      
  //    onSnapshot(q, (snapshot) => {
  //     setTodos(snapshot.doc.map(doc => doc.data().todo))
  //    })
  //   // db.collection('todos').onSnapshot(snapshot => {
  //     //    setTodos(snapshot.doc.map(doc => doc.data().todo))
  //     // })
  // }, []);

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
