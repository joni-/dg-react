import React, { Component } from 'react'

import Menu from './menu/Menu'


export default class Layout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        )
    }
}
