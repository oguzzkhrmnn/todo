import React from 'react';


export default function Todos({ToDoItems}){
    const renderTodos =() =>{
        
        const todos= ToDoItems.map((item) => {
            console.log(item);
            return <li>{item}</li>;

        });
    return(
        <>
        <ul>{todos}</ul>
        </>
    );
};
return <>{renderTodos()}</>;

}