import style from "./shop.module.css";
import MenuList from "../menuList/MenuList";
import Article from "../article/Article";
import { useState } from "react";
import { useData } from "../../context/ApiContext";

export default function Shop() {
	const { remedies, Loading } = useData();
	const [selectedPain, setSelectedPain] = useState("");
	const [modifieddefaut, setModifieddefaut] = useState(false);

	if (remedies === null || Loading) {
		return <p>chargement...</p>;
	}

	function filterRemedies(elem) {
		if (selectedPain === "") {
			// Si selectedPain est vide, afficher tous les remedies
			return true;
		}
		// Sinon, vérifier si un des "maux" de remedy correspond à selectedPain
		return elem.maux.some((maux) => maux === Number.parseInt(selectedPain));
	}

	function afficherCard() {
		if (modifieddefaut) {
			return remedies
				.filter(filterRemedies) // Filtre les remedies selon selectedPain
				.map((remedy) => (
					<li key={remedy.id}>
						<Article remedy={remedy} />
					</li>
				));
		}
		return <p>choisier votre mal</p>;
	}
	return (
		<div className={style.shopContainer}>
			<MenuList
				className={style.MenuList}
				selectedPain={selectedPain}
				setSelectedPain={setSelectedPain}
				setModifieddefaut={setModifieddefaut}
			/>
			{afficherCard()}
		</div>
	);
}
