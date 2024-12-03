import style from "./menuList.module.css";
import { useData } from "../../context/ApiContext";

export default function MenuList({ selectedPain, setSelectedPain }) {
	const { pains, Loading } = useData();
	if (pains === null || Loading) {
		return <p>chargement ...</p>;
	}

	return (
		<section>
			<h1>Titre</h1>
			<form>
				<label htmlFor="pain-selector">
					Quel est votre mal ?{" "}
					<select
						id="pain-selector"
						value={selectedPain}
						onChange={(event) => setSelectedPain(event.target.value)}
					>
						<option value=""> </option>
						{pains.map((pain) => (
							<option value={pain.idMal} key={pain.idMal}>
								{pain.nomMal}
							</option>
						))}
					</select>
				</label>
			</form>
		</section>
	);
}
