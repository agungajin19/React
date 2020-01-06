import React from 'react'
import '../styles/list_article.css'

const list_judul=['Gabung Alpha Tech Academy Sekarang!', 'Ada apa antara Kobar dan Hasar?', 'Mengenal Arafat sang Master Python', 'Belajar reactJs itu seru. Kamu setuju?', 'Sudahkah kamu sehat mental?']
class ListArticle extends React.Component{
    render(){
        return(
            <div className='list'>
                <div className='row border'>
                    <h4 className='col-8'>Berita Terkini</h4>
                    <a href='#' className='col-4'>lihat semua</a>
                </div>
                {list_judul.map((judul,i) =>
                <div className='row border'>
                    <div className='col-1 bullet' style={{paddingLeft:'4px'}}>
                        <h5>#{i+1}</h5>
                    </div>
                    <div className='col-12'>
                        <h5 >{judul}</h5>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
export default ListArticle