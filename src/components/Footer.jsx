import React from 'react'

function Footer() {
    return (
        <div>
            <section className='contact' id='contact'>
                <div className='contact-bg'>
                    <div className='container'>
                        <h1>İLETİŞİM</h1>
                        <h4>Bir website projeniz var ve bunu uygulamak istiyorsanız,
                            benimle iletişime geçebilirsiniz.</h4>
                        <div className='contact-socials'>
                            <a href="https://www.instagram.com/reino.webdev/" target='_blank'><h2>INSTAGRAM</h2></a>
                            <a href="https://github.com/reinoo16" target='_blank'><h2>GITHUB</h2></a>
                            <a href="mailto:reinoodesigner@gmail.com" target='_blank'><h2>EMAIL</h2></a>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='footer-line' />
            <footer className='footer'>
                <div className='container'>
                    <div className='footer-items'>
                        <a href="#header"><h2>REINO</h2></a>
                        <ul>
                            <a href="#projects"><li>Projeler</li></a>
                            <a href="#services"><li>Hizmetler</li></a>
                            <a href="#contact"><li>İletişim</li></a>
                        </ul>
                    </div>
                    <p className='copyright'>Reino Portfolio @2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;