import React from 'react';


export default function Todos({ToDoItems}){
    const renderTodos =() =>{

        const todos= ToDoItems.map((item,index) => {
            console.logt(ToDoItems[ToDoItems.length-1]);
            return <li>{item}</li>;

        });
        let arrayy=["oguz","kahraman"];
        localStorage.setItem("oguz",arrayy);
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