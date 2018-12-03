import React from 'react'
import Media from './media'

import Play from '../../icons/components/play'

import './playlist.css'

function Platlist(props) {
    const playlist = props.data.categories[0].playlist
    return (
        <div className='Playlist'>
        <Play size={50} color='black' />
            { 
                playlist.map( item => {
                    return <Media key={item.id} {...item}/>
                } )
            }
        </div>
    )
}


export default Platlist