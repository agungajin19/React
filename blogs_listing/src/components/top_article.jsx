import React from 'react'
import '../styles/top_article.css'

class TopArticle extends React.Component{
    render(){
        return(
            <div className='border judul'>
                <img src={this.props.image} style={{width:'100%'}}/>
                <a>{this.props.title}</a>
                <h5>{this.props.description}</h5>
                <p>Last update 3 min ago</p>
                <div className='row like' style={{margin:'0'}}>
                    <div className='col-4 posisi'>
                        <img href='#' src={require('../images/like.png')} style={{width:'30px'}} />
                    </div>
                    <div className='col-4 posisi'>
                        <img href='#' src={require('../images/share.png')} style={{width:'30px'}} />
                    </div>
                    <div className='col-4 posisi'>
                        <img href='#' src={require('../images/dislike.png')} style={{width:'30px'}} />
                    </div>
                </div>
            </div>
        )
    }
}
export default TopArticle