import React from 'react'
import '../styles/list_article.css'



class NewsList extends React.Component{
    render(){
        return(
            <div className='list'>
                <div className='row border'>
                    <h4 className='col-8'>Berita Terkini</h4>
                    <a href='#' className='col-4'>lihat semua</a>
                </div>
                {this.props.dataListArticle.slice(0,5).map((item,i) =>
                <div className='row border'>
                    <div className='col-1 bullet' style={{paddingLeft:'4px'}}>
                        <h5>#{i+1}</h5>
                    </div>
                    <div className='col-12 judul'>
                        <a href='#' >{item.title}</a>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
export default NewsList