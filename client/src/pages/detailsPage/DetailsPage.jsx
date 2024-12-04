import style from "./detailsPage.module.css";
import Recipe from "../../components/recipe/Recipe";
import Form from "../../components/form/Form";
import { useData } from "../../context/ApiContext";


const DetailsPage = () => {
	const { remedies, Loading, pains, dataError } = useData();

	function afficherRecopie() {
		//en cas d'erreur de chargement des données
		if (dataError) {
			return <p>Erreur de chargement des données</p>;
		}
		//en cas de chargement des données
		if (pains === null || remedies === null || Loading) {
			return (
				<div className={style.loader} >
					<div className={style.spinner}></div>
					<p>chargement ...</p>
				</div >
			)
		}

		return <Recipe />;
	}

	return (
		<div>
			{afficherRecopie()}
			<Form />
		</div>
	);
};

export default DetailsPage;
