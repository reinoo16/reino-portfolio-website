import React, { useState } from 'react';

function Header() {

    const [toggle, setToggle] = useState(true);

    const changeToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div id='header' className='header'>
            <div className={toggle ? 'none' : 'toggle-menu'}>
                <i onClick={changeToggle} class="bi bi-x-lg"></i>
                <a onClick={changeToggle} href="#projects"><h2>Projeler</h2></a>
                <a onClick={changeToggle} href="#services"><h2>Hizmetler</h2></a>
                <a onClick={changeToggle} href="#contact"><h2>İletişim</h2></a>
            </div>
            <div className='container'>
                <div className='header-navbar'>
                    <a href="#header"><h2>REINO</h2></a>
                    <ul>
                        <a href="#projects"><li>Projeler</li></a>
                        <a href="#services"><li>Hizmetler</li></a>
                        <a href="#contact"><li>İletişim</li></a>
                        <li className='icon' onClick={changeToggle}><i class="bi bi-list"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;