import style from "./style.module.css"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"

export function Main (props){
    return (
        <main>
            <div className={style.blocos}>
                <img src={props.img}/> 
                <h2>{props.titulo}</h2> 
                <p>{props.texto}</p> 
            </div>
        </main>
    )
}

// return (
//     <main className={style.main}>
//         <div className={style.blocos}>
//         <img src={img1} />
//         <h2>Declarative</h2>
//         <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
//         </div>
//         <div className={style.blocos}>
//         <img src={img2} />
//         <h2>Components</h2>
//         <p>Build encapsulated<br/> components that<br/> manage their state.</p>
//         </div>
//         <div className={style.blocos}>
//         <img src={img3} />
//         <h2>Single-Way</h2>
//         <p>A set of immutable <br/> values are passed to <br/> the component´s.</p>
//         </div>
//         <div className={style.blocos}>
//         <img src={img4} />
//         <h2>JSX</h2>
//         <p>Statically-typed,<br/>designed to run on<br/> modern browsers.</p>
//         </div>
//     </main>
// )