import style from "./homePage.module.css";
import Shop from "../../components/shop/Shop";
import Form from "../../components/form/Form";
import { useData } from "../../context/ApiContext";

export default function HomePage() {
	const { remedies, Loading, pains, dataError } = useData();

	function afficherShop() {
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

		return <Shop />;
	}

	return (
		<div className={style.container}>
			<div className={style.banner}>
				<img
					src="/images/image_2.png"
					alt="Banner"
					className={style.bannerImage}
				/>
				<div className={style.overlay}>
					<h1 className={style.bannerTitle}>Bienvenue.</h1>
					<p className={style.bannerSubTitle}>
						Soulage ton mal : trouve le soin adapté
					</p>
				</div>
			</div>
			return (
			<main className={style.main}>
				{afficherShop()}
				<Form />
			</main>
			);
		</div>
	);
}
