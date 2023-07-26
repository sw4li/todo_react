import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([])

  const onchangeHandler = (value) => {
    setTodo(value.trim());
  }
  const saveTodo = () => {
    setTodoList([...todoList, { id: Date.now(), text: todo, status:false }])
    document.getElementById('input').value=" ";
    document.getElementById('input').focus()
  }

  console.log(todoList);

  const deleteHandler=(id)=>{
     setTodoList(todoList.filter((item)=>{
      if(item.id !== id){
        return item
      }
     } ))
  }
  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>

        <div className='flex'>
          <div>
            <div className="input">
              <input type="text" id='input' placeholder="🖊️ Add item..." onChange={(e) => onchangeHandler(e.target.value)} />
              <FontAwesomeIcon onClick={saveTodo} icon={faPlus} />
            </div>
            <div className='flex'>
              <div className="todos">
                {todoList.map((item) => {
                  return (
                    <div className="todo">
                      <div className="left">
                        <input onChange={(e)=>{
                           setTodoList(todoList.filter((obj)=> {
                            if(obj.id === item.id){
                                obj.status=e.target.checked
                            }
                            return obj
                           } ))
                        }}  type="checkbox" name="" id="" />
                        <p>{item.text}</p>
                      </div>
                      <div className="right">
                      <FontAwesomeIcon onClick={()=>deleteHandler(item.id)} icon={faTrash} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div style={{width:"300px",textAlign:"center"}}>
          <h1>task done</h1>
            {todoList.map((item)=>{
              if(item.status === true){
                 return  <h2>{item.text}</h2>
              }
            })}
           
          </div>
        </div>

      </div>
    </>

  );
}

export default App;