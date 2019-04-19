import React, { Component } from 'react'
import Layout from "../Layout"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }

    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden })
    }

    render() {

        return (
            <Layout />
        )
    }
}

export default Container;

