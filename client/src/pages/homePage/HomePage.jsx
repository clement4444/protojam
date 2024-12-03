import style from "./homePage.module.css";
import Shop from "../../components/shop/Shop";
import Form from "../../components/form/Form";


export default function HomePage() {
	return (
		<div className={style.container}>
            <div className={style.banner}>
                <img
                    src="/images/image_2.png" alt="Banner"
                    className={style.bannerImage}
                />
                <div className={style.overlay}>
                    <h1 className={style.bannerTitle}>Bienvenue sur notre site de soins</h1>
                </div>
            </div>
            <main className={style.main}>
    			<Shop />
    			<Form />
            </main>
		</div>
	);
}

export default HomePage;