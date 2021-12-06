import React from 'react';


export default function Todos({ToDoItems}){
    const renderTodos =() =>{

        const todos= ToDoItems.map((item) => {
            console.log(item);
            return <li>{item}</li>;

        });
        let arrayy=["oguz","kahraman"];
        localStorage.setItem("oguz",todos);
        const oguz=localStorage.getItem("oguz");
        console.log(oguz);
    return(
        <>
        <ul>{todos}</ul>
        </>
    );
};
return <>{renderTodos()}</>;

}