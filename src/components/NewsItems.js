import React, { Component } from 'react'
import defaultImage from './defaultImage.png'

// export default class NewsItems extends Component {

//     // constructor(){
//     //     super();
//     //     console.log("constructor from news item constructor");
//     // }

//     render() {

//         let {title, description, imageUrl, newsUrl, author ,time, source} = this.props
        
//         return (
//             <div className='my-3'>
//                 <div className="card">
//                     <img src={!imageUrl? defaultImage : imageUrl} className="card-img-top" alt="..."/>
//                         <div className="card-body">
//                         <span className="badge text-bg-danger mb-1">{source}</span>
//                             <h5 className="card-title">{title}</h5>
//                             <p className="card-text">{description}</p>
//                             <p className="card-text"><small className="text-muted">By {author?author: "Unknown"} updated {new Date(time).toUTCString()}</small></p>
//                             <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
//                         </div>
//                 </div>
//             </div>
//         )
//     }



//***************************************************** */

// INFINITE SCROLL


export default class NewsItems extends Component {

    render() {

        let {title, description, imageUrl, newsUrl, author ,time, source} = this.props
        
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl? defaultImage : imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="badge text-bg-danger mb-1">{source}</span>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author?author: "Unknown"} updated {new Date(time).toUTCString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }







    
}
