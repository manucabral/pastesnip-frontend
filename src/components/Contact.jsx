import React, { useState, useCallback } from 'react'

export default function Contact() {
    return (
        <div className='bg-blue-800/10 text-white flex flex-col justify-center items-center pt-10 min-h-screen'>
            <div className='pb-10 text-4xl'>
                Feel free to <strong className='text-blue-500'>write</strong> us if you have any question, claim or suggestion.
            </div>
            <h4 className='text-4xl font-bold'>Contact us</h4>
            <form className='flex flex-col gap-4 mt-16 px-10 lg:mt-10 min-w-full lg:min-w-[500px]'>
                <input 
                    id='username' 
                    name='username' 
                    required maxLength={128} 
                    type='text' 
                    placeholder='Your name'
                    className='bg-blue-800/10 text-indigo-500 outline-none border-2 border-blue-500 rounded-3xl px-8 py-2'
                />
                <input 
                    id='email'
                    name='email'
                    type='email'
                    required maxLength={128}
                    placeholder='Your email address'
                    className='bg-blue-800/10 text-indigo-500 outline-none border-2 border-blue-500 rounded-3xl px-8 py-2'
                />
                <textarea 
                    id="message" 
                    name='message' 
                    required maxLength={102766} 
                    placeholder='Additional information'
                    className='bg-blue-800/10 text-indigo-500 outline-none border-2 border-blue-500 rounded-3xl px-8 py-6 min-h[16em]'
                >

                </textarea>
            </form>
        </div>
    )
}