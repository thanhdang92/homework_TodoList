import '../styles/todoList.css'
import FlipMove from 'react-flip-move';
export default function TaskBox({ inputValue, setInputValue, setData, elementNewTask, getTaskId, setIsEdit }) {
    const handleClickCheckBox = (id) => {
        setInputValue((inputValue) => {
            return inputValue.map((task) => {
                if (task.id === id) {
                    return { ...task, checked: !task.checked };
                }
                return task;
            });
        });
        setData((inputValue) => {
            return inputValue.map((task) => {
                if (task.id === id) {
                    return { ...task, checked: !task.checked };
                }
                return task;
            });
        });
    }
    const handleClickDelete = (id) => {

        let valueDelete = inputValue.filter(item => item.id !== id)
        setInputValue(valueDelete)
        setData(valueDelete)
    }
    const handleClickEdit = (id, taskName) => {
        elementNewTask.focus()
        elementNewTask.value = taskName
        getTaskId(id)
        setIsEdit(false)
    };
    return (
        <>
            <ul className="task-box overflow">
                {inputValue.length > 0 ?
                    <FlipMove enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
                        {inputValue && inputValue.length > 0 &&
                            inputValue.map((item, index) => {
                                return (
                                    <li className="task" key={index}>
                                        <label htmlFor={item.id}>
                                            <input
                                                id={item.id}
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => handleClickCheckBox(item.id)}
                                            />
                                            <p className={item.checked ? "checked" : ""}>{item.taskName}</p>
                                        </label>
                                        <div className='list'>
                                            <button onClick={() => handleClickEdit(item.id, item.taskName)}><i class="fa-solid fa-pen icon"></i>Edit</button>
                                            <button onClick={() => handleClickDelete(item.id)}><i class="fa-solid fa-trash icon"></i>Delete</button>
                                        </div>
                                    </li>
                                )
                            })}
                    </FlipMove> : <span>You don't have any task here</span>
                }
            </ul>
        </>
    )
}