import style from "./shop.module.css";
import MenuList from "../menuList/menuList";
import Article from "../article/Article";

const Shop = () => {
    return (
        <div>
            <MenuList />
            <Article />
            <Article />
            <Article />
        </div>
    );
};

export default Shop;