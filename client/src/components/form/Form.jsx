import styles from "./form.module.css";
import { useState } from "react";
import React from "react";

// Composant du formulaire
const Form = () => {
	const formPainting = [
		"catégorie",
		"produit",
		"description",
		"utilisation",
		"localisation",
	];

	// Initialisation du formulaire
	const [formSolution, setFormSolution] = useState({
		catégorie: "",
		produit: "",
		description: "",
		utilisation: "",
		localisation: "",
	});

	// Gestion des changements dans le formulaire
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormSolution((prev) => ({ ...prev, [name]: value }));
	};

	// Gestion de la soumission du formulaire
	const handleSubmit = (e) => {
		e.preventDefault();
		const { catégorie, produit, description, utilisation, localisation } =
			formSolution;
		const emailSubject = "New Solution Submission";
		const emailText = `Category: ${catégorie}\nProduct: ${produit}\nDescription: ${description}\nUse: ${utilisation}\nLocation: ${localisation}`;
		const email = "your-email@example.com";

		// Réinitialiser le formulaire
		setFormSolution({
			catégorie: "",
			produit: "",
			description: "",
			utilisation: "",
			localisation: "",
		});

		// Envoyer un e-mail
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailText)}`;
	};

	// Affichage du formulaire
	return (
		<div className={styles.Solution}>
			<div className="Title">
				<h2>Tu connais des remèdes ?</h2>
				<p className={styles.invitation}>
					Partage ton savoir en remplissant le formulaire ci-dessous ! Chaque
					recette peut faire la différence et aider quelqu'un à s'en sortir.
					Ensemble, on enrichit la base de données et on préserve ce savoir pour
					la communauté.
				</p>
			</div>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					{formPainting.map((Solution) => (
						// Affichage des champs du formulaire
						<div key={Solution} className="form-group">
							{Solution === "description" ? (
								// Remplacer l'input par un textarea pour 'description'
								<textarea
									id={Solution}
									name={Solution}
									value={formSolution[Solution]}
									onChange={handleChange}
									placeholder={`Entrer ${Solution}`}
									required
									className={styles.textarea}
								/>
							) : (
								// Reste des champs de formulaire sont des inputs
								<input
									id={Solution}
									name={Solution}
									type="text"
									value={formSolution[Solution]}
									onChange={handleChange}
									placeholder={`Entrer ${Solution}`}
									required
									className={styles.input}
								/>
							)}
						</div>
					))}
					<div className="Submit">
						<button type="submit">Soumettre</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
