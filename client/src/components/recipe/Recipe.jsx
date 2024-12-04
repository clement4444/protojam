import style from "./recipe.module.css";
import { useData } from '../../context/ApiContext';
import { useParams } from "react-router-dom";

const Recipe = () => {
    const { remedies, Loading } = useData();
    const { id } = useParams();

    // Si les données sont en train de charger, on affiche "Loading..."
    if (Loading) {
        return <p>Loading...</p>;
    }

    // Vérifier si remedies est null ou undefined
    if (!remedies) {
        return <p>Aucune donnée disponible.</p>;
    }

    // Trouver l'index de la recette correspondante par son id
    const index = remedies.findIndex((el) => el.id === parseInt(id));

    // Si l'index est -1, cela signifie que la recette n'a pas été trouvée
    if (index === -1) {
        return <p>Recette non trouvée</p>;
    }

    // Accéder aux données de la recette trouvée
    const recipe = remedies[index];

    return (
        <div className={style.contenerRecipe}>
            <div className={style.section}>
                <p>info</p>
                <div>
                    <img src={recipe.image} alt={recipe.nomSoin} />
                    <p>{recipe.nomSoin}</p>
                </div>
            </div>
            <div className={style.section}>
                {recipe.ingredients.map((ingredient, index) => (
                    <div key={ingredient.idIngredient}>
                        <img src={ingredient.imageIngredient} alt={ingredient.nomIngredient} />
                        <p>{ingredient.nomIngredient}</p>
                        <p>{ingredient.quantite}</p>
                    </div>
                ))}
            </div>
            <div className={style.section}>
                <p>Application</p>
                <div>
                    <p>Préparation</p>
                    <p>{recipe.preparation}</p>
                </div>
                <div>
                    <p>Utilisation</p>
                    <p>{recipe.utilisation}</p>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
