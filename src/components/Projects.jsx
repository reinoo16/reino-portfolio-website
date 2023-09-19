import React from 'react';
import BmwImg from '../img/bmw_img.jpg';
import MetoImg from '../img/meto_img.jpg';
import DigitalReachImg from '../img/digital_img.jpg';
import GameShpImg from '../img/gameshp_img.jpg';
import GstationImg from '../img/gstation_img.jpg';
import BmwImg2 from '../img/bmw8_img.jpg';
import ToDo from '../img/todo-list.jpg';
import Weather from '../img/weather-app.jpg';
import Calculator from '../img/calculator-app.jpg';

function Projects() {
    return (
        <section id='projects' className='projects'>
            <div className='container'>
                <div className='projects-title'>
                    <div className='title-left'>
                        <h1>Projeler</h1>
                        <h4>Web Tasarım & Yazılım alanında kendimi geliştirmek için
                            yapmış olduğum projelerim. </h4>
                    </div>
                    <div className='social-logos'>
                        <a href="https://github.com/reinoo16" target='_blank'><i class="bi bi-github"></i></a>
                        <a href="https://www.instagram.com/reino.webdev/" target='_blank'><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div className='projects-cards'>
                <div className='project-card'>
                        <img src={Calculator} alt="" />
                        <div className="card-texts">
                            <p>Calculator App</p>
                            <div>
                                <a href="https://github.com/reinoo16/calculator-app" target='_blank'><i class="bi bi-github"></i></a>
                                <a href="https://calculator-app-reinoo16.vercel.app/" target='_blank'><i class="bi bi-globe2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={Weather} alt="" />
                        <div className="card-texts">
                            <p>Weather App</p>
                            <div>
                                <a href="https://github.com/reinoo16/weather-app" target='_blank'><i class="bi bi-github"></i></a>
                                <a href="https://weather-app-reinoo16.vercel.app/" target='_blank'><i class="bi bi-globe2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={ToDo} alt="" />
                        <div className="card-texts">
                            <p>To-Do List</p>
                            <div>
                                <a href="https://github.com/reinoo16/todo-list" target='_blank'><i class="bi bi-github"></i></a>
                                <a href="https://todo-list-reinoo16.vercel.app/" target='_blank'><i class="bi bi-globe2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={BmwImg} alt="" />
                        <div className="card-texts">
                            <p>BMW 3 Series</p>
                            <div>
                                <a href="https://github.com/reinoo16/bmw-3-series" target='_blank'><i class="bi bi-github"></i></a>
                                <a href="https://www.instagram.com/p/CvC9REmIKM9/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                                <a href="https://bmw-3-series.vercel.app/" target='_blank'><i class="bi bi-globe2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={MetoImg} alt="" />
                        <div className="card-texts">
                            <p>Metorium Re-Design</p>
                            <div>
                                <a href="https://www.instagram.com/p/CvM9DQsIfL6/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={DigitalReachImg} alt="" />
                        <div className="card-texts">
                            <p>DigitalReach</p>
                            <div>
                                <a href="https://www.instagram.com/p/Cuw8Htsop5Y/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                                <a href="https://github.com/reinoo16/digitalreachweb" target='_blank'><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={GameShpImg} alt="" />
                        <div className="card-texts">
                            <p>GameSHP</p>
                            <div>
                                <a href="https://www.instagram.com/p/Cr_bGZbIRZ6/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={GstationImg} alt="" />
                        <div className="card-texts">
                            <p>GStation</p>
                            <div>
                                <a href="https://www.instagram.com/p/CsOa3paoYZ-/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                                <a href="https://github.com/reinoo16/gstation" target='_blank'><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={BmwImg2} alt="" />
                        <div className="card-texts">
                            <p>BMW 8 Series</p>
                            <div>
                                <a href="https://www.instagram.com/p/CnU3DYzoY1f/?img_index=1" target='_blank'><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;