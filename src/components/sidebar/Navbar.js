import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            
                <nav className='navigation'>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/about">Обо мне</a></li>
                        <li><a href="/portfolio">Портфолио</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                    </ul>
                </nav>
               
        )
    }
}