import React, { useEffect, useState } from "react";
import './Components/style.css'
function App() {

  const [animeData, setAnimeData] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime`)
    const resData = await res.json();
    setAnimeData(resData)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="header">
      <h1>AnimePage</h1>
      <div className="search-box">
        <input type="search" placeholder="Search this page" />

      </div>


    </div>


  )







}


export default App