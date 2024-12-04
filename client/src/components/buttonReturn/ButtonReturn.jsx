import style from "./buttonReturn.module.css";
import { Link } from "react-router-dom";


export default function ButtonReturn() {

    return (
      <div > 
      <Link to="/" >
        <img src="/images/imageAcceuil.png" alt="bonhomme qui leve un pouce" className={style.imgbuttonReturn}/> 
       <h1>Accueil</h1>
        </Link>
        </div>
    )

};