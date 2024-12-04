import style from "./buttonReturn.module.css";
import { Link } from "react-router-dom";
import image from "../../../public/images/logo-big.png";

export default function ButtonReturn() {
	return (
		<div>
			<Link to="/">
				<img
					src={image}
					alt="bouton de retour vers l'accueil"
					className={style.imgbuttonReturn}
				/>
				<h1>retour vers l'accueil</h1>
			</Link>
		</div>
	);
}
