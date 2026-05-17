import React from 'react'
import mainLogo from '../../assets/main-icon.png'
import { FaSearch } from 'react-icons/fa'
import map from '../../assets/pin.gif'
import { useLocation } from '../../context/LocationContext'

const Header = () => {
    const { location, loading, error } = useLocation();

    if (loading) {
        return <div>Loading location...</div>;
    }
    return (
    <div className="w-full text-sm bg-white">
        {/* Top Navbar */}
        <div className="px-4 md:px-8">
            {/* Left Part */}
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
                <div className="flex items-center space-x-4">
                    <img src={mainLogo} alt="logo" className='h-8 object-contain cursor-pointer' />
                </div>
                <div className='relative'>
                    <input type="text" placeholder='Search for movies, events, plays and sports'
                    className='border border-gray-300 rounded py-1.5 px-4 w-400px text-sm outline-none'/>
                    <FaSearch className="absolute right-2 top-2.5 text-gray-400" />
                </div>
            </div>
            {/* Right Part */}
            <div className="flex item-center space-x-6">
                <div className="text-sm font-medium cursor-pointer">
                    {location && <img src={map} alt="loading..." className='w-10 h-10' />}
                    {location && <p>{location}  &nbsp;</p>}
                </div>
                <button className='bg-[#f84464] cursor-pointer
                text-white px-3 py-1.5 rounded text-sm font-medium'>
                    Sign in
                </button>
            </div>
            {/* Bottom Navbar */}
            <div className="bg-[#f2f2f2] px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700">
                    <div className="flex items-center space-x-6 font-medium">
                        <span className="cusor-pointer hover:text-red-500">Movies</span>
                        <span className="cusor-pointer hover:text-red-500">Stream</span>
                        <span className="cusor-pointer hover:text-red-500">Event</span>
                        <span className="cusor-pointer hover:text-red-500">Plays</span>
                        <span className="cusor-pointer hover:text-red-500">Sports</span>
                        <span className="cusor-pointer hover:text-red-500">Activities</span>
                    </div>
                    <div className="flex items-center space-x-6 font-medium">
                        <span className="cusor-pointer hover:underline">ListYourshow</span>
                        <span className="cusor-pointer hover:underline">Corporates</span>
                        <span className="cusor-pointer hover:underline">Offers</span>
                        <span className="cusor-pointer hover:underline">Gift Cards</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header