import React, { Component } from 'react';



export default class Works extends Component {
    render() {
        const worksItems = [
            {
                name: "test1",
                urlImage: "",
                urlExample: "",
                urlGit: ""
            },
            {
                name: "test2",
                urlImage: "",
                urlExample: "",
                urlGit: ""
            },
            {
                name: "test3",
                urlImage: "",
                urlExample: "",
                urlGit: ""
            }
        ];

        let workItems = worksItems.map((item) => 
            <article className="work-item">
                <h3 className="work-heading">{ item.name }</h3>
            </article>
        );
        
        return (
            <React.Fragment>
                <section className="works-title">
                    <h2> Мои работы </h2>
                </section>
                <section className="works-example">
                    {workItems}
                </section>
                
            </React.Fragment>
        )
    }
}