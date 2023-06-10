import React, { Component } from 'react'
import loadingnew from './components/loading.gif'


export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loadingnew} alt="spinner" />
            </div>
        )
    }
}

export default Spinner
