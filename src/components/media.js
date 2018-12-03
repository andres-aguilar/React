import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './media.css'

/*
    constructor:        Método constructor del compoenente, se llama antes de montar el componente
    componentWillMount: Método llamado justo antes de montar el componente
    render:             Método que contiene todos los elementos a renderizar (JSX)
    componentDidMount:  Método llamado después de montar el elemento, solo se llama una vez,
                        aquí se enlazan los eventos
    compoenentWillReceiveProps: Método llamado al recibir nuevas propiedades
    shuldComponentUpdate: Método que condiciona el rerenderizado del componente
    componentWillRender:  Método llamado para re renderizar el componenete (llama al método render)
    componentWillUnmount: Método que se llama antes de que el componenete sea desmontado
    componentDidCatch:    Método que se invoca al ocurrir un error al renderizar el componente o alguno 
                          de sus componentes hijos
*/

class Media extends PureComponent {
    /*constructor(props) {
        super(props)
        // Enlazar el handleClick con la clase (conservar el contexto de la clase)
        this.state = {
            author: props.author
        }
    }*/
    state = {
        author: this.props.author
    }
    handleClick = (evt) => {
        this.setState({
            author: 'Yosh'
        })
    }
    render() {
        return (
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img 
                        className='Media-image'
                        src={this.props.cover}
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
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // type: PropTypes.oneOf(['video', 'audio'])
}

export default Media