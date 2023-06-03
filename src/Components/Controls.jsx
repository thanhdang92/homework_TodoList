import React from "react";
import '../styles/todoList.css'

export default function Controls({ inputValue, setInputValue, data, setData, elementNewTask }) {
    let taskCompleted = data.filter(item => item.checked === true);
    let taskPending = data.filter(item => item.checked !== true);

    const handleClickClearAll = () => {
        setData([]);
        setInputValue([]);
        elementNewTask.focus()
        elementNewTask.value = ''
    }
    const handleClickAll = () => {
        setInputValue(data)
    }
    const handleClickPending = () => {
        setInputValue(taskPending)
    }
    const handleClickCompleted = () => {
        setInputValue(taskCompleted)
    }
    return (
        <>
            <div className="controls">
                <div className="filters">
                    <span className="active" id="all" onClick={() => handleClickAll()}>All</span>
                    <span id="pending" onClick={() => handleClickPending()}>Pending</span>
                    <span id="completed" onClick={() => handleClickCompleted()}>Completed</span>
                </div>
                <button className="clear-btn" onClick={() => handleClickClearAll()}>Clear All</button>
            </div>
        </>
    )
} 