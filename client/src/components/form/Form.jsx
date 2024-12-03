import React, { useState } from 'react';
import style from './form.module.css';

const Form = ({ menuList }) => {
    const [propositions, setPropositions] = useState([]);

    const generatePropositions = () => {
        // Logique pour générer des propositions aléatoires à partir de menuList
        const randomPropositions = menuList.sort(() => 0.5 - Math.random()).slice(0, 3);
        setPropositions(randomPropositions);
    };

    return (
        <div className={style.formContainer}>
            <button onClick={generatePropositions}>Générer des propositions</button>
            <ul>
                {propositions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Form;
