import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    
    return (
        <div className='bg-dark-bg flex pr-[24px] pl-[24px]'><Outlet /></div>
    )
}

export default MainLayout