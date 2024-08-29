import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className='w-full h-16 fixed z-50 backdrop-blur-lg bg-transparent'>
            <div className='container h-full mx-auto px-2 py-2 xl:px-0 flex items-center justify-between'>

            </div>
            <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
        </div>
    )
}
