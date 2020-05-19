import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                <div className="logo-name">{this.props.name}</div>
                <div className="logo-gradient"></div>
                <div className="logo-spotlight"></div>
            </div>
        )
    }
}