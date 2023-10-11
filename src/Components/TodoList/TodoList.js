import { observer } from "mobx-react-lite";
import TodoItem from "../TodoItem/TodoItem";
import todoStore from "../store/todo-store";

const TodoList = observer(() => {
const {todos} = todoStore
  //в jsx разметке нельзя писать циклы, можно только методы объектов js
  return (
    <ul className="list-group">
      {todos.length ? todos.map((todo,i) => {
        return (
          <TodoItem
            key={todo.id}
            index={i}
            {...todo}
          />
        );
      }):<div className="d-flex justify-content-center"><p className="fs-5">В данный момент список задач пуст...</p></div>}
    </ul>
  );
});

export default TodoList;
