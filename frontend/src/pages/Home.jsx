import { useState } from 'react'
import PostTodo from '../components/PostTodo'
import SingleTodo from '../components/SingleTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);


    return (
        <main>
            <h1>TODO</h1>
            <PostTodo setTodos={setTodos}/>
            <div>
                {todos.length === 0 ? 'enter a value' : <SingleTodo todos={todos} />}
            </div>
        </main>
    )
}

export default Home