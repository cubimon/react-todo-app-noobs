import React, { useState } from 'react';

function Todo(props) {
    const [isEditState, setIsEdit] = useState(false)
    const [editState, setEdit] = useState("")
    

    /*
       todo: Einzelnes todo mit einer checkbox 
       handleTodoClick: umschalten anahnd von id von todo 
      */

    function handleTodoClick() {
        props.umschaltenTodo(props.todo.id)
    }
    
    return (
        <div>
            {props.todo.id === isEditState? (
                <input 
                type="text"
                onChange={(e)=>setEdit(e.target.value)}
                />
            ) : (
                <div>{props.todo.name}</div>
            )}
            <>
                <input type="checkbox"
                    checked={props.todo.complete}
                    onChange={handleTodoClick} 
                />
                
            </>

        { props.todo.id === isEditState ? (
        <button onClick={props.submitEdit(props.todo.id)}>Save</button>
        ) : (
            <button onClick={() => setIsEdit(props.todo.id)}>Edit</button>
        )}

        <button className='deletebutton' onClick={() => {
        props.deleteTodo(props.todo.id)
        }}>Delete</button>

          


        </div>
    ); 
}

export default Todo;