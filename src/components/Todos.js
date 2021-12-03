import React from 'react';


export default function Todos({ToDoItemFlag,ToDoItem})
{
    const renderTodos =() =>
    {
return

<>{ToDoItem}</>
     };
    return(
       
        <>{!ToDoItemFlag&&renderTodos()}</>
    );


}