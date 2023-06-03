import React, { useRef, useState } from "react";
import barsIcon from '../assets/hamburger.png'
import '../styles/todoList.css'

export default function TaskInput({ inputValue, setInputValue, setData, setElementNewTask, taskId, setIsEdit, isEdit }) {
    const inputRef = useRef()
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (isEdit && e.target.value !== '') {
                setInputValue([...inputValue, { id: new Date().getTime(), taskName: e.target.value, checked: false }]);
                setData([...inputValue, { id: new Date().getTime(), taskName: e.target.value, checked: false }]);
            }
            else {
                setInputValue((inputValue) => {
                    return inputValue.map((task) => {
                        if (task.id === taskId && e.target.value !== '') {
                            return { ...task, taskName: e.target.value };
                        }
                        return task;
                    });
                });
                setData((inputValue) => {
                    return inputValue.map((task) => {
                        if (task.id === taskId && e.target.value !== '') {
                            return { ...task, taskName: e.target.value };
                        }
                        return task;
                    });
                });
            }
            if (e.target.value === '') {
                alert('123')
            }
            setIsEdit(true)
            inputRef.current.value = ''
        }
        setElementNewTask(inputRef.current)
    }
    return (
        <>
            <div className="task-input">
                <img src={barsIcon} alt="icon" />
                <input ref={inputRef} type="text" placeholder="Add a new task"
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
        </>
    )
}
