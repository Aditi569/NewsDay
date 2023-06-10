import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {

        let { title, description, imageUrl, Newsurl } = this.props



        return (
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/06/02/600x338/MP_Board_result_2023_1684805855929_1685676910384.jpg" : imageUrl} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={Newsurl} target="_blank" className="btn  btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem;
