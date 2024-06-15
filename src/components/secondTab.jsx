import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const secondTab = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState(0)
    const [image, setimage] = useState(0)
    useGSAP(() => {
        gsap.from('#form', {
            x: -500,
            duration: 1.3,
            ease: 'power2.inOut'
        })
        gsap.from('#image', {
            x: 500,
            duration: 1.3,
            ease: 'power2.inOut'
        })
    }, [])
    
    return (
        < div className='box h-full w-full flex items-center overflow-hidden' >
            <form id='form' className='flex w-1/2 flex-col  gap-10 relative' >

                <h1 className='text-2xl font-medium'>Next ➡</h1>
                <div className='flex flex-col gap-2 '>

                    <label htmlFor="">Email</label>
                    <input type="email" className='px-2 py-3 bg-zinc-300 shadow-md outline-none w-full rounded-xl' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='px-2 py-3 bg-zinc-300 shadow-md outline-none w-full rounded-xl' />
                </div>
                <div className='w-1/2 flex justify-end'>

                    <button className='px-3 py-2 rounded-md bg-indigo-700 w-1/3 absolute right-0 text-zinc-100 hover:shadow-indigo-800 shadow-sm transition-all 3s linear capitalize text-sm'>next</button>
                </div>


            </form>
            <div className='h-fit w-1/2 flex justify-center'>
            <img id='image' width="94" height="94" src="https://img.icons8.com/3d-fluency/94/paper-plane.png" alt="paper-plane"/>
            </div>
        </div >
    )
}

export default secondTab