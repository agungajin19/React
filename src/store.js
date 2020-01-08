import createStore from 'unistore'
import Axios from 'axios'

const initialState = {
    api_key : '',
    fullname : '',
    email : '',
    is_login : false,
    category : 'Indonesia',
    isLoading : true,
    isLoadingEverything : true,
    listNews : [],
    listNewsEverything : [],
    cek : 'cuma pengen ngecek'
}

export const store = createStore(initialState)

const url ='https://newsapi.org/v2/top-headlines?country=id&apiKey=ed7f829e2def4c558e0831a50968ac31'
const url1 = 'https://newsapi.org/v2/everything?apiKey=ed7f829e2def4c558e0831a50968ac31'

export const actions = store => ({
    getTopList : (state)=>{
        const self = this
        Axios
            .get(`${url}`)
            .then(function(response){
                store.setState({listNews: response.data.articles, isLoading: false})
                console.log('cekisLoading', isLoading)
                
            })
            .catch(function(error){
                store.setState({isLoading: false})
            })
    },
    getEveryThing : (state) =>{
        const self = this
        Axios
            .get(`${url1}&q=${this.props.category}`)
            .then(function(response){
                store.setState({listNewsEverything: response.data.articles, isLoadingEverything: false})
            })
            .catch(function(error){
                store.setState({isLoadingEverything: false})
            })
    },
    handleCategory : async (state,e) => {
        const self = this
        let keyword = e
        await store.setState({category : keyword, isLoadingEverything: true})
        self.getEveryThing()
    },
    handleSearch : async (state,e) => {
        const self = this
        let keyword = e.target.value
        await store.setState({category : keyword, isLoadingEverything: true })
        self.getEveryThing()
    }
})
