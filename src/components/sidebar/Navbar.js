import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            
                <nav className='navigation'>
                    <ul>
                        <li>
                            <a href="/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Обо мне
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Портфолио
                            </a>
                        </li>
                        <li>
                            <a href="/contacts">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
               
        )
    }
}