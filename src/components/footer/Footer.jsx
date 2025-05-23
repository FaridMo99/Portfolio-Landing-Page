import React from 'react'
import {FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <footer className='w-full h-[33vh] text-white/30 border-t-white/20 border-t mt-4 flex flex-col justify-center items-center'>
        <div>&copy; 2025 Farid Mohseni. All rights reserved.</div>
        <a href=""><FaGithub size={30} className='mt-4'/></a>
    </footer>
  )
}

export default Footer