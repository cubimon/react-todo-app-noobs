import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    /*
    Gesammte Todos mappen und einzeles Todo einbinden
    */
    return (
        <div>
            {
                props.todos.map(todo => {
                    return <Todo
                            key={todo.id}
                            umschaltenTodo={props.umschaltenTodo}
                            deleteTodo={props.deleteTodo}
                            todo={todo}
                            submitEdit={props.submitEdit}
                        />
                })}

            
        </div>
    );
}

export default TodoList;