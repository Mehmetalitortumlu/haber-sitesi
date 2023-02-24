import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext'

function Healty() {
    const navigate = useNavigate();
    const {
        loading,
        pagesNum,
        decreasePagesNum,
        increasePagesNum,
        filteredBusiness,
        filterText,
        setFilterText,
        healty,
        filteredHealty
    } = useData();

    return (
        <>
            {
                loading &&
                <div className='text-center' style={{ fontSize: "2rem" }}>
                    Sayfa Yükleniyor ...
                </div>
            }
            <div className='container'>
                <div className="row mt-5 ">
                    <div className="col-12 d-flex flex-column align-items-center col-md-6 col-lg-4 mx-auto ">
                        <div className="input-group mb-3">
                            <input value={filterText} onChange={(e) => setFilterText(e.target.value)} type="text" className="form-control" placeholder="Lütfen aramak istediğiniz başlığı yazınız..." />
                        </div>
                        <p className='mt-5'>
                            Aranan Kelime :
                            <span className="filterText">
                                {filterText}
                            </span>
                        </p>
                        <p className='text-center mt-5 fw-bold'> Toplam sonuc : {filteredHealty.length} </p>

                        {!loading && <div className='mt-2'>
                            <h3 className='mt-5'>Popüler İşletme Haberleri</h3>
                            <div className="card mt-5 mb-3" style={{ width: "95%" }}>
                                <img src={`${healty.articles[7].urlToImage !== null ? healty.articles[7].urlToImage : "https://media.istockphoto.com/id/1197671817/tr/foto%C4%9Fraf/siyah-arka-plan-soyut-gri-ve-g%C3%BCm%C3%BC%C5%9F-renk-tasar%C4%B1m%C4%B1-ile-eski-duvar-doku-%C3%A7imento-kirli-gri.jpg?s=612x612&w=0&k=20&c=NBQwzWXb0p0w42mWfbwWWvO1DiNIzFn10xAmsCDpXgU="}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{healty.articles[7].title}</h5>
                                    <p className="card-text fw-bold"> Kaynak : {healty.articles[7].source.name} </p>
                                    <div className='d-flex justify-content-end'>  <a target="_blank" rel="noopener noreferrer" href={`${healty.articles[7].url}`} className="btn btn-success">Devamını oku...</a> </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ width: "95%" }}>
                                <img src={`${healty.articles[8].urlToImage !== null ? healty.articles[8].urlToImage : "https://media.istockphoto.com/id/1197671817/tr/foto%C4%9Fraf/siyah-arka-plan-soyut-gri-ve-g%C3%BCm%C3%BC%C5%9F-renk-tasar%C4%B1m%C4%B1-ile-eski-duvar-doku-%C3%A7imento-kirli-gri.jpg?s=612x612&w=0&k=20&c=NBQwzWXb0p0w42mWfbwWWvO1DiNIzFn10xAmsCDpXgU="}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{healty.articles[8].title}</h5>
                                    <p className="card-text fw-bold"> Kaynak : {healty.articles[8].source.name} </p>
                                    <div className='d-flex justify-content-end'>  <a target="_blank" rel="noopener noreferrer" href={`${healty.articles[8].url}`} className="btn btn-success">Devamını oku...</a> </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ width: "95%" }}>
                                <img src={`${healty.articles[9].urlToImage !== null ? healty.articles[9].urlToImage : "https://media.istockphoto.com/id/1197671817/tr/foto%C4%9Fraf/siyah-arka-plan-soyut-gri-ve-g%C3%BCm%C3%BC%C5%9F-renk-tasar%C4%B1m%C4%B1-ile-eski-duvar-doku-%C3%A7imento-kirli-gri.jpg?s=612x612&w=0&k=20&c=NBQwzWXb0p0w42mWfbwWWvO1DiNIzFn10xAmsCDpXgU="}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{healty.articles[9].title}</h5>
                                    <p className="card-text fw-bold"> Kaynak : {healty.articles[9].source.name} </p>
                                    <div className='d-flex justify-content-end'>  <a target="_blank" rel="noopener noreferrer" href={`${healty.articles[9].url}`} className="btn btn-success">Devamını oku...</a> </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: "95%" }}>
                                <img src={`${healty.articles[10].urlToImage !== null ? healty.articles[10].urlToImage : "https://media.istockphoto.com/id/1197671817/tr/foto%C4%9Fraf/siyah-arka-plan-soyut-gri-ve-g%C3%BCm%C3%BC%C5%9F-renk-tasar%C4%B1m%C4%B1-ile-eski-duvar-doku-%C3%A7imento-kirli-gri.jpg?s=612x612&w=0&k=20&c=NBQwzWXb0p0w42mWfbwWWvO1DiNIzFn10xAmsCDpXgU="}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{healty.articles[10].title}</h5>
                                    <p className="card-text fw-bold"> Kaynak : {healty.articles[10].source.name} </p>
                                    <div className='d-flex justify-content-end'>  <a target="_blank" rel="noopener noreferrer" href={`${healty.articles[10].url}`} className="btn btn-success">Devamını oku...</a> </div>
                                </div>
                            </div>
                        </div>}
                    </div>



                    <div className="col-12 col-md-12 col-lg-8 ">
                        {!loading && filteredHealty.map((healty, i) => (
                            <div key={i} className="col-12 d-flex justify-content-end">
                                <div className="card mb-3" style={{ maxWidth: "900px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={healty.urlToImage !== null ? healty.urlToImage : "https://media.istockphoto.com/id/1197671817/tr/foto%C4%9Fraf/siyah-arka-plan-soyut-gri-ve-g%C3%BCm%C3%BC%C5%9F-renk-tasar%C4%B1m%C4%B1-ile-eski-duvar-doku-%C3%A7imento-kirli-gri.jpg?s=612x612&w=0&k=20&c=NBQwzWXb0p0w42mWfbwWWvO1DiNIzFn10xAmsCDpXgU="} className="img-fluid h-100 rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{healty.title}</h5>
                                                <p className="card-text">{healty.content}</p>
                                                <p className="card-text fw-bold"> Kaynak : {healty.source.name} </p>
                                                <p className="card-text">
                                                    <small className="text">
                                                        Yayınlanma tarihi :{healty.publishedAt}
                                                    </small>
                                                </p>
                                                <div className='d-flex justify-content-end'>
                                                    <button className='btn btn-success'>
                                                        <a href={healty.url} target="_blank" rel="noopener noreferrer" className="card-link ">
                                                            Devamı için tıklayın ...
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                !loading &&
                <div className='text-center mt-5'>
                    <p className='mb-5'>Toplam sonuc : {filteredHealty.length}
                        <br />
                        Sayfa başına haber: {filteredHealty.length !== "" && healty.articles.length}
                        <br /> Sayfa sayısı: {pagesNum} </p>
                </div>
            }
            <div className='d-flex justify-content-center'>
                <p onClick={() => navigate(-1)}>
                    <button className='btn btn-success px-2 me-5' onClick={decreasePagesNum}>
                        Önceki Sayfa
                    </button>
                </p>
                <p onClick={increasePagesNum}>
                    <button onClick={() => navigate(+1)} className='btn btn-success px-2' >
                        Sonraki Sayfa
                    </button>
                </p>
            </div>

        </>
    )
}

export default Healty;
