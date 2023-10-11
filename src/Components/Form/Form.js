import { useState } from "react";
import todoStore from "../store/todo-store";
import { observer } from "mobx-react-lite";


const Form = observer(() => {


const [title,setTitle] = useState('') //состояние для значения инпута

const changeHandler = (e) => {
    setTitle(e.target.value)//строки иммутабельны, поэтому не нужно использовать функцию для изменения состояния
  }

const submitHandler = (e) => {
 e.preventDefault()
 
 let newTitle = title.trim()//удаляет пробелы с начала и конца строки(чтобы не добавлялись пустые значения)
 if(newTitle) {
  todoStore.addNewTodo(newTitle)
  setTitle('')
 }
 
}

  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="введите текст..."
          value={title}//управляемая форма, когда состояние каждого компонента формы хранится в состоянии реакта
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Добавить задачу
      </button>
    </form>
  );
});

export default Form
