import style from "./recipe.module.css";
import { useData } from "../../context/ApiContext";
import { useParams } from "react-router-dom";
import ButtonReturn from "../buttonReturn/ButtonReturn";

const Recipe = () => {
	const { remedies, Loading } = useData();
	const { id } = useParams();

	// Si les données sont en train de charger, on affiche "Loading..."
	if (Loading) {
		return <p>Loading...</p>;
	}


	// Trouver l'index de la recette correspondante par son id
	const index = remedies.findIndex((el) => el.id === Number.parseInt(id));

	// Si l'index est -1, cela signifie que la recette n'a pas été trouvée
	if (index === -1) {
		return <p>Recette non trouvée</p>;
	}

	// Accéder aux données de la recette trouvée
	const recipe = remedies[index];

	return (
		<div className={style.contenerRecipe}>
			<div className={style.section}>
				<p className={style.pinfo}>info</p>
				<div className={style.contenerRemed}>
					<img src={recipe.image} alt={recipe.nomSoin} className={style.imageRecipe} />
					<p>{recipe.nomSoin}</p>
				</div>
			</div>
			<div className={style.section}>
				{recipe.ingredients.map((ingredient) => (
					<div className={style.ingredientDiv} key={ingredient.idIngredient}>
						<img
							className={style.imageIng}
							src={ingredient.imageIngredient}
							alt={ingredient.nomIngredient}
						/>
						<div className={style.divIngredientNom}>
							<p className={style.pNomTitre}>Nom :</p>
							<p className={style.ingredientNom}>{ingredient.nomIngredient}</p>
						</div>
						<div className={style.pPuantiterTitre}>
							<p className={style.divingredientQuantiter}>Quantité :</p>
							<p className={style.ingredientQuantiter}>{ingredient.quantite}</p>
						</div>
					</div>
				))}
			</div>
			<div className={`${style.section} ${style.application}`}>
				<p>Application</p>
				<div>
					<p className={style.pTitre}>Préparation :</p>
					<p className={style.pdata}>{recipe.preparation}</p>
				</div>
				<div>
					<p className={style.pTitre}>Utilisation :</p>
					<p className={style.pdata}>{recipe.utilisation}</p>
				</div>
			</div>
			<div>
				<ButtonReturn />
			</div>
		</div>
	);
};

export default Recipe;
