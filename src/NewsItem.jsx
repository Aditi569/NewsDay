import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {

        let { title, description, imageUrl, Newsurl } = this.props



        return (
            <div class="card mb-5" style={{ width: "18rem" }}>
                <img src={imageUrl} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={Newsurl} target="_blank" class="btn  btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem;
