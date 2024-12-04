import React from 'react';
import styles from "./detailsPage.module.css";
import Recipe from "../../components/recipe/Recipe";
import Form from "../../components/form/Form";

const DetailsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <img src="/images/image_2.png" alt="Banner" className={styles.bannerImage} />
                <div className={styles.overlay}>
                    <h1 className={styles.bannerTitle}>Votre recette</h1>
                    <h2 className={styles.bannerSubTitle}></h2>
                </div>
            </div>
            <Recipe />
            <Form />
        </div>
    );
};

export default DetailsPage;
