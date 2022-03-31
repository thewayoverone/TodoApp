import React from 'react';
import {Checkbox} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './TodoRender.css';

const styles = {
    radioButton: {
        color: '#882fc0'
    },
    arrow: {
        fontSize: '0.85rem'
    }
}

const Todo = ({todo, handleMarkTodo, index, handleOpenTodo}) => {
    const isFinishedTodo = todo.isFinished && 'todo-finished';

    return (
        <div className="todo-container">
            <span>
                <Checkbox
                    icon={<RadioButtonUncheckedIcon style={styles.radioButton}  />}
                    checkedIcon={<CheckCircleOutlineIcon />}
                    onClick={(e: any) => handleMarkTodo(e.target.checked, index)}
                    checked={todo.isFinished}
                />
            </span>

            <div className="todo-item" onClick={() => handleOpenTodo({...todo, index})}>
                <span className={isFinishedTodo}>{todo.todoName}</span>
                <ArrowForwardIosIcon style={styles.arrow} />
            </div>
        </div>
    )
}


const TodoRender = ({todos, handleMarkTodo, handleOpenTodo}) => {
    return(
        <div className="todos-rendered-wrapper">
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleMarkTodo={handleMarkTodo}
                    index={index}
                    handleOpenTodo={handleOpenTodo}
                />
            ))}
        </div>
    )
}

export default TodoRender;