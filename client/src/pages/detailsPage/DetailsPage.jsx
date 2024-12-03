import style from "./detailsPage.module.css";
import Recipe from "../../components/recipe/Recipe";
import Form from "../../components/form/Form";

const DetailsPage = () => {
    return (
        <div>
            <Recipe />
            <Form />
        </div>
    );
};

export default DetailsPage;