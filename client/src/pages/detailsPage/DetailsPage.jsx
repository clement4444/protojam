import React from "react";
import styles from "./detailsPage.module.css";
import Recipe from "../../components/recipe/Recipe";
import Form from "../../components/form/Form";
import { useData } from "../../context/ApiContext";

export default function DetailsPage() {
	const { remedies, Loading, pains, dataError } = useData();

	function afficherRecopie() {
		//en cas d'erreur de chargement des données
		if (dataError) {
			return <p>Erreur de chargement des données</p>;
		}
		//en cas de chargement des données
		if (pains === null || remedies === null || Loading) {
			return (
				<div className={style.loader}>
					<div className={style.spinner} />
					<p>chargement ...</p>
				</div>
			);
		}

		return (
			<>
				<Recipe />
				<div className={styles.container}>
					<div className={styles.banner}>
						<img
							src="/images/image_2.png"
							alt="Banner"
							className={styles.bannerImage}
						/>
						<div className={styles.overlay}>
							<h1 className={styles.bannerTitle}>Votre recette</h1>
							<h2 className={styles.bannerSubTitle}>a</h2>
						</div>
					</div>
					{afficherRecopie()}
					<Form />
				</div>
			</>
		);
	}
}
