import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                {this.props.name}
            </div>
        )
    }
}