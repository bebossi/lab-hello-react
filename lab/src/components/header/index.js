import style from "./style.module.css"

export function Header(){

    return (
        <header className={style.header}>
            <h1 className={style.h1Header}>Say Hello to <br></br> ReactJS</h1>
            <p>You will learn how to use <br></br> the most popular frontend library, <br></br> and become a supe Ninja developer.</p>
            <button>Awesome!</button>
        </header>
    )
}