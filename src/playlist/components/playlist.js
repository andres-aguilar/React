import React from 'react'
import Media from './media'

import './playlist.css'

function Platlist(props) {
    return (
        <div className='Playlist'>
            { 
                props.playlist.map( item => {
                    return <Media key={item.id} handleClick={props.handleOpenModal} {...item}/>
                } )
            }
        </div>
    )
}


export default Platlist