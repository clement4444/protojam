import style from "./Article.module.css";
import { Link } from "react-router-dom";

export default function Article({ remedy }) {

	return (
		<section>
			<Link to={`/details/${remedy.id}`}>
				<article>
					<h2> {remedy.nomSoin} </h2>
					<figure>
						<img src={remedy.image} alt={`illustration de ${remedy.nomSoins}`} />
					</figure>
					<p>{remedy.difficulte}</p>
				</article>
			</Link>
		</section >
	);
}
