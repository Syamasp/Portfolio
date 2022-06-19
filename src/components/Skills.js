import React from 'react'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills'className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    {/* container */}
    <div >
        <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>Skills</p>
        
        <p className='py-4'>// These are the technologies  I've worked with</p>
        
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Html} alt =''/>
        <p className='my-4'>Html</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Css} alt =''/>
        <p className='my-4'>CSS</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Bootstrap} alt =''/>
        <p className='my-4'>Bootstrap</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Javascript} alt =''/>
        <p className='my-4'>Javascript</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={ReactImg} alt =''/>
        <p className='my-4'>React</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Github} alt =''/>
        <p className='my-4'>Github</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Tailwind} alt =''/>
        <p className='my-4'>Tailwind</p>
        </div>
        
    </div>
    </div>
</div>

  )
}

export default Skills