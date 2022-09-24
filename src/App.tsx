// @ts-ignore
import Container from "./components/Container.tsx";
import cl from "./index.module.css"
import {useState} from "react";
import * as React from "react";

function App() {
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e: any) {
        console.log('this is card', currentCard)
        setCurrentCard(currentCard)
    }

    function dragEndHandler(e: any) {
        e.target.style.background = 'yellowgreen'
    }

    function dragOverHandler(e: any) {
        e.preventDefault()
        e.target.style.background = 'pink'
    }

    function dropHandler(e: any) {
        e.preventDefault()
        console.log('this is card2', currentCard)
    }

    return (
        <div
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e)}

        >
            <h1>Hello GAME</h1>
            <Container className={cl.table_right} rows={5} columns={1}/>
            <Container className={cl.table_left} rows={5}/>
            <Container className={cl.table_centre} rows={6} columns={17}/>

        </div>
    );
}

export default App;
