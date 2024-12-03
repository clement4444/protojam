import style from "./homePage.module.css";
import Shop from "../../components/shop/Shop";
import Form from "../../components/form/Form";

const HomePage = () => {
    return (
        <div>
            <Shop />
            <Form />
        </div>
    );
};

export default HomePage;