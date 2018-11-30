import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './media.css'

class Media extends Component {
    /*constructor(props) {
        super(props)
        // Enlazar el handleClick con la clase (conservar el contexto de la clase)
        this.handleClick = this.handleClick.bind(this)
    }*/
    handleClick = (evt) => {
        console.log('Hola mundo')
        console.log(this.props.title)
    }
    render() {
        return (
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img 
                        className='Media-image'
                        src={this.props.image}
                        alt={this.props.title}
                        width={260}
                        height={160}
                    />
                    <h3 className='Media-title'> {this.props.title} </h3>
                    <p className='Media-author'> {this.props.author} </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // type: PropTypes.oneOf(['video', 'audio'])
}

export default Media