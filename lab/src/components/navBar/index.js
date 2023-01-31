import logoIron from "../../images/logoIron.png"
import menuNav from "../../images/menuNav.png"
import style from "./style.module.css"


export function NavBar(){

return (
    <nav className={style.navBar}>
        <img src={logoIron} className={style.logoIron}/>
        <img src={menuNav} className={style.menuNav}/>
    </nav>
)
}