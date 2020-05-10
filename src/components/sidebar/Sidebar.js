import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import FooterSidebar from './FooterSidebar';

export default class Sidebar extends Component {
    render() {
        return (
            <aside id="sidebar">
                <Logo  name="Maksim Popov" />
                
                <Navbar />

                <FooterSidebar />
            </aside>
        )
    }
}