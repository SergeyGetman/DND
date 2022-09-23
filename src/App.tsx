import Container from "./components/Container.tsx";
import cl from "./index.module.css"
import {useState} from "react";


function App() {
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e: any, card: any) {
        console.log('this is card', card)
        setCurrentCard(card)
    }

    function dragEndHandler(e: any) {
        e.target.style.background = 'yellowgreen'
    }

    function dragOverHandler(e: any) {
        e.preventDefault()
        e.target.style.background = 'pink'
    }

    function dropHandler(e: any, card: any) {
        e.preventDefault()
        console.log('this is card2', card)
    }

    return (
        <div
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            dragable={true}
        >
            <h1>Hello GAME</h1>
            <Container className={cl.table_right} rows={5} columns={1}/>
            <Container className={cl.table_left} rows={5}/>
            <Container className={cl.table_centre} rows={6} columns={17}/>

        </div>
    );
}

export default App;
