import { NavBar } from "./components/navBar";
import { Header } from "./components/header"
import { Main } from "./components/main"
import style from "./components/main/style.module.css"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"

function App() {
  const infoMain = [
    {
      img : img1,
       titulo : "Declarative",
        texto: "React makes it  painless to create interactive UIs."
    },
    {
      img : img2,
       titulo : "Components",
        texto: "Build encapsulated components that manage their state."
    }, 
    {
      img : img3,
       titulo : "Single-Way",
        texto: "A set of immutable values are passed to the component´s."
    },
    {
      img : img4,
       titulo : "JSX",
        texto: "Statically-typed, designed to run on modern browsers."
    }
  ]
  return (
    <div className="App">
     <NavBar></NavBar>
     <Header></Header>
     <div className={style.main}>
    {infoMain.map((element) => {
      return (
        <Main 
         key={element.titulo}
        img={element.img}
        texto={element.texto}
        titulo={element.titulo}/>
      )
    })}
     </div>
    </div>
  );
}

export default App;
