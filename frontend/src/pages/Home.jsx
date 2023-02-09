import { useState } from 'react'
import PostTodo from '../components/PostTodo'
import Card from '../ui/Card'

const Home = () => {
    const [todos, setTodos] = useState([]);


    return (
        <main>
            <h1>TODO</h1>
            <PostTodo />
            <div>
                {todos.length === 0 ? <Card todo={'enter a value'}/> : <Card todos={todos} />}
            </div>
        </main>
    )
}

export default Home