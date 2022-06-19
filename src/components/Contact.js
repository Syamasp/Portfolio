import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center p-4'>
<form  method='POST'action ='https://getform.io/f/2b1ab463-5883-4bea-935f-e3708c1d7970' className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-8 py-9 '>
       
        <p className='text-4xl font-bold inline border-b-4  border-orange-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email- syamasyamz3@gmail.com</p>
    </div>
<input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='Name'/>
<input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='Email'/>
<textarea className='bg-[#ccd6f6] p-2' name='message'  rows='10'  placeholder='Message'></textarea>
<button className='text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
</form>

    </div>
  )
}

export default Contact