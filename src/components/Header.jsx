import React  from 'react';
import {BsSun, BsMoonStars} from "react-icons/bs";

const Header = ({darkMode, setDarkMode}) => {
   
    const handleChangeMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <header className='header'>
            <h1>Notebook</h1>
            <div className={darkMode ? 'set-mode-container' : 'set-mode-container dark' } onClick={handleChangeMode}>
                <span className='set-mode-text'>CHANGE MODE
                </span>
                {darkMode
                    ? <BsMoonStars/>
                    : <BsSun/>}
            </div>
        </header>
    );
}

export default Header;
