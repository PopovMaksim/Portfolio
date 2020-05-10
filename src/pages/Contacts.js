import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div id="contacts">
                <form action="mailto:maksim-popov-1996@mail.ru" method="get" target="_blank">
                    <input type="text" name="subject" placeholder="ВВедите тему" />
                    <textarea name="body"></textarea>
                    <input type="submit" value="Create email"></input>
                </form> 
            </div>
        )
    }
}