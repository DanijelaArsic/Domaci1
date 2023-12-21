import React, { useEffect, useState } from "react";
import "./MangaPage.css";

const MangaPage = () => {
    const [mangadata, setMangaData] = useState();
    const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            const res = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=20`);
            const resData = await res.json();

            console.log("API Response:", resData);

            if (Array.isArray(resData.data)) {
                console.log("Setting mangadata:", resData.data);
                setMangaData(resData.data);
            } else {
                setMangaData(null);
            }
        } catch (error) {
            console.error("Error fetching manga data:", error);
            setMangaData(null);
        }
    };



    useEffect(() => {
        getData();
    }, [search]);

    return (
        <div className="manga-content">
            <h2>MangaPage</h2>
            <div className="search-box">
                <input
                    type="search"
                    placeholder="Search manga..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="row">
                {mangadata ? (
                    mangadata.map((manga) => (
                        <div className="card" key={manga.mal_id}>
                            <img src={manga.images.jpg.large_image_url} alt={`Cover for ${manga.title}`} />
                            <div className="anime-info">
                                <h4>{manga.title}</h4>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No manga found or Loading manga data...</p>
                )}
            </div>
        </div>
    );
}

export default MangaPage;