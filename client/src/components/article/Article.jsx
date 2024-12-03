import style from "./Article.module.css";

function Article(nomSoins,image,difficulte){
    return (
        <section> 
        <article> 
        <h2> {nomSoins} </h2>
        <figure> 
        <img src={image} alt={`illustration de ${nomSoins}`}/>
        </figure>
        <p>{difficulte}</p>
        </article>
        </section>
    );
};

export default Article;