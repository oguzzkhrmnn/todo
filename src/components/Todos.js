import React from 'react';


export default function Todos({ToDoItems}){
    const renderTodos =() =>{

        const todos= ToDoItems.map((item,index) => {
            console.log(ToDoItems[ToDoItems.length-1]);
            return <li>key={item}{index}</li>;

        });
        const person = {
            firstName: "John",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          };
        localStorage.setItem("oguz",JSON.stringify(person));
        const oguz=JSON.parse(localStorage.getItem("oguz"));//obje olarak yazdırıyor
        console.log(oguz);
    return(
        <>
        <ul>{todos}</ul>
        </>
    );
};
return <>{renderTodos()}</>;

}