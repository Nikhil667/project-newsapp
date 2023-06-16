import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 


    constructor(props){
        super(props);
        
        this.state = {
            // articles: [],
            "articles": [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Daily`
    }

    updatedNews = async() => {
        this.props.setProgress(10);    

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
        this.setState({loading : true})
        let data = await fetch(url);
        this.props.setProgress(30);    
        let parsedData = await data.json();
        this.props.setProgress(70);    
        this.setState ({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);    


    } 

    async componentDidMount () {
        this.updatedNews();

    }

    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updatedNews();
    }

    handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updatedNews();
    }

    // async componentDidMount () {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`; 
    //     this.setState({loading : true})

    // // &page=1
    // // pageSize=20 means number of news per page, here it means 20 news  

    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState ({ 
    //        articles: parsedData.articles, 
    //        totalResults: parsedData.totalResults,
    //        loading: false
    //    })

    // }

    // handlePrev = async () => {
    //     //console.log('Previous')
    //      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //      this.setState({loading : true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     //this.setState ({ articles: parsedData.articles})

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    // handleNext = async () => {
    //     // console.log('next')
    //     // console.log(this.state.page+1)
    //     // console.log(Math.ceil(this.state.totalResults/20))
    //     if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){ 

    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading : true})
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         this.setState ({ articles: parsedData.articles})

    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         })
    //     }
    // }

  render() {
    return (
        <div>
            <div className="container my-3">
                <h1 className='text-center' style={{margin: '35px'}}>News Daily - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                { this.state.loading && <Spinner />}
                <div className="row">

                { !this.state.loading && this.state.articles.map((ele)=>{
                        return <div className="col-md-4" key={ele.url}>
                                <NewsItems title={ele.title?ele.title:""} description={ele.description?ele.description:""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} time={ele.publishedAt} source={ele.source.name} />
                        </div>
                    })
                }
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous </button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr; </button>
                </div>

            </div>
        </div>
    )
  }
}





// ****************************************************
//INFINITE SCROLL

// LOADING BAR
// INFINITE SCROLL
// API KEY IN LOCAL




// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class News extends Component {

//     static defaultProps = {
//         country: 'in',
//         pageSize: 8,
//         category: 'general'
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string
//     }

//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }


//     constructor(props) {
//         super(props);
//         this.state = {
//             "articles": [],
//             loading: false,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Daily`
//     }

//     updatedNews = async() => {
//     this.props.setProgress(10);    

//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
//     this.setState({loading : true})
//     let data = await fetch(url);
//     this.props.setProgress(30);    
//     let parsedData = await data.json();
//     this.props.setProgress(70);    
//     this.setState ({ 
//         articles: parsedData.articles, 
//         totalResults: parsedData.totalResults,
//         loading: false
//     })
//     this.props.setProgress(100);    


//     } 

//     async componentDidMount () {
//         this.updatedNews();

//     }

//     fetchMoreData = async() => {
//         this.setState({
//             page: this.state.page + 1
//         })
        
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState ({ 
//             articles: this.state.articles.concat(parsedData.articles), 
//             totalResults: parsedData.totalResults
//         })
        
//     }

//     render() {
//         return (
//             <>
//                     <h1 className='text-center' style={{ margin: '35px' }}>News Daily - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                     {this.state.loading && <Spinner />}

                   
//                     <InfiniteScroll
//                         dataLength={this.state.articles.length}
//                         next={this.fetchMoreData}
//                         hasMore={this.state.articles.length !== this.state.totalResults}
//                         loader={<Spinner />}
//                     >
//                         <div className="container">
//                             <div className="row">

//                                 {this.state.articles.map((ele) => {
//                                     return <div className="col-md-4" key={ele.url}>
//                                         <NewsItems title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} time={ele.publishedAt} source={ele.source.name} />
//                                     </div>
//                                 })
//                                 }
//                             </div>
//                         </div>
//                     </InfiniteScroll>    
//             </>
//         )
//     }






















// }
