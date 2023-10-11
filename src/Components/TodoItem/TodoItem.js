import { observer } from "mobx-react-lite"
import todoStore from "../store/todo-store"

const TodoItem = observer(({index,id,completed,title}) => {

    const deleteHandler = () => {
        todoStore.removeTodo(id)
    }
    
    const sucsessHandler = () => {
        todoStore.completedTodo(id)
    }

    return(
        
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className={completed ? 'text-decoration-line-through': ''}>{index+1}. {title}</span>
            <div>
            <button onClick={sucsessHandler} type="button" className={`btn btn-${completed ? 'secondary':'success'}`}>{completed ? 'Выполнено' : 'Выполнить'}</button>
            <button onClick={deleteHandler} type="button" className="btn btn-danger ms-2">Удалить</button>
            </div>
       </li>
    )
})

export default TodoItem