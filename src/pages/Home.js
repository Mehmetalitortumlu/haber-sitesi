import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'
import { useNavigate } from "react-router-dom";
function Home() {
  const { data, loading, pagesNum, increasePagesNum, decreasePagesNum } = useData()
  const navigate = useNavigate()

  return (
    <>
 
       { loading ? <div className='text-center' style={{ fontSize: "2rem" }}> Sayfa Yükleniyor ... </div> : <div id="carouselExampleDark" class="carousel carousel w-75 mx-auto carousel-dark slide mt-2" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={data.articles[0].urlToImage} className="d-block w-100 mx-auto home-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='home-h-color'>{data.articles[0].description}</h5>
                <p className='home-h-color'> <a className='home-h-color' target='_blank' href={data.articles[0].url}> Devamı İçin tıklayın</a> </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={data.articles[1].urlToImage} className="d-block w-100 home-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='.home-h-1-color'>{data.articles[1].description}</h5>
                <p className='.home-h-1-color'><a className='home-h-1-color' target='_blank' href={data.articles[1].url}> Devamı İçin tıklayın</a></p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={data.articles[2].urlToImage} className="d-block w-100 home-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='home-h-color'>{data.articles[2].description}</h5>
                <p className='home-h-color'><a className='home-h-1-color' target='_blank' href={data.articles[2].url}> Devamı İçin tıklayın</a></p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      }

      <div className='container '>
        <div className="row mt-5 ">
          {!loading && data.articles.map((data, i) => (
            <div key={i} className="col-12 col-md-4 mb-3 d-flex justify-content-center ">

              <div className="card" style={{ width: "25rem" }}>
                <img src={data.urlToImage} className="card-img-top home-img" alt="resim bulunamdı" />
                <div className="card-body">
                  <h5 className="card-title"> {data.title} </h5>
                  <p className="card-text"> {data.content} </p>
                </div>
                <div className="card-body">
                  <p className="card-link text-center"> Kaynak: {data.source.name} </p>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-success'>
                      <a target="_blank" href={`${data.url}`} className="card-link ">
                        Devamı için tıklayın ...
                      </a>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
      {!loading && <div className='text-center'> <p>Toplam sonuc : {data.articles.length}
        <br />
        Sayfa başına haber: {data.articles.length}
        <br /> Sayfa sayısı: {pagesNum} </p>
        <div className='d-flex justify-content-center'>
          <p onClick={() => navigate(-1)}><Link className='btn btn-success px-2 me-5' onClick={decreasePagesNum}>Önceki Sayfa</Link></p>
          <p onClick={() => navigate(+1)}> <Link className='btn btn-success px-2' onClick={increasePagesNum}>Sonraki Sayfa</Link> </p>
        </div>
      </div>

      }
      
    </>
  )
}

export default Home
