import React, { Component } from 'react'

import Menu from './menu/Menu'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>App here</h1>
            </div>
        )
    }
}
