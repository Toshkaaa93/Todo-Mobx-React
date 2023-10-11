import { observer } from "mobx-react-lite"
import TodoList from "../TodoList/TodoList"

const Main = observer(() => {
    return (
     <div>
        <TodoList/>
     </div>
    )
})

export default Main