import style from "./menuList.module.css";
import { useData } from "../../context/ApiContext";

export default function MenuList({
	selectedPain,
	setSelectedPain,
	setModifieddefaut,
}) {
	const { pains } = useData();

	return (
		<section className={style.container}>
			<h1>Ton mal, ton soin : sélectionne et découvre !</h1>
			<form className={style.menuList}>
				<label htmlFor="pain-selector">
					{" "}
					<select
						id="pain-selector"
						value={selectedPain}
						onChange={(event) => {
							setSelectedPain(event.target.value);
							setModifieddefaut(true);
						}}
					>
						<option value="" disabled>
							{" "}
						</option>
						<option value="">tout</option>
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
