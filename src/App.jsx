import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [elementNewTask, setElementNewTask] = useState()

  return (
    <div className="App">
      <TodoList
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setElementNewTask={setElementNewTask}
        elementNewTask={elementNewTask}
      />
    </div>
  );
}

export default App;
