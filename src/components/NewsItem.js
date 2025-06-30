import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className='badge rounded-pill bg-danger' style={{ left: '90%', zIndex: '1' }} >{source} </span>
                    </div>
                    <img src={!imageUrl ? "https://images.forexlive.com/images/Fed%20Michelle%20Bowman_id_5bfec85d-778c-4c3d-88d9-cacb6be7425c_size975.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  </h5>
                        <p className="card-text">{description}...</p>
                        <p className='cars-text'> <small className='text-menu'>By {!author ? "unknown" : author} <br /> <br /> on {new Date(date).toGMTString()}</small> </p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
