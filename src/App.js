import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, } from "react-router-dom";
import './Components/style.css'
import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";
import { AddToList } from "./Components/AddToList";
import { RemoveFromList } from "./Components/RemoveFromList";
import ContactPage from "./Components/ContactPage";
import MangaPage from "./Components/MangaPage";

function App() {
  const [search, setSearch] = useState("")
  const [animeData, setAnimeData] = useState()
  const [animeInfo, setAnimeInfo] = useState()
  const [myAnimeList, setmyAnimeList] = useState([])

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id
    })
    if (index < 0) {
      const newArray = [...myAnimeList, anime]
      setmyAnimeList(newArray);
    }

  }

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id
    })
    setmyAnimeList(newArray)
  }


  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?q=${search}`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])

  return (
    <Router>
      <div className="header">
        <h1>
          <Link to="/">AnimePage</Link>
        </h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search this page"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <div>
          <Link to="/manga">
            <span>Manga</span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <div className="animeInfo">
                  {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
                </div>
              </div>
              <div className="anime-row">
                <h2 className="text-heading">Anime</h2>
                <div className="row">
                  <AnimeList
                    animelist={animeData}
                    setAnimeInfo={setAnimeInfo}
                    animeComponent={AddToList}
                    handleList={(anime) => addTo(anime)}
                  />
                </div>
                <h2 className="text-heading">My List</h2>
                <div className="row">
                  <AnimeList
                    animelist={myAnimeList}
                    setAnimeInfo={setAnimeInfo}
                    animeComponent={RemoveFromList}
                    handleList={(anime) => removeFrom(anime)}
                  />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;