import React from 'react';
import style from './shop.module.css';

const Shop = () => {
    return (
        <div className={style.shopContainer}>
            <div className={style.menuList}>
                {/* le code pour le menuList */}
                <input type="text" placeholder="Rechercher des soins..." />
            </div>
            <div className={style.articles}>
                <div className={style.article}>Article 1</div>
                <div className={style.article}>Article 2</div>
                <div className={style.article}>Article 3</div>
                <div className={style.article}>Article 4</div>
            </div>
        </div>
    );
};

export default Shop;
