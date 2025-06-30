import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("Hello i am Constructor from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e4902b1444e428c94656fa3b6effcc9&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }

    async componentDidMount() {
        this.updateNews();
    }


    handlePreviousClick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e4902b1444e428c94656fa3b6effcc9&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseData = await data.json();
        // console.log(parseData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
        //     loading: false
        // }) 
        // optional

        this.setState({page: this.state.page - 1});
        this.updateNews();

    }

    handleNextClick = async () => {
        // console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e4902b1444e428c94656fa3b6effcc9&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parseData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parseData.articles,
        //         loading: false
        //     })
        // }
        // optional


        this.setState({page: this.state.page + 1});
        this.updateNews();


    }

    render() {
        console.log("render");

        return (
            <div className='container my-3'>
                <h2 className="text-center">
                    NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}Headlines
                </h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-6" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className='btn btn-outline-secondary' onClick={this.handlePreviousClick}> <b> &larr; </b> Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className='btn btn-outline-secondary' onClick={this.handleNextClick}>Next <b> &rarr;</b></button>
                </div>
            </div>
        )
    }
}

export default News
