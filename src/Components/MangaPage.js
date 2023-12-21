import React, { useEffect, useState } from "react";
import "./MangaPage.css";
import { MangaInfo } from "./MangaInfo";
import { MangaList } from "./MangaList";

const MangaPage = () => {
    const [mangaData, setMangaData] = useState();
    const [search, setSearch] = useState("");
    const [mangaInfo, setMangaInfo] = useState()



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

            <div className="container">
                <div className="mangaInfo">
                    {mangaInfo && <MangaInfo mangaInfo={mangaInfo} />}
                </div>
                <div className="manga-row">
                    <div className="row">
                        <MangaList
                            mangalist={mangaData}
                            setMangaInfo={setMangaInfo}



                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default MangaPage;