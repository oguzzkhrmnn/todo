import React, { useEffect } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { url, year } from "./Api"

export default function Todos({ ToDoItems }) {
    // const renderTodos = () => {

    //     const todos = ToDoItems.map((item, index) => {
    //         console.log(ToDoItems[ToDoItems.length - 1]);
    //         return <li>key={item}{index}</li>;

    //     });
    /* const person = {
         firstName: "John",
         lastName: "Doe",
         age: 50,
         eyeColor: "blue"
       };
     localStorage.setItem("oguz",JSON.stringify(person));
     const oguz=JSON.parse(localStorage.getItem("oguz"));//obje olarak yazdırıyor
     console.log(oguz);*/
    let filters = "asd";
    useEffect(() => {
        //bileşen yüklediten hemen sonra çalışılacak kısım
        localStorage.setItem("oguz", filters)
        fetch(`${url}football_competitions?${year}`)
            .then((response) => response.json())
            .then((cevap) => console.log(cevap))
        return () => {
            // Bileşenden sonra hemen sonra çalışıcak
            localStorage.clear();
        }
    }, []) // bir kere çalışsın diye boş array 

    return (

            <></>
        );
};
    

