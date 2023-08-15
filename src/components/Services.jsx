import React from 'react';
import FigmaLogo from '../img/figma_logo.png';
import PsLogo from '../img/ps_logo.png';
import HtmlLogo from '../img/html_logo.png';
import CssLogo from '../img/css_logo.png';
import JsLogo from '../img/js_logo.png';
import ReactLogo from '../img/react_logo.png';

function Services() {
    return (
        <section className='services' id='services'>
            <h1>Hİzmetler</h1>
            <div className='container'>
                <div className='services-items'>
                    <hr />
                    <div className='services-item'>
                        <h2>Web Tasarım</h2>
                        <div>
                            <img src={FigmaLogo} alt="" />
                            <img src={PsLogo} alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className='services-item'>
                        <h2>Web Yazılım</h2>
                        <div>
                            <img src={HtmlLogo} alt="" />
                            <img src={CssLogo} alt="" />
                            <img src={JsLogo} alt="" />
                            <img src={ReactLogo} alt="" />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    )
}

export default Services;