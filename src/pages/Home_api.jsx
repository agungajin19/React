import React from 'react'
import Header from '../components/header'
import ListArticle from '../components/news_list'
import TopArticle from '../components/top_article'
import {withRouter} from 'react-router-dom'
import {connect} from 'unistore/react'
import {store, actions} from "../store"

//News API
const url ='https://newsapi.org/v2/top-headlines?country=id&apiKey=ed7f829e2def4c558e0831a50968ac31'
const url1 = 'https://newsapi.org/v2/everything?apiKey=ed7f829e2def4c558e0831a50968ac31'

class Home extends React.Component{
    // state = {
    //     listNews :[],
    //     listNewsEverything : [],
    //     isLoadingEverything : true,
    //     isLoading : true,
    //     category : 'Indonesia'
    // }
    componentDidMount = ()=>{
       this.props.getTopList()
       this.props.getEveryThing()
    }
    // getTopList = ()=>{
    //     const self = this
    //     Axios
    //         .get(`${url}`)
    //         // .then(function(response){
    //         //     self.setState({listNews: response.data.articles, isLoading: false})
    //         // })
    //         .then(function(response){
    //             store.setState({listNews: response.data.articles, isLoading: false})
                
    //         })
    //         .catch(function(error){
    //             store.setState({isLoading: false})
    //         })
    //         console.log('cek get top list',this.props.listNews)
    // }
    // getEveryThing = () =>{
    //     const self = this
    //     Axios
    //         .get(`${url1}&q=${this.props.category}`)
    //         .then(function(response){
    //             store.setState({listNewsEverything: response.data.articles, isLoadingEverything: false})
    //         })
    //         .catch(function(error){
    //             store.setState({isLoadingEverything: false})
    //         })

    // }
    // handleCategory = async (e) => {
    //     const self = this
    //     let keyword = e
    //     await store.setState({category : keyword, isLoadingEverything: true})
    //     self.getEveryThing()
    // }

    // handleSearch = async (e) => {
    //     const self = this
    //     let keyword = e.target.value
    //     await store.setState({category : keyword, isLoadingEverything: true })
    //     self.getEveryThing()
    // }

    render(){
        
        const{listNews, isLoading, listNewsEverything, isLoadingEverything} = this.props
        console.log('cekisLoading',isLoading)
        
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
                <div>cek</div>
                {/* <div>
                <Header
                    prosesSearch={e => this.props.handleSearch(e)}
                    category = {e => this.props.handleCategory(e)}
                    {...this.props}
                    />
                <div className=" container row pt-5" style={{paddingLeft:'12%'}}>
                    <div className="col-5 pr-4">
                        {isLoading ? <div style={{textAlign : 'center'}}>Loading ...</div> : <ListArticle dataListArticle={topHeadLines}/>}
                    </div>
                    <div className="col-7 ">
                        {isLoadingEverything ? <div style={{textAlign : 'center'}}>Loading ...</div> : beritaAnyar}
                    </div>
                </div>
            </div> */}
               
            </div>

        )
    }
}

export default connect('category, isLoading, isLoadingEverything, listNews, listNewsEverything ', actions)(withRouter(Home))