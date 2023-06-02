import React, { Component } from 'react'
import NewsItem from '../NewsItem';

export class News extends Component {
    render() {
        return (
            <div className='Container my-3'>
                <h1>NewsDay - Top Headlines</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem tittle="my-Tittle" description="mydesc" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem tittle="my-Tittle" description="mydesc" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem tittle="my-Tittle" description="mydesc" />
                    </div>

                </div>

            </div >
        )
    }
}

export default News;
