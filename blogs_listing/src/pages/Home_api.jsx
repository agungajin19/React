import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {actions} from '../store'

import Header from '../components/header'
import ListArticle from '../components/news_list'
import TopArticle from '../components/top_article'
import Axios from 'axios'

class Home extends React.Component{
    componentDidMount = ()=>{
       this.props.getTopList()
       this.props.getEveryThing()
    }
    render(){
        const{listNews, isLoading, listNewsEverything, isLoadingEverything} = this.props
        
        const topHeadLines = listNews.filter(item => {
            if (item.content != null && item.urlToImage != null){
                return item
            }
            return false
        })
        const newsEverything = listNewsEverything.filter(item => {
            if (item.content !=null && item.urlToImage != null){
                return item
            }
            return false
        })
        console.warn('ini list',listNewsEverything);
        

        const beritaAnyar = newsEverything.slice(0,5).map((item,key) => {
            return <TopArticle
                        title = {item.title}
                        image = {item.urlToImage}
                        description = {item.description}
                        url = {item.url}
                    />
        })

        
        return(
            <div>
                <div>
                <Header
                    prosesSearch={e => this.props.handleSearch(e)}
                    onCategory = {e => this.props.handleCategory(e)}
                    />
                <div className=" container row pt-5" style={{paddingLeft:'12%'}}>
                    <div className="col-md-5 col-sm-12 pr-4">
                        {isLoading ? <div style={{textAlign : 'center'}}>Loading ...</div> : <ListArticle dataListArticle={topHeadLines}/>}
                    </div>
                    <div className="col-md-7 col-sm-12 ">
                        {isLoadingEverything ? <div style={{textAlign : 'center'}}>Loading ...</div> : beritaAnyar}
                    </div>
                </div>
            </div>
               
            </div>

        )
    }
}
export default connect('listNews, listNewsEverything, isLoading, isLoadingEverything, category',
    actions
)(withRouter(Home))