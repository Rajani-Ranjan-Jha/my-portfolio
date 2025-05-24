import React from 'react'
import { Link } from 'react-router-dom'
import * as lucide from 'lucide-react';

// import Link from 
import linkedin from '../assets/LinkedIN.webp'
import htmlIcon from '../assets/html-5.png'
import cssIcon from '../assets/css-3.png'
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png'
import tailwindIcon from '../assets/tailwind.svg'
import qrcode from '../assets/projects/qr-code-generator.png'
import quiz from '../assets/projects/quiz-app.png'
import todo from '../assets/projects/todo-app.png'
import weather from '../assets/projects/weather-app.png'
import converter from '../assets/projects/unit-converter.png'
import netflix from '../assets/projects/netflix-clone.png'
import TTT from '../assets/projects/tic-tac-toe.png'


const Main = () => {
    return (
        <div className='flex flex-col w-full'>
            <aside className='w-full min-h-screen  bg-black flex flex-col justify-center items-center px-4 py-8'>
                <div className='w-full flex flex-col md:flex-row justify-around items-center gap-4 px-5 border'>
                    <img className='border rounded-full w-100' src={linkedin} alt="profile picture" />
                    <div className='flex flex-col md:w-1/2'>

                        <h1 className='text-4xl font-bold text-white my-4'>Hey! I'm <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>Rajani</span></h1>
                        <p className=' text-lg text-white'>I'm Rajani Ranjan Jha, a Web developer and 2nd year Computer Science student at IIT Patna. My interest lies in creating clean, responsive, and dynamic websites using HTML, CSS, JavaScript, and React.</p>
                        <br />
                        <p className=' text-lg text-white'>I'm always leveling up. I embrace new thrilling opportunities where I get to learn and make sick stuff with new people.</p>
                        <div className='w-full flex justify-center items-center mt-5'>
                            <ul className='w-full flex justify-center items-center gap-2'>
                                <li className=''>
                                    <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://www.linkedin.com/in/rajani-ranjan-jha/" target="_blank" rel="noopener noreferrer">

                                        <lucide.Linkedin size={25} color="blue" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li className=''>
                                    <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                </li>
                                <li className=''>
                                    <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="mailto:rajani_2312res829@iitp.ac.in" target="_blank" rel="noopener noreferrer">
                                        <lucide.Mail size={25} color="red" />
                                        E-Mail
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main className=' w-full flex flex-col items-center justify-start bg-black'>
                <div id='skills' className='flex flex-col items-center justify-center w-full py-10 bg-black border border-white rounded-2xl'>
                    <h2 className='text-3xl font-semibold text-white'>Skills</h2>
                    <div className=''>
                        <ul className='flex flex-wrap justify-center items-center gap-4 mt-4 text-lg text-white'>
                            <li className='flex items-center cursor-default p-2 rounded-xl gap-2 hover:shadow-red-400 hover:shadow-md hover:bg-white/20 transition-all'><img src={htmlIcon} alt="HTML" className='w-8' />HTML</li>
                            <li className='flex items-center cursor-default p-2 rounded-xl gap-2 hover:shadow-blue-500 hover:shadow-md hover:bg-white/20 transition-all'><img src={cssIcon} alt="CSS" className='w-8' />CSS</li>
                            <li className='flex items-center cursor-default p-2 rounded-xl gap-2 hover:shadow-yellow-300 hover:shadow-md hover:bg-white/20 transition-all'><img src={jsIcon} alt="JavaScript" className='w-8' />JavaScript</li>
                            <li className='flex items-center cursor-default p-2 rounded-xl gap-2 hover:shadow-blue-500 hover:shadow-md hover:bg-white/20 transition-all'><img src={reactIcon} alt="React" className='w-8' />React</li>
                            <li className='flex items-center cursor-default p-2 rounded-xl gap-2 hover:shadow-cyan-500 hover:shadow-md hover:bg-white/20 transition-all'><img src={tailwindIcon} alt="Tailwind" className='w-8' />Tailwind</li>

                        </ul>
                    </div>
                </div>
                <div id='projects' className='flex flex-col items-center justify-center w-full py-8 bg-black border border-white rounded-2xl'>
                    <h2 className='text-3xl font-semibold text-white'>Projects</h2>
                    <div className=''>
                        <ul className='flex flex-wrap justify-center items-center gap-4 mt-4 text-lg text-white'>
                            <li className='w-100 h-120 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Netflix UI Clone</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>HTML</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>

                                    </div>
                                    <br />
                                    A clone of the Netflix UI with responsive design
                                    <br />
                                    Features a carousel of movies and shows
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={netflix} alt="unit-converter" />
                                <div className='flex justify-between w-11/12'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/js-project/tree/main/Netflix-Clone" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://rajani-ranjan-jha.github.io/js-project/Netflix-Clone/" target="_blank" rel="noopener noreferrer">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </a>

                                </div>
                            </li>
                            <li className='w-100 h-120 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Tic Tac Toe Game</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>HTML</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>JS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />

                                    A Tic-Tac-Toe game with a good and responsive UI


                                </p>
                                <img className='w-80 m-4 rounded-sm' src={TTT} alt="unit-converter" />
                                <div className='flex justify-between w-11/12'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/js-project/tree/main/2-Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://rajani-ranjan-jha.github.io/js-project/2-Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </a>

                                </div>
                            </li>
                            <li className='w-100  flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Unit Converter</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>React</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Tailwind CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />
                                    Converts between different units of measurement
                                    <br />
                                    Supports various categories like length, weight, temperature, etc.
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={converter} alt="unit-converter" />
                                <div className='flex justify-between w-11/12'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/portfolio-projects/tree/main/unit-converter" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <Link className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' to="projects/unit-converter">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </Link>
                                </div>
                            </li>
                            <li className='w-100 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Quiz App</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>React</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Tailwind CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />
                                    A quiz application that allows users to take quizzes on various topics
                                    <br />
                                    Features a timer and score tracking
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={quiz} alt="quiz" />
                                <div className='flex justify-between w-9/10'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/portfolio-projects/tree/main/quiz-app" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <Link className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' to='projects/quiz'>
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </Link>
                                </div>
                            </li>
                            <li className='w-100 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>QR-Code Generator</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>React</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Tailwind CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />
                                    Generates QR codes for any URL or text
                                    <br />
                                    Also allows users to download the generated QR code
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={qrcode} alt="qr-code" />
                                <div className='flex justify-between w-9/10'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80  bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/portfolio-projects/tree/main/qr-code-generator" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <Link className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' to="projects/qr-code-generator">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </Link>
                                </div>
                            </li>
                            <li className='w-100 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Todo App</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>React</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Tailwind CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />
                                    A simple todo application to manage tasks
                                    <br />
                                    Features adding, deleting, and marking tasks as complete, using LocalStorage
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={todo} alt="todo-app" />
                                <div className='flex justify-between w-9/10'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/portfolio-projects/tree/main/todo-app" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <Link className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' to="projects/todo">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </Link>
                                </div>
                            </li>
                            <li className='w-100 flex flex-col justify-center items-center border rounded-xl p-5 hover:shadow-md cursor-default transition-all hover:bg-white/10'>
                                <h4 className='text-center text-2xl'>Weather App</h4>
                                <p className='text-sm text-center'>
                                    <div className='mt-4 flex flex-wrap gap-2 justify-center items-center'>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>React</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Tailwind CSS</span>
                                        <span className='p-2 bg-black text-white hover:bg-black/80 border border-white rounded-lg'>Responsive Web Design</span>
                                    </div>
                                    <br />
                                    A weather application that shows the current weather of any city
                                    <br />
                                    Uses OpenWeather API to fetch data
                                </p>
                                <img className='w-80 m-4 rounded-sm' src={weather} alt="weather-app" />
                                <div className='flex justify-between w-9/10'>
                                    <a className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha/portfolio-projects/tree/main/weather-app" target="_blank" rel="noopener noreferrer">
                                        <lucide.Github size={25} color="black" />
                                        Github
                                    </a>
                                    <Link className='flex gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' to="projects/weather">
                                        <lucide.ExternalLink size={25} color="green" />
                                        Preview
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                {/* <div id='experience' className='w-full flex flex-col items-center justify-center py-8 bg-black border border-white rounded-2xl'>
                    <h2 className='text-3xl font-semibold text-white'>Experience</h2>
                    <div className=''>
                        <ul className='flex flex-wrap justify-center items-center gap-4 mt-4 text-lg text-white'>
                            <li className='w-100 flex flex-col justify-center items-center border rounded-xl p-5'>
                                <h4 className='text-center text-2xl'>Internship at XYZ Company</h4>
                                <p className='text-sm text-center'>
                                    Worked on web development projects using React and Node.js
                                    <br />
                                    Collaborated with a team of developers to build responsive web applications
                                </p>
                            </li>
                        </ul>
                    </div>
                </div> */}
                <div id='about' className='w-full flex flex-col items-center justify-center p-8 bg-black border border-white rounded-2xl' >
                    <h2 className='text-3xl font-semibold text-white'>About Me</h2>
                    <p className='text-lg text-white text-center mt-4'>
                        I am a passionate web developer with a keen interest in building responsive and user-friendly web applications. I love to learn new technologies and improve my skills.
                    </p>

                </div>
                <div id='contact' className='w-full flex flex-col items-center justify-center py-8 bg-black border border-white rounded-2xl'>
                    <h2 className='text-3xl font-semibold text-white'>Contact Me</h2>
                    <p className='text-lg text-white text-center mt-4'>
                        Feel free to reach out to me via email or LinkedIn for any queries or collaboration opportunities.
                    </p>
                    <div className='flex gap-2 mt-5'>

                        <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://www.linkedin.com/in/rajani-ranjan-jha/" target="_blank" rel="noopener noreferrer">

                            <lucide.Linkedin size={25} color="blue" />

                        </a>
                        <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="https://github.com/Rajani-Ranjan-Jha" target="_blank" rel="noopener noreferrer">
                            <lucide.Github size={25} color="black" />

                        </a>

                        <a className='flex items-center justify-left gap-2 dark:bg-white hover:bg-white/80 bg-black dark:text-black text-white p-2 rounded-md' href="mailto:rajani_2312res829@iitp.ac.in" target="_blank" rel="noopener noreferrer">
                            <lucide.Mail size={25} color="red" />

                        </a>
                    </div>

                </div>

            </main>

        </div>
    )
}

export default Main

