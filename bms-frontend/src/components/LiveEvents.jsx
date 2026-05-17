import React from 'react'
import { events } from "../utils/constants"

const LiveEvents = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-6">The Best Of Live Events</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {
                    events.map((event, index) => (
                        <div className="rounded-xl overflow-hidden relative group shadow-sm cursor-pointer" key={index}>
                            <img 
                            src={event.img} 
                            alt={event.title} 
                            className="w-full h-56px object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LiveEvents