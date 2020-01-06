import React from 'react'
import '../styles/top_article.css'

class TopArticle extends React.Component{
    render(){
        return(
            <div className='border'>
                <img src={require('../images/putriayako.jpeg')} style={{width:'100%'}}/>
                <h4>Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</h4>
                <p>Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang</p>
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