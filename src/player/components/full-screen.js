import React from 'react'
import FullScreenIcon from '../../icons/components/full-screen'

function FullScreen(props) {
    return (
        <div className="FullScreenx" onClick={props.handleFullScreenClick}>
            <FullScreenIcon size={25} color='white' />
        </div>
    )
}

export default FullScreen