import React, { useState } from "react";
import '../styles/todoList.css'
import Controls from "./Controls";
import TaskBox from "./TaskBox";
import TaskInput from "./TaskInput";
export default function TodoList({ inputValue, setInputValue, data, setData, setElementNewTask, elementNewTask }) {
    const [taskId, setTaskId] = useState()
    const [isEdit, setIsEdit] = useState(true)
    const getTaskId = (id) => {
        setTaskId(id)
    }
    return (
        <>
            <div className="wrapper">
                <TaskInput
                    setData={setData}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    setElementNewTask={setElementNewTask}
                    taskId={taskId}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />
                <Controls
                    setInputValue={setInputValue}
                    data={data}
                    setData={setData}
                    elementNewTask={elementNewTask}
                />
                <TaskBox
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setData={setData}
                    elementNewTask={elementNewTask}
                    getTaskId={getTaskId}
                    setIsEdit={setIsEdit}
                />
            </div>
        </>
    )
}