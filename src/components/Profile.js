import React from "react";
import "./Profile.css";

function Profile(){
    return(
        <div className="profile-container">
            <img className="profile-pic" alt="Thulio e Lolla" src="https://avatars.githubusercontent.com/u/72237205?v=4"></img>
            <div className="profile-text">
                <p className="profile-letters">😉 Nome: Thulio Pereira</p>
                <p className="profile-letters">📚 Analise e Desenvolvimento de Sistemas (Estacio de Sá) </p>
                <p className="profile-letters">💻 Estudando atualmente: React/Javascrip</p>
                <p className="profile-letters">💙 Conhecimentos: Java, GIT, HTML, POSTGREESQL...</p>
                <a href="https://www.mercadolivre.com.br/" target="blank" rel="noferrer" className="instagram">
                    <p className="profile-letters">📷 Perfil no Instagram</p>
                </a>
                <a href="https://www.mercadolivre.com.br/" target="blank" rel="noferrer" className="linkedin">
                    <p className="profile-letters">📊 Perfil no LinkedIn</p>
                </a>
                <a href="https://www.mercadolivre.com.br/" target="blank" rel="noferrer" className="github">
                    <p className="profile-letters">🌐 Perfil no GitHub</p>
                </a>
            </div>
        </div>
    )
}


export default Profile