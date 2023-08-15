import React from 'react';
import HeroVideo from '../videos/tunnel.mp4';

function HeroSection() {
    return (
        <div className='hero-section'>
            <video className='hero-video' autoPlay muted loop >
                <source src={HeroVideo} type="video/mp4" />
            </video>
            <div className='hero-content'>
                <div className='container'>
                    <div className="hero-texts">
                        <h1>MERHABA, BEN ALİ. WEBSİTE
                            TASARIM & YAZILIM YAPIYORUM. </h1>
                        <h4>Yaklaşık 2 sene Grafik Tasarım ile uğraştıktan sonra bu tasarım yeteneğimi Web Tasarım’da kullanmayı tercih ettim. Neredeyse 6 aydır da Front-End üzerinde eğitimler alarak kendimi geliştiriyorum ve aynı zamanda projeler geliştiriyorum. </h4>
                    </div>
                </div>
            </div>
            <div className='gradient-overlay'></div>
        </div>
    )
}

export default HeroSection;