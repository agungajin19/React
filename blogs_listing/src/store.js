import createStore from "unistore"
import Axios from 'axios'

const initialState ={
    api_key : '',
    email : '',
    fullname : '',
    status_login : '',
    category : 'indonesia',
    listNews : [],
    listNewsEverything : [],
    isLoading : '',
    isloadingEverything : '',
}
export const store = createStore(initialState)

const url ='https://newsapi.org/v2/top-headlines?country=id&apiKey=ed7f829e2def4c558e0831a50968ac31'
const url1 = 'https://newsapi.org/v2/everything?apiKey=ed7f829e2def4c558e0831a50968ac31'


export const actions = store => ({
    getTopList : ()=>{
        Axios
            .get(`${url}`)
            .then(function(response){
                store.setState({listNews: response.data.articles, isLoading: false})
            })
            .catch(function(error){
                store.setState({isLoading: false})
            })
    },
    getEveryThing : (state) =>{ 
        Axios
            .get(`${url1}&q=${state.category}`)
            
            .then(function(response){
                store.setState({listNewsEverything: response.data.articles, isLoadingEverything: false})
            })
            .catch(function(error){
                store.setState({isLoadingEverything: false})
            })
    },
    handleCategory : async (state,e) => { 
        console.warn('ini buat liat target',e)
        let keyword = e
        console.warn('cek sebelum berubah', state.category)
        console.warn('cek udah berubah', state.category)
        getEveryThingNews(keyword)
    },

    handleSearch : async (state,e) => { 
        console.warn('ini buat liat target',e.target.value)
        let keyword = e.target.value
        await store.setState({category : keyword, isLoadingEverything: true })
        getEveryThingNews(keyword)
    }
    
})

export const getEveryThingNews = async (keyword) =>{
    await Axios
        .get(`${url1}&q=${keyword}`)
        .then(function(response){
            store.setState({listNewsEverything: response.data.articles, isLoadingEverything: false})
        })
        .catch(function(error){
            store.setState({isLoadingEverything: false})
        })
}

