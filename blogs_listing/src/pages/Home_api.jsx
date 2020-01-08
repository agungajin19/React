import React from 'react'
import Header from '../components/header'
import ListArticle from '../components/news_list'
import TopArticle from '../components/top_article'
import Axios from 'axios'

//News API
const url ='https://newsapi.org/v2/top-headlines?country=id&apiKey=ed7f829e2def4c558e0831a50968ac31'
const url1 = 'https://newsapi.org/v2/everything?apiKey=ed7f829e2def4c558e0831a50968ac31'

class Home extends React.Component{
    state = {
        listNews :[],
        listNewsEverything : [],
        isLoadingEverything : true,
        isLoading : true,
        category : 'Indonesia'
    }
    componentDidMount = ()=>{
       this.getTopList()
       this.getEveryThing()
    }
    getTopList = ()=>{
        const self = this
        Axios
            .get(`${url}`)
            .then(function(response){
                self.setState({listNews: response.data.articles, isLoading: false})
            })
            .catch(function(error){
                self.setState({isLoading: false})
            })
    }
    getEveryThing = () =>{
        const self = this
        Axios
            .get(`${url1}&q=${this.state.category}`)
            .then(function(response){
                self.setState({listNewsEverything: response.data.articles, isLoadingEverything: false})
            })
            .catch(function(error){
                self.setState({isLoadingEverything: false})
            })

    }
    handleCategory = async (e) => {
        const self = this
        console.warn('ini buat liat target',e)
        let keyword = e
        await self.setState({category : keyword, isLoadingEverything: true})
        self.getEveryThing()
    }

    handleSearch = async (e) => {
        const self = this
        console.warn('ini buat liat target',e.target.value)
        let keyword = e.target.value
        await self.setState({category : keyword, isLoadingEverything: true })
        self.getEveryThing()
    }

    render(){
        const{listNews, isLoading, listNewsEverything, isLoadingEverything} = this.state
        
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
                <div>
                <Header
                    prosesSearch={e => this.handleSearch(e)}
                    category = {e => this.handleCategory(e)}
                    {...this.props}
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
export default Home