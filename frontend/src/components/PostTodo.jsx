import { useState } from 'react';

const PostTodo = ({ setTodos }) => {
    const [form, setForm] = useState({ todo: '' });

    const formHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((prev) => {
            return {...prev, [name]: value}
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos((prev) => { return [...prev, form] })
        setForm({ todo: '' })
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input 
                placeholder='Create a new todo...'
                onChange={formHandler}
                name='todo'
                value={form.todo}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PostTodo