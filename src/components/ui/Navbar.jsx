import React from 'react';
import menu from '../../images/icons/menu-icon.png';
import bell from '../../images/icons/bell-icon.png';
import profile from '../../images/avatar.png';

export const Navbar = ({ setShowAddMovieModal }) => {

    const handleClick = () => {
        setShowAddMovieModal(true);
    }

    return (
        <nav className="navbar__container">
            <div className="navbar__desktop">
                <div className="navbar__left">
                    <div className="navbar__logo">
                        <p>
                            <span className="navbar__logo-start">LITE</span>
                            <span className="navbar__logo-end">FLIX</span>
                        </p>
                    </div>
                    <button
                        className="navbar__add-movie"
                        onClick={handleClick}
                    >
                        <div><span className="fas fa-plus" /></div>
                        <p>AGREGAR PELÍCULA</p>
                    </button>
                </div>

                <div className="navbar__right">
                    <img className="navbar__menu" src={menu} alt="menu" />
                    <div className="navbar__bell-container">
                        <img className="navbar__bell" src={bell} alt="bell" />
                    </div>
                    <div className="navbar__profile-container">
                        <img src={profile} alt="avatar" />
                    </div>
                </div>
            </div>

            <div className="navbar__mobile">
                <button
                    className="navbar__add-movie"
                    onClick={handleClick}
                >
                    <div><span className="fas fa-plus" /></div>
                </button>
                <div className="navbar__logo">
                    <p>
                        <span className="navbar__logo-start">LITE</span>
                        <span className="navbar__logo-end">FLIX</span>
                    </p>
                </div>
                <div className="navbar__profile-container">
                    <img src={profile} alt="avatar" />
                </div>
            </div>
        </nav>
    )
}
