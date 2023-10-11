import React from 'react'
import styles from './style.module.css'
import { observer } from 'mobx-react-lite'
import todoStore from '../store/todo-store'

const Footer = observer(() => {

    const deleteAllHandler = () => {
        todoStore.clearAllTodo()
    }

    // const historyTodos = () => {
    //     replaceTodos()
    // }
    
    if(todoStore.todos.length) {
        return (
            <div className='mt-3'>
            <footer className={styles.bg}>
                <div className='d-flex justify-content-center'>
                {/* <button onClick={historyTodos} type="button" className="btn btn-light m-2">Восстановить задачи<br></br>(при удалении всех)</button> */}
                <button onClick={deleteAllHandler} type="button" className="btn btn-warning m-2">Удалить все</button>
                {/* <button onClick={completedAllHandler} type="button" className='btn btn-warning m-2'>Выполнить все</button> */}
                </div>
            </footer>
            </div>
        )
    }
 
})

export default React.memo(Footer)