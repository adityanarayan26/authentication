import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const firstTab = () => {
    const [value, setvalue] = useState(0)
    const [c, setc] = useState(0)
    const navigate = useNavigate()
    useGSAP(() => {
        gsap.to('#form', {
            x: value,
            duration: 1.3,
            ease: 'power2.inOut'
        })
        gsap.to('#image', {
            x: c,
            duration: 1.3,
            ease: 'power2.inOut'
        })
    }, [value])
    const handleonclick = (e) => {
        e.preventDefault()
        setvalue(-500)
        setc(500)
        setTimeout(() => {
            navigate('/2')

        }, 1300);
    }
    return (

        <div className='box h-full w-full flex items-center overflow-hidden z-0' >
            <form id='form' className=' flex w-1/2 flex-col  gap-10 relative z-10' >

                <h1 className='text-2xl font-medium'>Register Account</h1>
                <div className='flex flex-col gap-2 '>

                    <label htmlFor="">First Name</label>
                    <input type="name"  className='px-2 py-3 bg-zinc-300 shadow-md outline-none w-full rounded-xl' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="password" className='px-2 py-3 bg-zinc-300 shadow-md outline-none w-full rounded-xl' />
                </div>
                <div className='w-1/2 flex justify-end'>

                    <button type='submit' onClick={handleonclick} className='px-3 py-2 rounded-md bg-indigo-700 w-1/3 absolute right-0 text-zinc-100 hover:shadow-indigo-800 shadow-sm transition-all 3s linear capitalize text-sm'>Next </button>
                </div>

            </form>
            <div className='h-fit w-1/2 flex justify-center'>
                <img id='image' width="94" height="94" src="https://img.icons8.com/3d-fluency/94/writer-male.png" alt="writer-male" />
            </div>
        </div>
    )
}

export default firstTab