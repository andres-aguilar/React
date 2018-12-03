import React from 'react'
import Media from './media'

import './playlist.css'

function Platlist(props) {
    const playlist = props.data.categories[0].playlist
    return (
        <div className='Playlist'>
            { 
                playlist.map( item => {
                    return <Media key={item.id} {...item}/>
                } )
            }
        </div>
    )
}


export default Platlist