import './App.css';
import Main from './Components/Main/Main';
import  Footer  from './Components/Footer/Footer';
import Header from './Components/Header/Header';
// const history = [];//массив для сохранения всех задач перед удалением

function App() {

  // const [todos,setTodos] = useState([])
  //первый элемент само состояние, второй функция которая может поменять это состояние

  // const addNewTodo = useCallback((title) => {
  //   setTodos(prev=>[...prev,{
  //     id: nanoid(),
  //     title,
  //     completed: false
  //   }])
  // },[]) 
  //useCallback для оптимизации, чтобы функция не пересоздавалась каждый раз
  //в связке с React.memo(header)

  // const deleteTodo = (id) => {
  //   setTodos(prev => prev.filter(todo => todo.id !== id))
  // }

  // const completedTodo = (id) => {
  //  setTodos(prev=>prev.map(todo=> {
  //   if(todo.id === id) {
  //     return {
  //      ...todo,
  //      completed: !todo.completed//заменяем в todo completed,в объекте при изменении свойства приоритет у последнего
  //     }
  //   }
  //   return todo
  //  }))
  // }

  // const clearAllTodos = useCallback(() => {
  //   history.push(todos)
  //   setTodos([])//не использовалась функция т.к. нам не важно предыдущее состояние при полном удалении
  // },[todos])//передаем в массив зависимостей todos чтобы функция пересоздавалась каждый раз когда меняется массив todos

  // const replaceTodos =  useCallback(() => {
  //   if(history.length) {
  //     setTodos(history.pop())
  //  } 
  // },[])

  // console.log({todos})

  return (
    <div className="container py-5">
    <Header/>
    <hr/>
    <Main />
    <Footer/>
    </div>
  );
}

export default App;
