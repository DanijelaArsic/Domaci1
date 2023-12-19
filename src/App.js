import React, { useEffect, useState } from "react";
import './Components/style.css'
import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";

function App() {
  const [search, setSearch] = useState("")
  const [animeData, setAnimeData] = useState()
  const [animeInfo, setAnimeInfo] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?q=${search}`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }
  useEffect(() => {
    getData()
  }, [search])

  return (
    <><div className="header">
      <h1>AnimePage</h1>
      <div className="search-box">
        <input type="search" placeholder="Search this page"
          onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>

      </div>
      <div className="anime-row">
        <h2 className="text-heading">Anime</h2>
        <div className="row">
          <AnimeList animelist={animeData}
            setAnimeInfo={setAnimeInfo}
          />
        </div>
      </div>
    </div>
    </>

  )







}


export default App