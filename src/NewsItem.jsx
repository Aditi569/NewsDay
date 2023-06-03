import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {

        let { title, description, ImageUrl } = this.props



        return (
            <div class="card" style={{ width: "18rem" }}>
                <img src={ImageUrl} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/newsdetail" class="btn  btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem;
