import style from "./shop.module.css";
import MenuList from "../menuList/menuList";
import Article from "../article/Article";
import { useState } from "react";
import { useData } from "../../context/ApiContext";

export default function Shop() {
	const { pains, remedies, Loading } = useData();

	if (pains === null || remedies === null || Loading) {
		return <p>chargement...</p>;
	}

	const [selectedPain, setSelectedPain] = useState("");

	function filterRemedies(elem) {
		if (selectedPain === "") {
			// Si selectedPain est vide, afficher tous les remedies
			return true;
		}
		// Sinon, vérifier si un des "maux" de remedy correspond à selectedPain
		return elem.maux.some((maux) => maux === selectedPain);
	}
	return (
		<div>
			<MenuList selectedPain={selectedPain} setSelectedPain={setSelectedPain} />
			{remedies
				.filter(filterRemedies) // Filtre les remedies selon selectedPain
				.map((remedy) => (
					<li key={remedy.id}>
						<p>{remedy.nomSoin}</p>
					</li>
				))}
		</div>
	);
}
