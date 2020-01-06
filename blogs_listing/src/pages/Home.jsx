import React from 'react'
import Header from '../components/header'
import ListArticle from '../components/list_article'
import TopArticle from '../components/top_article'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className=" container row pt-5" style={{paddingLeft:'12%'}}>
                    <div className="col-5 pr-4">
                        <ListArticle/>
                    </div>
                    <div className="col-7 ">
                        <TopArticle/>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home