import style from "./Article.module.css";
import { Link } from "react-router-dom";

export default function Article({ remedy }) {
	return (
		<section className={style.section}>
			<Link to={`/details/${remedy.id}`}>
				<article className={style.article}>
					<h2 className={style.h2}> {remedy.nomSoin} </h2>
					<figure>
						<img
							className={style.image}
							src={remedy.image}
							alt={`illustration de ${remedy.nomSoins}`}
						/>
					</figure>
					<p className={style.p}>Difficulté : {remedy.difficulte}</p>
				</article>
			</Link>
		</section>
	);
}
