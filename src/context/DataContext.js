import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react'
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [business, setBusiness] = useState([]);
    const [entertainment, setEntertainment] = useState([]);
    const [general, setGeneral] = useState([]);
    const [healty, setHealty] = useState([]);
    const [science, setScience] = useState([]);
    const [sports, setSports] = useState([]);
    const [tecnology, setTecnology] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagesNum, setPagesNum] = useState(1);

    useEffect(() => {
        let themes = localStorage.getItem('pagesnum')
        setPagesNum(JSON.parse(themes) || 1)
    }, [])

    useEffect(() => {
        localStorage.setItem('pagesnum', JSON.stringify(pagesNum))

    }, [pagesNum])


    const increasePagesNum = () => {
        if (pagesNum <= 6) {
            setPagesNum(pagesNum + 1)
        }
    }

    const decreasePagesNum = () => {
        if (pagesNum != 1) {
            setPagesNum(pagesNum - 1)
        }
    }


    useEffect(() => {
        (async () => {
            try {
                const { data: data } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: business } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: entertainment } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: general } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: healty } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: science } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: sports } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=edcf149de5d341eba8111bc4ddecd207`);

                const { data: tecnology } = await axios(`https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=edcf149de5d341eba8111bc4ddecd207`)

                setData(data);
                setBusiness(business);
                setEntertainment(entertainment);
                setGeneral(general);
                setHealty(healty);
                setScience(science);
                setSports(sports);
                setTecnology(tecnology);
                setLoading(false);
            } catch (e) { console.log(e) };
        })()
    }, [])

    //Filtered
    const [filterText, setFilterText] = useState("");
    const filteredBusiness = business != "" && business.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });

    const filteredentertainment = entertainment != "" && entertainment.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });

    const filteredGeneral = general != "" && general.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });

    const filteredHealty = healty != "" && healty.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });

    const filteredScience = science != "" && science.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });

    const filteredSports = sports != "" && sports.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });
    
    const filteredTecnology = tecnology != "" && tecnology.articles.filter((item) => {
        return item.title.toLowerCase().includes(filterText.toLowerCase());
    });
    


    const values = {
        data,
        loading,
        business,
        entertainment,
        general,
        healty,
        science,
        sports,
        tecnology,
        pagesNum,
        increasePagesNum,
        decreasePagesNum,
        filteredBusiness,
        filterText,
        setFilterText,
        filteredentertainment,
        filteredGeneral,
        filteredHealty,
        filteredScience,
        filteredSports,
        filteredTecnology
    }
    return <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
}


export const useData = () => useContext(DataContext);