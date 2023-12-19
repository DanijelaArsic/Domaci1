import React, { useEffect, useState } from "react";
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








}


export default App