import React from 'react'

function About() {
    return (
        <div className="container about mt-5 ">
            <div className="row d-flex flex-row justify-content-center">

                <div className="col-12 col-md-4 background ">


                    <div className='d-flex flex-column '>

                        <div className='d-flex flex-column align-items-center'>
                            <img className='img mt-4' src="https://st2.depositphotos.com/3839759/7971/i/600/depositphotos_79715860-stock-photo-surface-rippled-of-water-and.jpg" alt="" />
                            <p className='p-text mt-3 '>Mehmet Ali Tortumlu</p>
                            <p className='p-text mt-1 '>Frontend Developer</p>
                        </div>


                    </div>

                    <div className="education d-flex flex-column ">
                        <p className='text mt-3'>ABOUT</p>
                        <p className='text-center'>I have been working on software development for 6
                            months. I love learning and teamwork. I continue to
                            improve myself on frontend.</p>
                    </div>


                    <div className="technologies d-flex flex-column ">
                        <p className='text mt-5'>SPECIALTIES & TECHNOLOGIES</p>
                        <ul>
                            <li className='mt-2'>Html-Css</li>
                            <li className='mt-2'>Bootstrap</li>
                            <li className='mt-2'>Javascript</li>
                            <li className='mt-2'>React.js</li>
                            <li className='mt-2'>Git-Github</li>
                            <li className='mt-2'>Vısaul Studio Code</li>
                        </ul>
                    </div>

                    <div className="technologies d-flex flex-column ">
                        <p className='text mt-5'>Certıfıcates</p>
                        <ul>
                            <li>Frontend With Beginner React (Patika.dev)</li>
                            <li>Frontend With Advanced React (Patika.dev)</li>
                            <li>React 301 (Turkcell Academy)</li>
                        </ul>
                    </div>

                </div>

                <div className="col-12 col-md-6 bg-light">

                    <div className='d-flex flex-column '>
                        <ul className='right-list mt-4'>
                            <li className='mt-1'>
                                <i className="fa-brands fa-linkedin"></i>
                                www.linkedin.com/in/mehmet-ali-tortumlu
                            </li>
                            <li className='mt-1'><i className="fa-regular fa-envelope"></i>mehmetalitortumlu@gmail.com</li>
                            <li className='mt-1'><i className="fa-solid fa-phone"></i>01234-5678-91011</li>
                            <li className='mt-1'><i className="fa-brands fa-github"></i>https://github.com/Mehmetalitortumlu</li>
                        </ul>
                    </div>

                    <div className="hobies mt-5 d-flex flex-column ">
                        <p className='text'> HOBBIES </p>
                        <ul>
                            <li>Swiming</li>
                            <li>Adventure Movies</li>
                            <li>Computer Games</li>
                            <li>Fantasy Books</li>
                        </ul>
                    </div>


                    <div className="hobies mt-5 d-flex flex-column ">
                        <p className='text'> LANGUAGES </p>
                        <ul>
                            <li>English: Intermediate</li>
                        </ul>
                    </div>


                    <div className="hobies mt-5 d-flex flex-column ">
                        <p className='text mt-5'> MY PROJECTS </p>
                        <ul>
                            <li> <span className='fw-bold'>1-) Login-SignUpApp</span>
                                <br />Technologies: Html, Css, JavaScript, React,
                                Formik, Yup, React Router Dom , React Icons
                            </li>
                            <li> <span className='fw-bold'>2-)QuizApp</span>
                                <br />Technologies: Html, Css, JavaScript, React,
                                Context API
                            </li><li> <span className='fw-bold'>3-) WeatherApp</span>
                                <br />Technologies: Html, Css, JavaScript, React,
                                Context API , Fetch API.
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
