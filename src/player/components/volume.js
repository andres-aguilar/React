import React from 'react'
import VolumeIcon from '../../icons/components/volume'

import './volume.css'

// TODO: Hacer que el boton de volumen silencie el video completamente al hacerle clic

function Volume(props) {
    return (
        <button 
            className='Volume'
        >
            <VolumeIcon size={25} color='white' />
            <div className='Volume-range'>
                <input 
                    type='range' 
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume