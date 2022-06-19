import React from 'react'
import Calculator from '../assets/Calculator.png'
import Notes from '../assets/notes.png'
import Pizza from '../assets/Pizza.png'
import Sceneary from '../assets/Sceneary.png'
import Hexashop from '../assets/Hexashop.png'
import Adventure from '../assets/Adventure.png'
import TodoApp from '../assets/Todoapp.png'


const Work = () => {
    return (
        <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Work</p>
                    <p className='py-6' >// Check out some of my recent work</p>
                </div>
                {/* container */}
                <div
                    className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>
                    {/* grid item */}
                    <div style={{ backgroundImage: `url(${Notes})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://notesapp-netlifyapp.netlify.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/Notsapp_deploy_netlify">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Pizza})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://coruscating-kheer-1cbd74.netlify.app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/pizza-website/tree/master">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Sceneary})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                HTML/CSS Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://syamasp.github.io/Frontendprojects/Project1/">
                                    <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/Itali_scenary">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Hexashop})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                HTML/CSS Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://syamasp.github.io/SampleFrontend-projects/Project3">
                                    <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/SampleFrontend-projects">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TodoApp})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://resplendent-hotteok-1357ed.netlify.app">
                                    <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/TodoApp">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>

                                    
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Calculator})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center text-black'>

                                <a href="https://astonishing-marzipan-214a37.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                                </a>
                                <a href="https://github.com/Syamasp/Calculator-Javascript">
                                <button className='text-center rounded-lg px-4  py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work