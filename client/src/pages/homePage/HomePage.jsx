import style from "./homePage.module.css";
import Shop from "../../components/shop/Shop";
import Form from "../../components/form/Form";

export default function HomePage() {
	return (
		<div>
			<Shop />
			<Form />
		</div>
	);
}
