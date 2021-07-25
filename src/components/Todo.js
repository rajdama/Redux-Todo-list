import React, { useState } from 'react';
import {addTodo,deleteTodo,removeTodo} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux'
import "./todo.css"

function Todo() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch()
    const list =  useSelector(state => state.todoReducer.list)

   
    return (
        <div className="main-div text-center">
            <div className="child-div">
                <figure>
                    <figcaption>
                        Add your list here
                    </figcaption>
                </figure>
                <div className="addItems">
                    <input style={{outline:"none"}} type="text" placeholder="Add items.." value = {inputData} onChange = {(e)=>{setInputData(e.target.value)}} required/>
                    < span style={{backgroundColor:"red"}}>
                    <i className="fa fa-plus add-btn" onClick= {()=>{dispatch(addTodo(inputData))
                                setInputData('')}} > </i>
                                </span>
                </div>
                <div className="showItems">
                        {
                            list.map((elem)=>{
                                return(
                                    <div className="eachItem" key={elem.id}>
                                            <span><h3>{elem.data}</h3> </span> 
                                            <span className="todo-btn">
                                                <button onClick= {()=>{dispatch(deleteTodo(elem.id))}}>Delete</button>
                                            </span>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="removeItems">
                    <button onClick= {()=>{dispatch(removeTodo())}}>Remove all</button>
                </div>
            </div>
        </div>
    )
    
}

export default Todo
