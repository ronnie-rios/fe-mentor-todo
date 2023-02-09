import React from 'react'

const SingleTodo =({ todos }) => {
    console.log(todos)
  return (
    <div>
        {todos && todos.map((item) => (
            <p key={item.todo}>{item.todo}</p>
        ))}
    </div>
  )
}

export default SingleTodo