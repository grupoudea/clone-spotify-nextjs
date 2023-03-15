
import React from 'react'

interface PlaylistCardProps {
  image: string,
  title: string,
  description: string
}

const PlaylistCard = ({image, title, description}: PlaylistCardProps) => {
  return (
    <div>
        <div className='flex flex-col p-4 bg-spotify-black rounded-x1 w-[181px] gap-3'>
            <img src={image} alt="" />
            <span className="text-md font-bold">{title}</span>
            <span className="text-sm text-spotify-gray">{description}</span>
        </div>

    </div>
  )
}

export default PlaylistCard